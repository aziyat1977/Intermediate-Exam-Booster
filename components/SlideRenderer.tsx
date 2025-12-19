import React, { useState, useRef, useEffect } from 'react';
import { SlideContent } from '../types';
import { Card, Button, Badge } from './UI';
import { Timeline3D } from './Timeline3D';
import { Mic, CheckCircle, XCircle, Volume2, Globe, AlertCircle, Eye, EyeOff, Brain, Target, MessageSquare, Zap, Layers, Sparkles } from 'lucide-react';
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

  useEffect(() => {
    if (!stream || !recording || !canvasRef.current) return;

    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const analyser = audioCtx.createAnalyser();
    const source = audioCtx.createMediaStreamSource(stream);
    
    source.connect(analyser);
    analyser.fftSize = 64; // Low res for chunky retro look
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext('2d');
    if (!canvasCtx) return;

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = (canvas.width / bufferLength) * 1.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = (dataArray[i] / 255) * canvas.height;
        
        let color = `rgba(14, 165, 233, ${dataArray[i]/255})`; // Blue
        if (theme === 'gta') color = `rgba(34, 197, 94, ${dataArray[i]/255})`; // Green
        if (theme === 'wukong') color = `rgba(245, 158, 11, ${dataArray[i]/255})`; // Gold

        canvasCtx.fillStyle = color;
        canvasCtx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);
        x += barWidth;
      }
    };

    draw();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      audioCtx.close();
    };
  }, [stream, recording, theme]);

  return <canvas ref={canvasRef} width={300} height={100} className="w-full h-32 rounded-xl mix-blend-screen" />;
};

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, theme, onScore }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [gapText, setGapText] = useState('');
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

  // Theme Helpers
  const isGTA = theme === 'gta';
  const isWukong = theme === 'wukong';

  // Styles based on theme
  const getThemeColors = () => {
    if (isGTA) return { 
        text: 'text-green-50', subtext: 'text-green-300', bg: 'bg-slate-900', border: 'border-green-500/30', 
        highlight: 'text-green-400', accent: 'bg-green-600', cardBg: 'bg-slate-800/80' 
    };
    if (isWukong) return { 
        text: 'text-amber-50', subtext: 'text-amber-200', bg: 'bg-[#450a0a]', border: 'border-amber-500/30', 
        highlight: 'text-amber-400', accent: 'bg-amber-600', cardBg: 'bg-[#2a0a0a]/80' 
    };
    return { 
        text: 'text-slate-900 dark:text-white', subtext: 'text-slate-600 dark:text-slate-300', 
        bg: 'bg-[#e0e5ec] dark:bg-slate-900', border: 'border-white/50 dark:border-slate-700', 
        highlight: 'text-surgical-600 dark:text-surgical-400', accent: 'bg-surgical-500', 
        cardBg: 'bg-white/50 dark:bg-slate-800/50' 
    };
  };

  const tc = getThemeColors();

  useEffect(() => { isMounted.current = true; return () => { isMounted.current = false; }; }, []);

  useEffect(() => {
    setSelectedOption(null);
    setFeedback(null);
    setGapText('');
    setAiAnalysis('');
    setAudioBlob(null);
    setShowRu(false);
    setShowUz(false);
    setMicError(null);
    setRevealedItems([0]);
  }, [slide.id]);

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
    if (!revealedItems.includes(idx)) setRevealedItems([...revealedItems, idx]);
  };

  const handleQuizSubmit = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    const isCorrect = index === slide.correctAnswer;
    onScore(isCorrect);
    setFeedback(isCorrect ? (slide.explanation || 'Correct!') : 'Incorrect. Try again.');
  };

  const handleGapSubmit = () => {
    if (feedback === 'Correct!') return;
    const isCorrect = gapText.toLowerCase().trim() === String(slide.correctAnswer).toLowerCase();
    onScore(isCorrect);
    setFeedback(isCorrect ? 'Correct!' : `Answer: ${slide.correctAnswer}`);
  };

  const startRecording = async () => {
    setMicError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (!isMounted.current) { stream.getTracks().forEach(track => track.stop()); return; }
      streamRef.current = stream;
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' });
        if (isMounted.current) setAudioBlob(blob);
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
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') mediaRecorderRef.current.stop();
    if (isMounted.current) setIsRecording(false);
  };

  const analyzeAudio = async () => {
    if (!audioBlob) return;
    setAnalyzing(true);
    const prompt = slide.speakingPrompts?.[0] || slide.title;
    const response = await checkAudio(audioBlob, prompt);
    if (isMounted.current) {
      setAiAnalysis(response);
      setAnalyzing(false);
      onScore(true);
    }
  };

  const renderMarkdown = (text?: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className={`font-extrabold ${tc.highlight}`}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // Decoration Logic
  const renderBackgroundIcon = () => {
    const commonClasses = "absolute -right-10 -bottom-10 w-96 h-96 opacity-5 pointer-events-none transform rotate-12 transition-all duration-1000";
    switch (slide.type) {
        case 'speaking': return <Mic className={commonClasses} />;
        case 'quiz': 
        case 'test': return <Brain className={commonClasses} />;
        case 'gap-fill': return <Target className={commonClasses} />;
        case 'timeline': return <Layers className={commonClasses} />;
        default: return <Sparkles className={commonClasses} />;
    }
  };

  const renderContent = () => {
    const enPoints = slide.bulletPoints?.filter(bp => bp.lang === 'en') || [];
    const uzPoints = slide.bulletPoints?.filter(bp => bp.lang === 'uz') || [];
    const ruPoints = slide.bulletPoints?.filter(bp => bp.lang === 'ru') || [];

    switch (slide.type) {
      case 'intro':
      case 'concept':
        return (
          <div className="flex flex-col h-full gap-4 relative z-10">
             <div className={`flex gap-6 items-start ${isGTA || isWukong ? 'flex-col md:flex-row' : ''}`}>
                {slide.imageUrl && (
                  <div className={`rounded-2xl overflow-hidden shadow-2xl border-4 ${tc.border} transition-all duration-500 hover:scale-[1.02] ${isGTA || isWukong ? 'w-full md:w-1/2 max-h-[250px]' : 'w-1/3 max-w-[200px] hidden md:block'}`}>
                    <img src={slide.imageUrl} alt="Visual" className="w-full h-full object-cover" />
                    {/* Image Overlay Glitch for GTA */}
                    {isGTA && <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay animate-pulse"></div>}
                  </div>
                )}
                <div className="flex-1 w-full space-y-4">
                   {slide.leadText && <p className={`text-2xl font-bold leading-relaxed ${tc.text} animate-fade-in`}>{renderMarkdown(slide.leadText)}</p>}
                   
                   {/* Language Toggles */}
                   {(uzPoints.length > 0 || ruPoints.length > 0) && (
                     <div className="flex gap-2">
                       {uzPoints.length > 0 && <button onClick={() => setShowUz(!showUz)} className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 border transition-all ${showUz ? `${tc.accent} text-white` : `${tc.cardBg} ${tc.subtext} ${tc.border}`}`}><Globe className="w-4 h-4"/> UZ</button>}
                       {ruPoints.length > 0 && <button onClick={() => setShowRu(!showRu)} className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 border transition-all ${showRu ? `${tc.accent} text-white` : `${tc.cardBg} ${tc.subtext} ${tc.border}`}`}><Globe className="w-4 h-4"/> RU</button>}
                     </div>
                   )}
                </div>
             </div>

             <div className="flex-1 overflow-y-auto min-h-0 pr-2 space-y-3 mt-4">
                {enPoints.map((bp, idx) => {
                  const isRevealed = revealedItems.includes(idx);
                  return (
                    <div key={idx} onClick={() => !isRevealed && handleReveal(idx)} 
                         className={`relative p-5 rounded-2xl border transition-all duration-500 ${isRevealed ? `${tc.cardBg} ${tc.border} translate-x-0 opacity-100` : `cursor-pointer hover:bg-white/10 translate-x-4 opacity-50 border-transparent bg-black/5`}`}>
                      {!isRevealed && <div className="absolute inset-0 flex items-center justify-center font-black uppercase tracking-widest text-xs opacity-50 animate-pulse">Click to Reveal</div>}
                      <div className={isRevealed ? '' : 'blur-sm grayscale'}>
                         <div className="flex items-center gap-2 mb-1">
                            <Badge color={tc.accent + ' text-white'}>EN</Badge>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${tc.subtext}`}>{bp.label}</span>
                         </div>
                         <p className={`text-lg font-medium ${tc.text}`}>{renderMarkdown(bp.text)}</p>
                      </div>
                    </div>
                  );
                })}
                {showUz && uzPoints.map((bp, idx) => (
                  <div key={idx} className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/30 animate-fade-in-up">
                    <p className={`text-base font-medium ${isGTA ? 'text-green-300' : 'text-emerald-700 dark:text-emerald-300'}`}>{renderMarkdown(bp.text)}</p>
                  </div>
                ))}
                {showRu && ruPoints.map((bp, idx) => (
                   <div key={idx} className="bg-indigo-500/10 p-4 rounded-xl border border-indigo-500/30 animate-fade-in-up">
                    <p className={`text-base font-medium ${isGTA ? 'text-indigo-300' : 'text-indigo-700 dark:text-indigo-300'}`}>{renderMarkdown(bp.text)}</p>
                  </div>
                ))}
             </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="flex flex-col h-full relative z-10">
            <div className="text-center mb-4">
               <p className={`text-2xl font-bold ${tc.text}`}>{renderMarkdown(slide.leadText)}</p>
            </div>
            <div className="h-64 md:h-80 w-full shrink-0 relative">
               {/* 3D Timeline Visual */}
               {slide.visualData && <Timeline3D points={slide.visualData} context={slide.visualContext} />}
            </div>
            
            <div className="flex-1 overflow-y-auto mt-4 space-y-3 px-2">
               {enPoints.map((bp, idx) => (
                 <div key={idx} className={`flex items-start gap-4 p-4 rounded-2xl border transition-transform hover:scale-[1.01] ${tc.cardBg} ${tc.border}`}>
                    <div className={`w-2 h-2 rounded-full mt-2.5 shrink-0 ${tc.accent} shadow-neon-blue`} />
                    <p className={`text-lg font-medium ${tc.text}`}>{renderMarkdown(bp.text)}</p>
                 </div>
               ))}
            </div>
          </div>
        );

      case 'quiz':
      case 'test':
      case 'reading':
        return (
          <div className="flex flex-col h-full gap-6 relative z-10 justify-center">
            {slide.passage && (
              <div className={`${tc.cardBg} ${tc.border} p-6 rounded-2xl border shadow-inner max-h-[30vh] overflow-y-auto`}>
                 <p className={`text-lg italic leading-relaxed font-serif ${tc.text}`}>{renderMarkdown(slide.passage)}</p>
              </div>
            )}
            
            <h3 className={`text-3xl font-black leading-tight ${tc.text} drop-shadow-sm`}>{renderMarkdown(slide.question)}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {slide.options?.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === slide.correctAnswer;
                
                let btnStyle = `${tc.cardBg} ${tc.border} ${tc.text} hover:bg-opacity-80`;
                if (isSelected) {
                   btnStyle = isCorrect 
                     ? 'bg-green-500/20 border-green-500 text-green-600 dark:text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]' 
                     : 'bg-red-500/20 border-red-500 text-red-600 dark:text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]';
                }

                return (
                  <button key={idx} onClick={() => handleQuizSubmit(idx)} disabled={selectedOption !== null}
                    className={`p-6 text-left font-bold text-xl rounded-2xl border-2 transition-all duration-300 transform active:scale-95 flex justify-between items-center ${btnStyle}`}>
                    <span>{opt}</span>
                    {isSelected && (isCorrect ? <CheckCircle className="w-6 h-6" /> : <XCircle className="w-6 h-6" />)}
                  </button>
                );
              })}
            </div>
            
            {feedback && (
              <div className={`mt-auto p-4 rounded-xl text-center font-bold text-xl animate-pop ${
                selectedOption === slide.correctAnswer ? 'bg-green-500 text-white shadow-neon-green' : 'bg-red-500 text-white shadow-neon-red'
              }`}>
                {feedback}
              </div>
            )}
          </div>
        );

      case 'gap-fill':
        return (
          <div className="flex flex-col h-full justify-center gap-10 relative z-10">
            <div className={`${tc.cardBg} ${tc.border} p-10 rounded-[2rem] border-2 shadow-2xl relative overflow-hidden group`}>
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer`}></div>
              
              <p className={`text-3xl leading-loose font-medium text-center ${tc.text}`}>
                {slide.leadText?.split('__________').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <input type="text" value={gapText} onChange={(e) => setGapText(e.target.value)}
                        className={`mx-3 w-56 art-3d-input text-center font-bold text-2xl focus:scale-110 transition-transform ${isGTA ? 'text-green-400' : 'text-surgical-600 dark:text-surgical-400'}`}
                        placeholder="?" autoComplete="off" autoFocus />
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <Button onClick={handleGapSubmit} disabled={!gapText} className="min-w-[200px] !text-xl !py-4 shadow-3d-light dark:shadow-3d-dark">Check Answer</Button>
              {feedback && <div className={`px-8 py-4 rounded-2xl font-black text-xl animate-pop bg-white text-slate-900 shadow-xl`}>{feedback}</div>}
            </div>
          </div>
        );

      case 'speaking':
        return (
          <div className="flex flex-col h-full justify-between relative z-10">
            <div className={`${tc.cardBg} ${tc.border} p-6 rounded-3xl border flex-1 flex flex-col shadow-inner relative overflow-hidden`}>
               {/* Visualizer BG */}
               {isRecording && streamRef.current && (
                 <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <AudioVisualizer stream={streamRef.current} recording={isRecording} theme={theme} />
                 </div>
               )}
               
               <div className="relative z-10 shrink-0 mb-6">
                 <p className={`text-2xl font-bold mb-4 ${tc.text}`}>{slide.leadText}</p>
                 <div className={`p-5 rounded-2xl border bg-black/5 ${tc.border}`}>
                    <ul className="space-y-4">
                      {slide.speakingPrompts?.map((prompt, i) => (
                        <li key={i} className={`flex items-start gap-4 font-medium text-xl ${tc.text}`}>
                          <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white ${tc.accent}`}>{i + 1}</span>
                          {renderMarkdown(prompt)}
                        </li>
                      ))}
                    </ul>
                 </div>
               </div>
               
               <div className="flex-1 flex flex-col items-center justify-center gap-8 min-h-0 relative z-10">
                 <button onClick={isRecording ? stopRecording : startRecording}
                   className={`w-40 h-40 art-3d-sphere shrink-0 ${isRecording ? 'recording scale-110 shadow-neon-red' : 'hover:scale-105'} transition-all duration-300`}>
                   <Mic className={`w-20 h-20 text-white drop-shadow-md ${isRecording ? 'animate-pulse' : ''}`} />
                 </button>
                 
                 {micError && <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold animate-shake">{micError}</div>}
                 
                 <div className="w-full max-w-lg space-y-4">
                   {audioUrl && (
                     <div className={`p-4 rounded-xl border flex items-center gap-4 shadow-lg ${tc.cardBg} ${tc.border}`}>
                       <audio controls src={audioUrl} className="flex-1 h-10 accent-surgical-500" />
                       <Button onClick={analyzeAudio} disabled={analyzing} className="!py-2 !px-4 !text-sm whitespace-nowrap" variant="secondary">
                          {analyzing ? 'Thinking...' : 'Analyze'}
                       </Button>
                     </div>
                   )}
                   {aiAnalysis && (
                     <div className={`p-6 rounded-2xl shadow-inner max-h-[200px] overflow-y-auto border bg-black/5 ${tc.border} ${tc.text}`}>
                       <p className="text-base font-medium whitespace-pre-wrap">{renderMarkdown(aiAnalysis)}</p>
                     </div>
                   )}
                 </div>
               </div>
            </div>
          </div>
        );
        
      default: return <div>Unknown Slide Type</div>;
    }
  };

  return (
    <Card className="h-full flex flex-col p-0 overflow-hidden !bg-transparent !shadow-none !border-none perspective-1000">
      <div className="flex items-center gap-4 mb-4 shrink-0 px-2 relative z-20">
        <Badge color={isGTA ? "bg-green-900 text-green-400 border border-green-500" : isWukong ? "bg-amber-900 text-amber-400 border border-amber-500" : "bg-white text-slate-800 border border-slate-200 shadow-sm dark:bg-slate-700 dark:text-white dark:border-slate-600"}>{slide.type.toUpperCase()}</Badge>
        <h2 className={`text-4xl font-black tracking-tight leading-none drop-shadow-md ${tc.text}`}>{renderMarkdown(slide.title)}</h2>
      </div>
      
      <div className={`flex-1 rounded-[2.5rem] p-6 md:p-10 overflow-hidden relative border transition-all duration-500 flex flex-col
        ${isGTA ? 'bg-slate-950 border-green-500/50 shadow-[0_0_50px_rgba(34,197,94,0.2)]' : 
          isWukong ? 'bg-[#2a0a0a] border-amber-500/50 shadow-[0_0_50px_rgba(217,119,6,0.2)]' : 
          'bg-white/60 dark:bg-slate-900/80 backdrop-blur-xl border-white/60 dark:border-slate-700 shadow-2xl dark:shadow-3d-dark'}`}>
         
         {/* Decorative Background Elements (200% visuals) */}
         {renderBackgroundIcon()}
         {isGTA && <div className="absolute inset-0 scanline-overlay opacity-30 pointer-events-none"></div>}
         
         {/* Corner Accents */}
         <div className={`absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 ${isGTA ? 'border-green-500' : isWukong ? 'border-amber-500' : 'border-slate-400 opacity-50'}`}></div>
         <div className={`absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 ${isGTA ? 'border-green-500' : isWukong ? 'border-amber-500' : 'border-slate-400 opacity-50'}`}></div>

         {renderContent()}
      </div>
    </Card>
  );
};