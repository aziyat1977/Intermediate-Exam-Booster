import React, { useState, useRef } from 'react';
import { SlideContent } from '../types';
import { Card, Button, Badge } from './UI';
import { Mic, Play, CheckCircle, XCircle, HelpCircle, Send, ChevronRight } from 'lucide-react';
import { askTutor, checkAudio } from '../services/geminiService';

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
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [analyzing, setAnalyzing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  // AI Tutor State
  const [showTutor, setShowTutor] = useState(false);
  const [tutorQuery, setTutorQuery] = useState('');
  const [tutorResponse, setTutorResponse] = useState('');
  const [tutorLoading, setTutorLoading] = useState(false);

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
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        setAudioBlob(blob);
      };
      
      recorder.start();
      setIsRecording(true);
      mediaRecorderRef.current = recorder;
    } catch (err) {
      alert("Microphone access denied or not available.");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const analyzeAudio = async () => {
    if (!audioBlob) return;
    setAnalyzing(true);
    const prompt = slide.speakingPrompts ? slide.speakingPrompts[0] : slide.title;
    const response = await checkAudio(audioBlob, prompt);
    setAiAnalysis(response);
    setAnalyzing(false);
  };

  const handleTutorAsk = async () => {
    if (!tutorQuery) return;
    setTutorLoading(true);
    const context = JSON.stringify(slide);
    const response = await askTutor(context, tutorQuery);
    setTutorResponse(response);
    setTutorLoading(false);
  };

  const renderContent = () => {
    switch (slide.type) {
      case 'intro':
      case 'concept':
        return (
          <div className="space-y-6">
            {slide.imageUrl && (
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img src={slide.imageUrl} alt="Visual" className="w-full h-64 object-cover" />
              </div>
            )}
            {slide.leadText && <p className="text-xl text-slate-700 font-medium">{slide.leadText}</p>}
            <div className="grid gap-4">
              {slide.bulletPoints?.map((bp, idx) => (
                <div key={idx} className="bg-white/50 p-4 rounded-lg border border-white shadow-sm hover:shadow-md transition-all">
                  <Badge color={bp.lang === 'en' ? 'bg-surgical-500 text-white' : 'bg-slate-200 text-slate-700'}>
                    {bp.lang.toUpperCase()} - {bp.label}
                  </Badge>
                  <p className="mt-2 text-lg text-slate-800">{bp.text}</p>
                </div>
              ))}
            </div>
            {slide.question && <p className="text-surgical-700 font-bold italic mt-4">{slide.question}</p>}
          </div>
        );

      case 'quiz':
      case 'test':
      case 'reading':
        return (
          <div className="space-y-6">
            {slide.passage && (
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 italic text-slate-700 leading-relaxed">
                 {slide.passage}
              </div>
            )}
            <h3 className="text-2xl font-bold text-slate-800">{slide.question}</h3>
            <div className="grid gap-3">
              {slide.options?.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuizSubmit(idx)}
                  className={`p-4 rounded-xl text-left transition-all border-2 ${
                    selectedOption === idx
                      ? idx === slide.correctAnswer
                        ? 'bg-green-50 border-green-500 text-green-700'
                        : 'bg-red-50 border-red-500 text-red-700'
                      : 'bg-white border-transparent hover:border-surgical-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{opt}</span>
                    {selectedOption === idx && (
                      idx === slide.correctAnswer ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />
                    )}
                  </div>
                </button>
              ))}
            </div>
            {feedback && (
              <div className={`p-4 rounded-lg animate-fade-in ${
                selectedOption === slide.correctAnswer ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {feedback}
              </div>
            )}
          </div>
        );

      case 'gap-fill':
        return (
          <div className="space-y-6">
            <p className="text-xl text-slate-800 leading-loose">
              {slide.leadText?.split('__________').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <input
                      type="text"
                      value={gapText}
                      onChange={(e) => setGapText(e.target.value)}
                      className="mx-2 px-3 py-1 border-b-2 border-surgical-400 focus:border-surgical-600 outline-none bg-transparent text-center w-40 font-bold text-surgical-700"
                      placeholder="type here..."
                    />
                  )}
                </React.Fragment>
              ))}
            </p>
            <Button onClick={handleGapSubmit} disabled={!gapText}>Check Answer</Button>
            {feedback && <div className="mt-4 p-4 bg-surgical-50 text-surgical-900 rounded-lg">{feedback}</div>}
          </div>
        );

      case 'speaking':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-100 shadow-inner">
               <p className="text-lg text-slate-600 mb-4">{slide.leadText}</p>
               <ul className="list-disc pl-5 space-y-2 mb-6">
                 {slide.speakingPrompts?.map((prompt, i) => (
                   <li key={i} className="text-slate-800 font-medium">{prompt}</li>
                 ))}
               </ul>
               
               <div className="flex flex-col items-center gap-4">
                 <button
                   onClick={isRecording ? stopRecording : startRecording}
                   className={`w-20 h-20 rounded-full flex items-center justify-center transition-all shadow-3d ${
                     isRecording ? 'bg-red-500 animate-pulse' : 'bg-surgical-500 hover:bg-surgical-600'
                   }`}
                 >
                   <Mic className="w-8 h-8 text-white" />
                 </button>
                 <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                   {isRecording ? 'Recording...' : 'Tap to Record'}
                 </span>

                 {audioBlob && (
                   <div className="w-full animate-fade-in mt-4">
                     <div className="flex justify-center mb-4">
                       <audio controls src={URL.createObjectURL(audioBlob)} className="w-full max-w-md" />
                     </div>
                     <Button onClick={analyzeAudio} disabled={analyzing} className="w-full">
                        {analyzing ? 'Analyzing with Gemini...' : 'Analyze with AI Tutor'}
                     </Button>
                   </div>
                 )}

                 {aiAnalysis && (
                   <div className="mt-4 p-6 bg-white rounded-xl shadow-surgical-panel border-l-4 border-surgical-500 w-full text-left">
                     <h4 className="font-bold text-surgical-700 mb-2 flex items-center gap-2">
                       <CheckCircle className="w-4 h-4" /> Tutor Feedback
                     </h4>
                     <p className="whitespace-pre-wrap text-slate-700">{aiAnalysis}</p>
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
    <div className="max-w-3xl mx-auto w-full relative">
       {/* AI Tutor Toggle */}
      <button 
        onClick={() => setShowTutor(!showTutor)}
        className="absolute -top-12 right-0 flex items-center gap-2 text-surgical-600 hover:text-surgical-800 font-semibold bg-white/80 px-4 py-2 rounded-full shadow-sm backdrop-blur-sm transition-all"
      >
        <HelpCircle className="w-5 h-5" />
        {showTutor ? 'Close Tutor' : 'Ask AI Tutor'}
      </button>

      {/* Main Slide Card */}
      <Card className="min-h-[600px] flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-6 border-b border-slate-100 pb-4">
            <div>
              <Badge color="bg-slate-100 text-slate-500 mb-2">{slide.type.toUpperCase()}</Badge>
              <h2 className="text-3xl font-bold text-slate-800 tracking-tight">{slide.title}</h2>
            </div>
          </div>
          
          <div className="py-2">
            {renderContent()}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
          <Button onClick={onNext} className="group">
            {isLast ? 'Finish Topic' : 'Next Slide'}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>

      {/* AI Tutor Panel Overlay */}
      {showTutor && (
        <div className="absolute top-0 right-0 w-full h-full bg-white/95 backdrop-blur-xl rounded-2xl p-6 z-20 shadow-2xl flex flex-col animate-fade-in">
           <div className="flex justify-between items-center mb-4">
             <h3 className="text-xl font-bold text-surgical-700">AI Surgical Tutor</h3>
             <button onClick={() => setShowTutor(false)}><XCircle className="w-6 h-6 text-slate-400 hover:text-red-500" /></button>
           </div>
           
           <div className="flex-1 overflow-y-auto bg-slate-50 rounded-xl p-4 mb-4 border border-slate-200">
             {tutorResponse ? (
               <div className="prose prose-sm prose-slate">
                 <p>{tutorResponse}</p>
               </div>
             ) : (
               <p className="text-slate-400 text-center mt-10">Ask me anything about this slide...</p>
             )}
           </div>

           <div className="flex gap-2">
             <input 
               type="text" 
               className="flex-1 border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-surgical-300 outline-none"
               placeholder="Why is answer B correct?"
               value={tutorQuery}
               onChange={(e) => setTutorQuery(e.target.value)}
               onKeyDown={(e) => e.key === 'Enter' && handleTutorAsk()}
             />
             <Button onClick={handleTutorAsk} disabled={tutorLoading} className="!px-4 !py-2">
               <Send className="w-5 h-5" />
             </Button>
           </div>
        </div>
      )}
    </div>
  );
};