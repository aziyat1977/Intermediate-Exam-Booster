import React, { useState, useRef, useEffect } from 'react';
import { SlideContent } from '../types';
import { Card, Button, Badge } from './UI';
import { Timeline3D } from './Timeline3D';
import { Mic, CheckCircle, XCircle, ChevronRight, Volume2, Globe } from 'lucide-react';
import { checkAudio } from '../services/geminiService';

interface SlideRendererProps {
  slide: SlideContent;
  onNext: () => void;
  isLast: boolean;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, onNext, isLast }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [gapText, setGapText] = useState('');
  
  // Audio State
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [analyzing, setAnalyzing] = useState(false);
  
  // Language Toggle State
  const [showRu, setShowRu] = useState(false);
  const [showUz, setShowUz] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Reset state on slide change
  useEffect(() => {
    setSelectedOption(null);
    setFeedback(null);
    setGapText('');
    setAiAnalysis('');
    setAudioBlob(null);
    setShowRu(false);
    setShowUz(false);
  }, [slide.id]);

  // Cleanup effect for audio resources
  useEffect(() => {
    return () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      if (streamRef.current) streamRef.current.getTracks().forEach(track => track.stop());
    };
  }, [audioUrl]);

  // Handle blob to URL conversion
  useEffect(() => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setAudioUrl(null);
    }
  }, [audioBlob]);

  const handleQuizSubmit = (index: number) => {
    setSelectedOption(index);
    if (index === slide.correctAnswer) {
      setFeedback(slide.explanation || 'Correct!');
    } else {
      setFeedback('Not quite. Try again or check the explanation.');
    }
  };

  const handleGapSubmit = () => {
    if (gapText.toLowerCase().trim() === String(slide.correctAnswer).toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback(`Incorrect. The answer is: ${slide.correctAnswer}`);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' });
        setAudioBlob(blob);
        stream.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      };
      
      recorder.start();
      setIsRecording(true);
      mediaRecorderRef.current = recorder;
    } catch (err) {
      console.error(err);
      alert("Microphone access denied or not available.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  };

  const analyzeAudio = async () => {
    if (!audioBlob) return;
    setAnalyzing(true);
    const prompt = slide.speakingPrompts && slide.speakingPrompts.length > 0 
      ? slide.speakingPrompts[0] 
      : slide.title;
    
    const response = await checkAudio(audioBlob, prompt);
    setAiAnalysis(response);
    setAnalyzing(false);
  };

  const renderMarkdown = (text?: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-extrabold text-surgical-600 drop-shadow-sm">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // Filter bullet points by language
  const enPoints = slide.bulletPoints?.filter(bp => bp.lang === 'en') || [];
  const uzPoints = slide.bulletPoints?.filter(bp => bp.lang === 'uz') || [];
  const ruPoints = slide.bulletPoints?.filter(bp => bp.lang === 'ru') || [];
  const hasUz = uzPoints.length > 0;
  const hasRu = ruPoints.length > 0;

  const LanguageToggles = ({ className = "" }: { className?: string }) => {
    if (!hasUz && !hasRu) return null;
    return (
      <div className={`flex gap-3 ${className}`}>
        {hasUz && (
          <button 
            onClick={() => setShowUz(!showUz)}
            className={`px-4 py-2 rounded-xl font-bold transition-all shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] active:scale-95 flex items-center gap-2 border border-white/50 ${showUz ? 'bg-surgical-500 text-white' : 'bg-[#e0e5ec] text-slate-500 hover:text-surgical-600'}`}
          >
            <Globe className="w-4 h-4" /> UZ
          </button>
        )}
        {hasRu && (
          <button 
            onClick={() => setShowRu(!showRu)}
            className={`px-4 py-2 rounded-xl font-bold transition-all shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] active:scale-95 flex items-center gap-2 border border-white/50 ${showRu ? 'bg-surgical-500 text-white' : 'bg-[#e0e5ec] text-slate-500 hover:text-surgical-600'}`}
          >
            <Globe className="w-4 h-4" /> RU
          </button>
        )}
      </div>
    );
  };

  const renderContent = () => {
    switch (slide.type) {
      case 'intro':
      case 'concept':
        return (
          <div className="space-y-8">
            {slide.imageUrl && (
              <div className="rounded-3xl overflow-hidden shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] border-4 border-[#e0e5ec]">
                <img src={slide.imageUrl} alt="Visual" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            )}
            
            {slide.leadText && <p className="text-xl text-slate-700 font-medium leading-relaxed">{renderMarkdown(slide.leadText)}</p>}

            <LanguageToggles className="justify-end" />

            <div className="grid gap-6">
              {enPoints.map((bp, idx) => (
                <div key={`en-${idx}`} className="bg-[#e0e5ec] p-6 rounded-2xl shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff] border border-white/50">
                  <Badge color='bg-surgical-500 text-white shadow-md'>EN</Badge>
                  <span className="ml-3 font-bold text-slate-500 uppercase text-sm tracking-wider">{bp.label}</span>
                  <p className="mt-3 text-lg text-slate-800 font-medium">{renderMarkdown(bp.text)}</p>
                </div>
              ))}
              
              {showUz && uzPoints.map((bp, idx) => (
                <div key={`uz-${idx}`} className="bg-emerald-50/50 p-6 rounded-2xl shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff] border border-white/50 animate-fade-in">
                  <Badge color='bg-emerald-500 text-white shadow-md'>UZ</Badge>
                  <span className="ml-3 font-bold text-slate-500 uppercase text-sm tracking-wider">{bp.label}</span>
                  <p className="mt-3 text-lg text-slate-800 font-medium">{renderMarkdown(bp.text)}</p>
                </div>
              ))}

              {showRu && ruPoints.map((bp, idx) => (
                <div key={`ru-${idx}`} className="bg-indigo-50/50 p-6 rounded-2xl shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff] border border-white/50 animate-fade-in">
                  <Badge color='bg-indigo-500 text-white shadow-md'>RU</Badge>
                  <span className="ml-3 font-bold text-slate-500 uppercase text-sm tracking-wider">{bp.label}</span>
                  <p className="mt-3 text-lg text-slate-800 font-medium">{renderMarkdown(bp.text)}</p>
                </div>
              ))}
            </div>

            {slide.question && <p className="text-surgical-700 font-bold italic mt-4 text-lg bg-surgical-100/50 p-4 rounded-xl border border-surgical-200">{renderMarkdown(slide.question)}</p>}
          </div>
        );

      case 'timeline':
        return (
          <div className="space-y-8">
            <div className="text-center mb-6">
               <p className="text-xl text-slate-700 font-medium">{renderMarkdown(slide.leadText)}</p>
            </div>
            {slide.visualData && (
              <div className="py-8">
                <Timeline3D points={slide.visualData} context={slide.visualContext} />
              </div>
            )}
            
            <LanguageToggles className="justify-center mt-8 mb-4" />

            <div className="grid gap-4">
               {enPoints.map((bp, idx) => (
                 <div key={`en-${idx}`} className="flex items-start gap-4 p-4 bg-white/40 rounded-xl border border-white">
                    <div className="w-2 h-2 rounded-full bg-surgical-500 mt-2.5 shrink-0" />
                    <div>
                      <span className="font-bold text-surgical-700 uppercase text-xs tracking-wider block mb-1">{bp.label}</span>
                      <p className="text-slate-700">{renderMarkdown(bp.text)}</p>
                    </div>
                 </div>
               ))}
               
               {showUz && uzPoints.map((bp, idx) => (
                 <div key={`uz-${idx}`} className="flex items-start gap-4 p-4 bg-emerald-50/50 rounded-xl border border-white animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                    <div>
                      <Badge color="bg-emerald-100 text-emerald-700 mb-1 border-emerald-200 border text-[10px] py-0 px-2">UZ</Badge>
                      <span className="font-bold text-emerald-700 uppercase text-xs tracking-wider block mb-1">{bp.label}</span>
                      <p className="text-slate-700">{renderMarkdown(bp.text)}</p>
                    </div>
                 </div>
               ))}

               {showRu && ruPoints.map((bp, idx) => (
                 <div key={`ru-${idx}`} className="flex items-start gap-4 p-4 bg-indigo-50/50 rounded-xl border border-white animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 shrink-0" />
                    <div>
                      <Badge color="bg-indigo-100 text-indigo-700 mb-1 border-indigo-200 border text-[10px] py-0 px-2">RU</Badge>
                      <span className="font-bold text-indigo-700 uppercase text-xs tracking-wider block mb-1">{bp.label}</span>
                      <p className="text-slate-700">{renderMarkdown(bp.text)}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        );

      case 'quiz':
      case 'test':
      case 'reading':
        return (
          <div className="space-y-8">
            {slide.passage && (
              <div className="bg-[#e0e5ec] p-8 rounded-3xl shadow-[inset_6px_6px_12px_#a3b1c6,inset_-6px_-6px_12px_#ffffff] italic text-slate-700 leading-relaxed text-lg font-serif">
                 {renderMarkdown(slide.passage)}
              </div>
            )}
            <h3 className="text-2xl font-bold text-slate-800 drop-shadow-sm">{renderMarkdown(slide.question)}</h3>
            <div className="grid gap-4">
              {slide.options?.map((opt, idx) => {
                let statusClass = "art-3d-btn-secondary";
                if (selectedOption === idx) {
                  if (idx === slide.correctAnswer) {
                    statusClass = "bg-green-100 text-green-700 shadow-[inset_4px_4px_8px_#bbf7d0,inset_-4px_-4px_8px_#ffffff] border-green-300";
                  } else {
                    statusClass = "bg-red-100 text-red-700 shadow-[inset_4px_4px_8px_#fecaca,inset_-4px_-4px_8px_#ffffff] border-red-300";
                  }
                }
                
                return (
                  <button
                    key={idx}
                    onClick={() => handleQuizSubmit(idx)}
                    className={`w-full p-5 text-left font-semibold text-lg transition-all ${statusClass} rounded-2xl flex items-center justify-between group`}
                  >
                    <span>{opt}</span>
                    {selectedOption === idx && (
                      idx === slide.correctAnswer 
                        ? <CheckCircle className="w-6 h-6 text-green-600 drop-shadow-md" /> 
                        : <XCircle className="w-6 h-6 text-red-500 drop-shadow-md" />
                    )}
                  </button>
                );
              })}
            </div>
            {feedback && (
              <div className={`p-6 rounded-2xl animate-fade-in font-medium shadow-lg ${
                selectedOption === slide.correctAnswer 
                ? 'bg-gradient-to-r from-green-50 to-green-100 text-green-800 border border-green-200' 
                : 'bg-gradient-to-r from-red-50 to-red-100 text-red-800 border border-red-200'
              }`}>
                {renderMarkdown(feedback)}
              </div>
            )}
          </div>
        );

      case 'gap-fill':
        return (
          <div className="space-y-8">
            <div className="bg-[#e0e5ec] p-8 rounded-3xl shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff]">
              <p className="text-xl text-slate-800 leading-loose font-medium">
                {slide.leadText?.split('__________').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <input
                        type="text"
                        value={gapText}
                        onChange={(e) => setGapText(e.target.value)}
                        className="mx-3 w-48 art-3d-input text-center font-bold text-surgical-700 text-lg"
                        placeholder="type here..."
                      />
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className="flex justify-center">
              <Button onClick={handleGapSubmit} disabled={!gapText} className="min-w-[200px]">Check Answer</Button>
            </div>
            {feedback && (
              <div className="mt-4 p-6 bg-surgical-50 text-surgical-900 rounded-2xl shadow-[inset_2px_2px_4px_#bfdbfe] border border-surgical-100">
                {feedback}
              </div>
            )}
          </div>
        );

      case 'speaking':
        return (
          <div className="space-y-8">
            <div className="art-glass-panel p-8">
               <p className="text-xl text-slate-700 mb-6 font-semibold">{slide.leadText}</p>
               <ul className="space-y-4 mb-10">
                 {slide.speakingPrompts?.map((prompt, i) => (
                   <li key={i} className="flex items-start gap-3 text-slate-800 font-medium bg-white/50 p-4 rounded-xl">
                     <span className="bg-surgical-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                     {renderMarkdown(prompt)}
                   </li>
                 ))}
               </ul>
               
               <div className="flex flex-col items-center gap-8">
                 <button
                   onClick={isRecording ? stopRecording : startRecording}
                   className={`w-28 h-28 art-3d-sphere ${isRecording ? 'recording' : 'hover:scale-105'}`}
                 >
                   <Mic className={`w-12 h-12 text-white drop-shadow-md ${isRecording ? 'animate-pulse' : ''}`} />
                 </button>
                 <span className={`text-sm font-black uppercase tracking-widest ${isRecording ? 'text-red-500' : 'text-slate-400'}`}>
                   {isRecording ? 'Recording in progress...' : 'Tap Sphere to Record'}
                 </span>

                 {audioUrl && (
                   <div className="w-full animate-fade-in bg-white/50 p-6 rounded-3xl border border-white">
                     <div className="flex justify-center mb-6">
                       <audio controls src={audioUrl} className="w-full max-w-md h-12 rounded-full shadow-md" />
                     </div>
                     <Button onClick={analyzeAudio} disabled={analyzing} className="w-full" variant="secondary">
                        {analyzing ? (
                          <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-surgical-500 border-t-transparent rounded-full animate-spin"/> Analyzing...</span>
                        ) : (
                          <span className="flex items-center gap-2"><Volume2 className="w-5 h-5"/> Analyze Recording</span>
                        )}
                     </Button>
                   </div>
                 )}

                 {aiAnalysis && (
                   <div className="w-full p-8 bg-[#e0e5ec] rounded-3xl shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff] text-left animate-fade-in border border-white/50">
                     <h4 className="font-bold text-surgical-700 mb-4 flex items-center gap-2 text-lg">
                       <CheckCircle className="w-6 h-6" /> Feedback
                     </h4>
                     <div className="whitespace-pre-wrap text-slate-700 leading-relaxed font-medium">{renderMarkdown(aiAnalysis)}</div>
                   </div>
                 )}
               </div>
            </div>
          </div>
        );
        
      default:
        return <div>Unknown Slide Type</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full relative perspective-1000">
      {/* Main Slide Card */}
      <Card className="min-h-[650px] flex flex-col justify-between animate-fade-in-up">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 border-b border-slate-200 pb-6 gap-4">
            <div>
              <Badge color="bg-slate-200 text-slate-500 mb-3 shadow-none border border-slate-300">{slide.type.toUpperCase()}</Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight drop-shadow-sm">{renderMarkdown(slide.title)}</h2>
            </div>
          </div>
          
          <div className="py-2">
            {renderContent()}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 flex justify-end">
          <Button onClick={onNext} className="group shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
            {isLast ? 'Complete Module' : 'Next Slide'}
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>
    </div>
  );
};