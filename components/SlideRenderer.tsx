import React, { useState, useRef, useEffect } from 'react';
import { SlideContent } from '../types';
import { Card, Button, Badge } from './UI';
import { Timeline3D } from './Timeline3D';
import { Mic, CheckCircle, XCircle, Volume2, Globe, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { checkAudio } from '../services/geminiService';

interface SlideRendererProps {
  slide: SlideContent;
  theme?: 'default' | 'gta' | 'wukong';
  onScore: (correct: boolean) => void;
}

// Visualizer Component
const AudioVisualizer: React.FC<{ stream: MediaStream | null; recording: boolean; theme?: string }> = ({ stream, recording, theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);

  useEffect(() => {
    if (!stream || !recording || !canvasRef.current) return;

    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const analyser = audioCtx.createAnalyser();
    const source = audioCtx.createMediaStreamSource(stream);
    
    source.connect(analyser);
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    analyserRef.current = analyser;
    dataArrayRef.current = dataArray;

    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext('2d');
    if (!canvasCtx) return;

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2;
        
        let color = `rgb(${barHeight + 100}, 50, 200)`; // Default purple/blue
        if (theme === 'gta') color = `rgb(50, ${barHeight + 150}, 50)`;
        if (theme === 'wukong') color = `rgb(${barHeight + 150}, ${barHeight + 100}, 50)`;

        canvasCtx.fillStyle = color;
        canvasCtx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    };

    draw();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      audioCtx.close();
    };
  }, [stream, recording, theme]);

  return <canvas ref={canvasRef} width={300} height={100} className="w-full h-24 rounded-xl opacity-80" />;
};

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, theme, onScore }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [gapText, setGapText] = useState('');
  
  // Interactive Reveal State
  const [revealedItems, setRevealedItems] = useState<number[]>([]);
  
  // Audio State
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [analyzing, setAnalyzing] = useState(false);
  const [micError, setMicError] = useState<string | null>(null);
  
  // Language Toggle State
  const [showRu, setShowRu] = useState(false);
  const [showUz, setShowUz] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const isMounted = useRef(true);

  // Theme check
  const isGTA = theme === 'gta';
  const isWukong = theme === 'wukong';

  useEffect(() => { isMounted.current = true; return () => { isMounted.current = false; }; }, []);

  // Reset state on slide change
  useEffect(() => {
    setSelectedOption(null);
    setFeedback(null);
    setGapText('');
    setAiAnalysis('');
    setAudioBlob(null);
    setShowRu(false);
    setShowUz(false);
    setMicError(null);
    setRevealedItems([0]); // Always reveal first item
  }, [slide.id]);

  useEffect(() => {
    return () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      if (streamRef.current) streamRef.current.getTracks().forEach(track => track.stop());
    };
  }, [audioUrl]);

  useEffect(() => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setAudioUrl(null);
    }
  }, [audioBlob]);

  const handleReveal = (idx: number) => {
    if (!revealedItems.includes(idx)) {
      setRevealedItems([...revealedItems, idx]);
    }
  };

  const handleQuizSubmit = (index: number) => {
    if (selectedOption !== null) return; // Lock after selection
    setSelectedOption(index);
    const isCorrect = index === slide.correctAnswer;
    onScore(isCorrect);
    
    if (isCorrect) {
      setFeedback(slide.explanation || 'Correct!');
    } else {
      setFeedback('Incorrect. Try again.');
    }
  };

  const handleGapSubmit = () => {
    if (feedback === 'Correct!') return;
    const isCorrect = gapText.toLowerCase().trim() === String(slide.correctAnswer).toLowerCase();
    onScore(isCorrect);
    
    if (isCorrect) {
      setFeedback('Correct!');
    } else {
      setFeedback(`Answer: ${slide.correctAnswer}`);
    }
  };

  const startRecording = async () => {
    setMicError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (!isMounted.current) {
        stream.getTracks().forEach(track => track.stop());
        return;
      }
      
      streamRef.current = stream;
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' });
        if (isMounted.current) setAudioBlob(blob);
        // Don't stop tracks here if we want visualizer to persist, but for this logic we stop them
        stream.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      };
      
      recorder.start();
      if (isMounted.current) setIsRecording(true);
      mediaRecorderRef.current = recorder;
    } catch (err) {
      console.error(err);
      if (isMounted.current) setMicError("Microphone access denied.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
    }
    if (isMounted.current) setIsRecording(false);
  };

  const analyzeAudio = async () => {
    if (!audioBlob) return;
    setAnalyzing(true);
    const prompt = slide.speakingPrompts && slide.speakingPrompts.length > 0 ? slide.speakingPrompts[0] : slide.title;
    const response = await checkAudio(audioBlob, prompt);
    if (isMounted.current) {
      setAiAnalysis(response);
      setAnalyzing(false);
      onScore(true); // Award points for completing speaking task
    }
  };

  const renderMarkdown = (text?: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className={`font-extrabold drop-shadow-sm ${isGTA ? 'text-green-400' : isWukong ? 'text-amber-600' : 'text-surgical-600'}`}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const enPoints = slide.bulletPoints?.filter(bp => bp.lang === 'en') || [];
  const uzPoints = slide.bulletPoints?.filter(bp => bp.lang === 'uz') || [];
  const ruPoints = slide.bulletPoints?.filter(bp => bp.lang === 'ru') || [];

  const LanguageToggles = ({ className = "" }: { className?: string }) => {
    if ((!uzPoints.length && !ruPoints.length)) return null;
    return (
      <div className={`flex gap-2 ${className}`}>
        {uzPoints.length > 0 && (
          <button onClick={() => setShowUz(!showUz)} className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all active:scale-95 flex items-center gap-1.5 border border-white/50 ${showUz ? 'bg-surgical-500 text-white shadow-neon-blue' : 'bg-slate-200 text-slate-500'}`}>
            <Globe className="w-3 h-3" /> UZ
          </button>
        )}
        {ruPoints.length > 0 && (
          <button onClick={() => setShowRu(!showRu)} className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all active:scale-95 flex items-center gap-1.5 border border-white/50 ${showRu ? 'bg-surgical-500 text-white shadow-neon-blue' : 'bg-slate-200 text-slate-500'}`}>
            <Globe className="w-3 h-3" /> RU
          </button>
        )}
      </div>
    );
  };

  const InteractiveListItem = ({ bp, idx, revealed, onReveal }: any) => {
    const isRevealed = revealedItems.includes(idx);
    return (
      <div 
        onClick={() => { if(!isRevealed) handleReveal(idx); }}
        className={`relative p-4 rounded-xl border transition-all duration-300 ${isRevealed ? 'translate-x-0 opacity-100' : 'cursor-pointer hover:bg-slate-100/50 translate-x-2 opacity-60'} ${isGTA ? 'bg-slate-800 border-slate-700' : isWukong ? 'bg-[#fffbeb] border-amber-200' : 'bg-[#e0e5ec] border-white/50'} shadow-sm mb-3`}
      >
        {!isRevealed && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200/50 backdrop-blur-sm rounded-xl z-10 font-bold text-xs uppercase tracking-widest text-slate-500 animate-pulse">
            Click to Reveal Data
          </div>
        )}
        <div className={`transition-filter duration-500 ${isRevealed ? '' : 'blur-sm'}`}>
          <div className="flex items-center gap-2 mb-1">
            <Badge color={isWukong ? 'bg-amber-600 text-white' : 'bg-surgical-500 text-white shadow-sm'}>EN</Badge>
            <span className={`font-bold uppercase text-[10px] tracking-widest ${isWukong ? 'text-amber-800/60' : 'text-slate-400'}`}>{bp.label}</span>
          </div>
          <p className={`text-lg font-medium leading-snug ${isGTA ? 'text-slate-200' : isWukong ? 'text-[#451a03]' : 'text-slate-800'}`}>{renderMarkdown(bp.text)}</p>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (slide.type) {
      case 'intro':
      case 'concept':
        return (
          <div className="flex flex-col h-full gap-4">
             <div className={`flex-shrink-0 flex gap-4 items-start ${isGTA || isWukong ? 'flex-col md:flex-row' : ''}`}>
                {slide.imageUrl && (
                  <div className={`rounded-xl overflow-hidden shadow-lg border-2 border-[#e0e5ec] transition-transform hover:scale-105 duration-500 ${isGTA || isWukong ? 'w-full md:w-1/2 max-h-[250px]' : 'w-1/3 max-w-[180px] hidden md:block'}`}>
                    <img src={slide.imageUrl} alt="Visual" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-1 w-full">
                   {slide.leadText && <p className={`text-xl font-medium leading-relaxed animate-fade-in ${isGTA ? 'text-2xl text-slate-200' : isWukong ? 'text-2xl text-[#451a03] font-mythical' : 'md:text-2xl text-slate-700'}`}>{renderMarkdown(slide.leadText)}</p>}
                   <LanguageToggles className="mt-3" />
                </div>
             </div>

             <div className="flex-1 overflow-y-auto min-h-0 pr-2 space-y-3">
                {enPoints.map((bp, idx) => (
                  <InteractiveListItem key={`en-${idx}`} bp={bp} idx={idx} />
                ))}
                {showUz && uzPoints.map((bp, idx) => <div key={`uz-${idx}`} className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 animate-pop"><p className="text-base text-slate-700 font-medium">{renderMarkdown(bp.text)}</p></div>)}
                {showRu && ruPoints.map((bp, idx) => <div key={`ru-${idx}`} className="bg-indigo-50/50 p-3 rounded-xl border border-indigo-100 animate-pop"><p className="text-base text-slate-700 font-medium">{renderMarkdown(bp.text)}</p></div>)}
             </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="flex flex-col h-full">
            <div className="text-center mb-2 shrink-0">
               <p className={`text-xl font-medium ${isGTA ? 'text-slate-300' : isWukong ? 'text-[#451a03] font-mythical' : 'text-slate-700'}`}>{renderMarkdown(slide.leadText)}</p>
            </div>
            <div className="h-64 md:h-72 w-full shrink-0">
               {slide.visualData && <Timeline3D points={slide.visualData} context={slide.visualContext} />}
            </div>
            <div className="flex justify-center my-2 shrink-0"><LanguageToggles /></div>
            <div className="flex-1 overflow-y-auto min-h-0 space-y-2 pr-2">
               {enPoints.map((bp, idx) => (
                 <div key={`en-${idx}`} className={`flex items-start gap-3 p-3 rounded-xl border shadow-sm cursor-help hover:scale-[1.02] transition-transform ${isGTA ? 'bg-slate-800 border-slate-600' : isWukong ? 'bg-[#fffbeb] border-amber-200' : 'bg-white/40 border-white'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${isWukong ? 'bg-amber-600' : 'bg-surgical-500'}`} />
                    <div><p className={`font-medium ${isGTA ? 'text-slate-300' : isWukong ? 'text-[#451a03]' : 'text-slate-800'}`}>{renderMarkdown(bp.text)}</p></div>
                 </div>
               ))}
            </div>
          </div>
        );

      case 'quiz':
      case 'test':
      case 'reading':
        return (
          <div className="flex flex-col h-full gap-4">
            {isGTA && slide.imageUrl && (
                <div className="w-full h-32 rounded-xl overflow-hidden shrink-0 border border-green-500/30">
                    <img src={slide.imageUrl} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"/>
                </div>
            )}
            {slide.passage && (
              <div className={`${isGTA ? 'bg-slate-800 border-slate-600 text-slate-300' : isWukong ? 'bg-[#fffbeb] border-amber-300 text-[#451a03]' : 'bg-[#e0e5ec] border-white/50 text-slate-700'} p-5 rounded-2xl shadow-inner border shrink-0 max-h-[25vh] overflow-y-auto`}>
                 <p className="italic leading-relaxed text-lg font-serif">{renderMarkdown(slide.passage)}</p>
              </div>
            )}
            
            <h3 className={`text-2xl font-bold leading-tight shrink-0 ${isGTA ? 'text-slate-100' : isWukong ? 'text-[#451a03] font-mythical' : 'text-slate-800'}`}>{renderMarkdown(slide.question)}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-shrink-0">
              {slide.options?.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === slide.correctAnswer;
                let statusClass = isGTA ? "bg-slate-800 text-slate-300 border-slate-600 hover:bg-slate-700" : isWukong ? "bg-[#fffbeb] text-[#451a03] border-amber-200 hover:bg-amber-50" : "art-3d-btn-secondary bg-[#e0e5ec]";
                
                if (isSelected) {
                  statusClass = isCorrect 
                    ? "bg-green-100 text-green-800 border-green-300 shadow-[inset_2px_2px_5px_#bbf7d0,inset_-2px_-2px_5px_#ffffff] scale-105" 
                    : "bg-red-100 text-red-800 border-red-300 shadow-[inset_2px_2px_5px_#fecaca,inset_-2px_-2px_5px_#ffffff] animate-shake";
                }
                
                return (
                  <button
                    key={idx}
                    onClick={() => handleQuizSubmit(idx)}
                    disabled={selectedOption !== null}
                    className={`p-4 text-left font-bold text-lg transition-all ${statusClass} rounded-xl flex items-center justify-between group active:scale-95 border relative overflow-hidden`}
                  >
                    <span className="z-10">{opt}</span>
                    {isSelected && (
                      isCorrect 
                        ? <CheckCircle className="w-5 h-5 text-green-600 animate-pop z-10" /> 
                        : <XCircle className="w-5 h-5 text-red-500 animate-pop z-10" />
                    )}
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                );
              })}
            </div>
            
            <div className="flex-1 min-h-[60px]">
              {feedback && (
                <div className={`h-full p-4 rounded-xl animate-fade-in font-medium text-lg flex items-center justify-center text-center shadow-md ${
                  selectedOption === slide.correctAnswer 
                  ? 'bg-green-50 text-green-900 border border-green-200' 
                  : 'bg-red-50 text-red-900 border border-red-200'
                }`}>
                  {renderMarkdown(feedback)}
                </div>
              )}
            </div>
          </div>
        );

      case 'gap-fill':
        return (
          <div className="flex flex-col h-full justify-center gap-8">
            <div className={`${isGTA ? 'bg-slate-800 border-slate-600' : isWukong ? 'bg-[#fffbeb] border-amber-300' : 'bg-[#e0e5ec] border-white/50'} p-8 rounded-3xl shadow-lg border relative overflow-hidden`}>
              {/* Decorative Scan Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer"></div>
              
              <p className={`text-2xl leading-loose font-medium text-center ${isGTA ? 'text-slate-200' : isWukong ? 'text-[#451a03]' : 'text-slate-800'}`}>
                {slide.leadText?.split('__________').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <input
                        type="text"
                        value={gapText}
                        onChange={(e) => setGapText(e.target.value)}
                        className={`mx-2 w-48 art-3d-input text-center font-bold text-xl focus:scale-110 transition-transform ${isGTA ? 'text-green-400 bg-slate-900 shadow-inner' : isWukong ? 'text-amber-800 bg-amber-50 border-amber-200' : 'text-surgical-600'}`}
                        placeholder="?"
                        autoComplete="off"
                        autoFocus
                      />
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <Button onClick={handleGapSubmit} disabled={!gapText} className="min-w-[200px] !text-lg !py-4 shadow-3d-floating">Check Answer</Button>
              {feedback && (
                <div className={`mt-2 px-6 py-3 rounded-xl font-bold text-lg animate-pop ${
                  feedback === 'Correct!' ? 'bg-green-100 text-green-700 shadow-neon-green' : 'bg-red-100 text-red-700 animate-shake'
                }`}>
                  {feedback}
                </div>
              )}
            </div>
          </div>
        );

      case 'speaking':
        return (
          <div className="flex flex-col h-full justify-between">
            <div className="art-glass-panel p-6 flex-1 flex flex-col">
               <div className="shrink-0 mb-4">
                 <p className={`text-xl font-bold mb-4 ${isGTA ? 'text-slate-200' : isWukong ? 'text-[#451a03] font-mythical' : 'text-slate-700'}`}>{slide.leadText}</p>
                 <div className={`${isGTA ? 'bg-slate-800 border-slate-600' : isWukong ? 'bg-[#fffbeb] border-amber-300' : 'bg-white/50 border-white/60'} p-4 rounded-xl border`}>
                    <ul className="space-y-3">
                      {slide.speakingPrompts?.map((prompt, i) => (
                        <li key={i} className={`flex items-start gap-3 font-medium text-lg ${isGTA ? 'text-slate-300' : isWukong ? 'text-[#451a03]' : 'text-slate-800'}`}>
                          <span className={`${isWukong ? 'bg-amber-600' : 'bg-surgical-500'} text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5`}>{i + 1}</span>
                          {renderMarkdown(prompt)}
                        </li>
                      ))}
                    </ul>
                 </div>
               </div>
               
               <div className="flex-1 flex flex-col items-center justify-center gap-6 min-h-0 relative">
                 {/* VISUALIZER BACKGROUND */}
                 {isRecording && streamRef.current && (
                   <div className="absolute inset-0 flex items-center justify-center z-0 opacity-30 pointer-events-none">
                     <AudioVisualizer stream={streamRef.current} recording={isRecording} theme={theme} />
                   </div>
                 )}

                 {/* Mic Button */}
                 <button
                   onClick={isRecording ? stopRecording : startRecording}
                   className={`w-32 h-32 art-3d-sphere shrink-0 z-10 ${isRecording ? 'recording scale-110 shadow-neon-red' : 'hover:scale-105'} transition-all duration-300`}
                 >
                   <Mic className={`w-14 h-14 text-white drop-shadow-md ${isRecording ? 'animate-pulse' : ''}`} />
                 </button>
                 
                 {micError && (
                   <div className="bg-red-100 text-red-700 p-3 rounded-xl flex items-center gap-2 animate-shake z-10">
                     <AlertCircle className="w-5 h-5" />
                     <span className="text-sm font-bold">{micError}</span>
                   </div>
                 )}
                 
                 <div className="w-full max-w-md space-y-3 z-10">
                   {audioUrl && (
                     <div className={`${isGTA ? 'bg-slate-800 border-slate-600' : isWukong ? 'bg-[#fffbeb] border-amber-300' : 'bg-white/50 border-white'} animate-fade-in p-3 rounded-xl border flex items-center gap-3 shadow-sm`}>
                       <audio controls src={audioUrl} className="flex-1 h-8" />
                       <Button onClick={analyzeAudio} disabled={analyzing} className="!py-1.5 !px-3 !text-xs whitespace-nowrap" variant="secondary">
                          {analyzing ? 'Thinking...' : 'Analyze'}
                       </Button>
                     </div>
                   )}

                   {aiAnalysis && (
                     <div className={`${isGTA ? 'bg-slate-800 border-slate-600 text-slate-300' : isWukong ? 'bg-[#fffbeb] border-amber-300 text-[#451a03]' : 'bg-[#e0e5ec] border-white/50 text-slate-700'} p-4 rounded-xl shadow-inner max-h-[150px] overflow-y-auto border animate-pop`}>
                       <p className="text-sm font-medium whitespace-pre-wrap">{renderMarkdown(aiAnalysis)}</p>
                     </div>
                   )}
                 </div>
               </div>
            </div>
          </div>
        );
        
      default:
        return <div>Unknown Slide Type</div>;
    }
  };

  return (
    <Card className="h-full flex flex-col p-0 overflow-hidden !bg-transparent !shadow-none !border-none perspective-500">
      <div className="flex items-center gap-3 mb-2 shrink-0 px-1">
        <Badge color={isGTA ? "bg-green-900 text-green-400 border border-green-500" : isWukong ? "bg-amber-100 text-amber-800 border border-amber-400" : "bg-slate-200 text-slate-600 border border-slate-300 shadow-sm"}>{slide.type.toUpperCase()}</Badge>
        <h2 className={`text-3xl font-black tracking-tight leading-none ${isGTA ? 'text-slate-100' : isWukong ? 'text-[#451a03] font-mythical' : 'text-slate-800 shiny-text'}`}>{renderMarkdown(slide.title)}</h2>
      </div>
      
      <div className={`flex-1 rounded-3xl p-5 md:p-8 overflow-hidden relative border transition-all duration-500 transform hover:scale-[1.005] hover:shadow-2xl ${isGTA ? 'bg-slate-900 border-green-500/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]' : isWukong ? 'bg-[#fffbeb] border-amber-500/30 shadow-[0_10px_40px_rgba(69,10,10,0.4)]' : 'bg-[#e0e5ec] shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff] border-white/60'}`}>
         {/* Background glow for depth */}
         <div className={`absolute top-0 right-0 w-64 h-64 opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none ${isWukong ? 'bg-amber-400' : 'bg-white'}`}></div>
         {renderContent()}
      </div>
    </Card>
  );
};