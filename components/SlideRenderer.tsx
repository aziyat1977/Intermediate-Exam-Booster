import React, { useState, useRef, useEffect } from 'react';
import { SlideContent } from '../types';
import { Card, Button, Badge } from './UI';
import { Timeline3D } from './Timeline3D';
import { Mic, CheckCircle, XCircle, Volume2, Globe, Sparkles, Feather, Scroll, Wand2, BookOpen } from 'lucide-react';
import { checkAudio } from '../services/geminiService';

interface SlideRendererProps {
  slide: SlideContent;
  theme?: string;
  darkMode: boolean;
  onScore: (correct: boolean) => void;
}

// Winter Snow Effect
const SnowEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="snow-particle opacity-60" style={{
          left: `${Math.random() * 100}%`,
          top: `-${Math.random() * 20}%`,
          animation: `snow ${5 + Math.random() * 10}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`
        }} />
      ))}
    </div>
  );
};

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, theme, darkMode, onScore }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [gapText, setGapText] = useState('');
  const [revealedItems, setRevealedItems] = useState<number[]>([]);
  
  const [showRu, setShowRu] = useState(false);
  const [showUz, setShowUz] = useState(false);

  const isMounted = useRef(true);

  // Theme Logic
  const getThemeColors = () => {
    if (!darkMode) {
      // Light Mode (Parchment Style)
      return {
        text: 'text-[#2c1810]', 
        subtext: 'text-[#5d4037]', 
        cardBg: 'bg-[#f5f5dc]', // Beige Parchment
        border: 'border-[#8d6e63]', 
        accent: 'bg-[#8d6e63]', 
        highlight: 'text-[#d84315]', // Burnt Orange
        buttonBg: 'bg-[#efebe9]',
        buttonBorder: 'border-[#d7ccc8]'
      };
    }

    // Dark Mode (Magical House Styles)
    switch (theme) {
      case 'hp-gryffindor': return { text: 'text-amber-100', subtext: 'text-amber-400', cardBg: 'bg-[#740001]/95', border: 'border-[#d4af37]', accent: 'bg-[#ae0001]', highlight: 'text-[#d4af37]', buttonBg: 'bg-black/40', buttonBorder: 'border-[#d4af37]' };
      case 'hp-slytherin': return { text: 'text-emerald-100', subtext: 'text-emerald-400', cardBg: 'bg-[#1a472a]/95', border: 'border-[#aaaaaa]', accent: 'bg-[#2a623d]', highlight: 'text-[#aaaaaa]', buttonBg: 'bg-black/40', buttonBorder: 'border-[#aaaaaa]' };
      case 'hp-ravenclaw': return { text: 'text-sky-100', subtext: 'text-sky-400', cardBg: 'bg-[#0e1a40]/95', border: 'border-[#946b2d]', accent: 'bg-[#222f5b]', highlight: 'text-[#946b2d]', buttonBg: 'bg-black/40', buttonBorder: 'border-[#946b2d]' };
      case 'hp-hufflepuff': return { text: 'text-yellow-50', subtext: 'text-yellow-300', cardBg: 'bg-[#ecb939]/95', border: 'border-[#111111]', accent: 'bg-[#f0c75e]', highlight: 'text-[#111111]', buttonBg: 'bg-black/40', buttonBorder: 'border-[#111111]' };
      case 'hp-winter': return { text: 'text-slate-100', subtext: 'text-cyan-300', cardBg: 'bg-slate-900/90', border: 'border-cyan-400', accent: 'bg-cyan-600', highlight: 'text-cyan-200', buttonBg: 'bg-black/40', buttonBorder: 'border-cyan-400' };
      case 'hp-dark': return { text: 'text-gray-300', subtext: 'text-gray-500', cardBg: 'bg-black/95', border: 'border-gray-700', accent: 'bg-gray-800', highlight: 'text-green-500', buttonBg: 'bg-gray-900', buttonBorder: 'border-gray-600' };
      default: return { text: 'text-amber-50', subtext: 'text-amber-200', cardBg: 'bg-[#0f172a]/95', border: 'border-[#d4af37]', accent: 'bg-[#d4af37]', highlight: 'text-[#fcd34d]', buttonBg: 'bg-black/40', buttonBorder: 'border-[#d4af37]' };
    }
  };

  const tc = getThemeColors();

  useEffect(() => { isMounted.current = true; return () => { isMounted.current = false; }; }, []);

  useEffect(() => {
    setSelectedOption(null);
    setFeedback(null);
    setGapText('');
    setShowRu(false);
    setShowUz(false);
    setRevealedItems([0, 1, 2, 3]); // Reveal all by default for visibility
  }, [slide.id]);

  const handleReveal = (idx: number) => {
    if (!revealedItems.includes(idx)) setRevealedItems([...revealedItems, idx]);
  };

  const handleQuizSubmit = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    const isCorrect = index === slide.correctAnswer;
    onScore(isCorrect);
    setFeedback(isCorrect ? (slide.explanation || 'Excellent!') : 'Try again, wizard.');
  };

  const renderMarkdown = (text?: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className={`font-black ${tc.highlight} drop-shadow-sm`}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={index} className={`font-mono font-bold mx-1 px-2 py-1 rounded-md bg-black/20 border border-white/10 ${tc.subtext} shadow-inner`}>{part.slice(1, -1)}</code>;
      }
      return part;
    });
  };

  const renderBackgroundIcon = () => {
    const iconProps = { className: `absolute -right-20 -bottom-20 w-[400px] h-[400px] opacity-[0.03] rotate-12 pointer-events-none ${tc.text}` };
    switch (theme) {
      case 'hp-gryffindor': return <Wand2 {...iconProps} />;
      case 'hp-slytherin': return <Feather {...iconProps} />;
      case 'hp-ravenclaw': return <BookOpen {...iconProps} />;
      case 'hp-hufflepuff': return <Scroll {...iconProps} />;
      case 'hp-winter': return <Sparkles {...iconProps} />;
      case 'hp-dark': return <Wand2 {...iconProps} />;
      default: return <Sparkles {...iconProps} />;
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
          <div className="flex flex-col h-full gap-6 relative z-10 p-2">
             <div className={`flex gap-8 items-start flex-col md:flex-row shrink-0`}>
                {slide.imageUrl && (
                  <div className={`rounded-xl overflow-hidden shadow-magical border-4 ${tc.border} w-full md:w-1/2 max-h-[300px] relative shrink-0 transition-transform hover:scale-[1.01]`}>
                    <img src={slide.imageUrl} alt="Visual" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                )}
                <div className="flex-1 w-full space-y-6">
                   {slide.leadText && <p className={`text-2xl md:text-4xl font-magic font-bold leading-tight ${tc.text} animate-fade-in`}>{renderMarkdown(slide.leadText)}</p>}
                   
                   {(uzPoints.length > 0 || ruPoints.length > 0) && (
                     <div className="flex gap-3">
                       {uzPoints.length > 0 && <button onClick={() => setShowUz(!showUz)} className={`px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 border transition-all ${showUz ? `${tc.accent} text-white` : `${tc.buttonBg} ${tc.subtext} ${tc.buttonBorder}`}`}><Globe className="w-4 h-4"/> UZ</button>}
                       {ruPoints.length > 0 && <button onClick={() => setShowRu(!showRu)} className={`px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 border transition-all ${showRu ? `${tc.accent} text-white` : `${tc.buttonBg} ${tc.subtext} ${tc.buttonBorder}`}`}><Globe className="w-4 h-4"/> RU</button>}
                     </div>
                   )}
                </div>
             </div>

             <div className="flex-1 overflow-y-auto min-h-0 pr-4 space-y-4 mt-2 pb-10">
                {enPoints.map((bp, idx) => {
                  return (
                    <div key={idx} className={`relative p-6 rounded-xl border-2 transition-all duration-500 bg-white/5 backdrop-blur-sm ${tc.border} shadow-lg`}>
                         <div className="flex items-center gap-3 mb-2">
                            <Wand2 className={`w-5 h-5 ${tc.highlight}`} />
                            <span className={`text-sm font-black uppercase tracking-widest ${tc.subtext}`}>{bp.label}</span>
                         </div>
                         <p className={`text-2xl md:text-3xl font-serif leading-relaxed ${tc.text}`}>{renderMarkdown(bp.text)}</p>
                    </div>
                  );
                })}
             </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="flex flex-col h-full relative z-10 justify-center">
            <div className="text-center mb-10">
               <p className={`text-4xl md:text-5xl font-magic font-bold ${tc.text} drop-shadow-md`}>{renderMarkdown(slide.leadText)}</p>
            </div>
            <div className="flex-1 w-full min-h-[400px] relative">
               <Timeline3D points={slide.visualData || []} context={slide.visualContext} />
            </div>
          </div>
        );

      case 'reading':
        return (
           <div className="flex flex-col h-full gap-6 relative z-10">
              <div className="flex items-center gap-3 justify-center mb-2">
                 <BookOpen className={`w-8 h-8 ${tc.highlight}`} />
                 <h3 className={`text-3xl font-magic font-bold ${tc.text}`}>Reading Practice</h3>
              </div>
              <div className={`flex-1 p-8 rounded-xl border-2 shadow-inner overflow-y-auto ${darkMode ? 'bg-parchment-texture text-slate-900 border-[#946b2d]' : 'bg-white text-slate-900 border-slate-300'}`}>
                 <p className="text-2xl md:text-3xl leading-loose font-serif font-medium">{renderMarkdown(slide.passage)}</p>
              </div>
              {slide.question && (
                <div className={`p-4 rounded-lg border ${tc.border} ${tc.buttonBg}`}>
                   <p className={`text-xl font-bold ${tc.text} text-center`}>{slide.question}</p>
                </div>
              )}
           </div>
        );

      case 'quiz': // Kahoot Style
      case 'test':
        return (
          <div className="flex flex-col h-full gap-4 md:gap-8 relative z-10 justify-center max-w-5xl mx-auto w-full">
            {slide.passage && (
              <div className={`${tc.cardBg} ${tc.border} p-6 rounded-xl border shadow-inner max-h-[20vh] overflow-y-auto`}>
                 <p className={`text-lg italic leading-relaxed font-serif ${tc.text}`}>{renderMarkdown(slide.passage)}</p>
              </div>
            )}
            
            <h3 className={`text-3xl md:text-5xl font-magic font-bold leading-tight ${tc.text} drop-shadow-lg text-center`}>{renderMarkdown(slide.question)}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {slide.options?.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === slide.correctAnswer;
                
                // Kahoot Colors
                const kColors = [
                  'bg-red-600 border-red-800 text-white',
                  'bg-blue-600 border-blue-800 text-white',
                  'bg-yellow-500 border-yellow-700 text-black',
                  'bg-green-600 border-green-800 text-white'
                ];
                
                let btnStyle = `shadow-xl border-b-8 active:border-b-0 active:translate-y-2 transition-all ${kColors[idx % 4]}`;
                
                if (isSelected) {
                   btnStyle = isCorrect 
                     ? 'bg-green-500 border-green-700 ring-4 ring-white scale-105' 
                     : 'bg-gray-500 border-gray-700 opacity-50';
                } else if (selectedOption !== null) {
                   btnStyle += ' opacity-50 grayscale';
                }

                return (
                  <button key={idx} onClick={() => handleQuizSubmit(idx)} disabled={selectedOption !== null}
                    className={`p-8 text-center font-black text-2xl md:text-3xl rounded-xl flex justify-center items-center gap-4 ${btnStyle}`}>
                    {/* Shape Icons */}
                    {idx === 0 && <div className="w-6 h-6 bg-white transform rotate-45" />} 
                    {idx === 1 && <div className="w-6 h-6 bg-white rounded-full" />}
                    {idx === 2 && <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-white" />}
                    {idx === 3 && <div className="w-6 h-6 bg-white" />}
                    
                    <span>{opt}</span>
                    {isSelected && (isCorrect ? <CheckCircle className="w-8 h-8" /> : <XCircle className="w-8 h-8" />)}
                  </button>
                );
              })}
            </div>
            
            {feedback && (
              <div className={`mt-4 p-6 rounded-xl text-center font-black text-2xl animate-pop border-4 ${
                selectedOption === slide.correctAnswer ? 'bg-green-100 border-green-500 text-green-800' : 'bg-red-100 border-red-500 text-red-800'
              }`}>
                {feedback}
              </div>
            )}
          </div>
        );

      default: return <div>Unknown Slide Type</div>;
    }
  };

  return (
    <Card className={`h-full flex flex-col p-0 overflow-hidden !bg-transparent !shadow-none !border-none perspective-1000`}>
      <div className="flex items-center gap-4 mb-4 shrink-0 px-2 relative z-20">
        <Badge color={`${tc.accent} text-white border ${tc.border} font-magic text-lg px-4 py-1`}>{slide.type.toUpperCase()}</Badge>
        <h2 className={`text-4xl md:text-6xl font-magic font-bold tracking-tight leading-none drop-shadow-md ${tc.text}`}>{renderMarkdown(slide.title)}</h2>
      </div>
      
      <div className={`flex-1 rounded-[2rem] p-6 md:p-10 overflow-hidden relative border-4 transition-all duration-500 flex flex-col ${tc.cardBg} ${tc.border} shadow-3d-floating`}>
         
         {/* Background Effects */}
         {darkMode && <SnowEffect />}
         {darkMode && renderBackgroundIcon()}
         {!darkMode && <div className="absolute inset-0 bg-parchment-texture opacity-20 pointer-events-none"></div>}

         {renderContent()}
      </div>
    </Card>
  );
};