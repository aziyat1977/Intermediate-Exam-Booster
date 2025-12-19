import React, { useState, useEffect, useRef } from 'react';
import { TOPICS } from './data/courseContent';
import { SlideRenderer } from './components/SlideRenderer';
import { Button, Badge } from './components/UI';
import { Play, BookOpen, ChevronRight, ChevronLeft, Check, Trophy, Zap } from 'lucide-react';

// Pure JS Sound Manager using Web Audio API
class SoundManager {
  ctx: AudioContext | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  playTone(freq: number, type: OscillatorType, duration: number, gainVal: number = 0.1) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  playClick() { this.playTone(800, 'sine', 0.05, 0.05); }
  playSuccess() { 
    this.playTone(600, 'sine', 0.1, 0.1); 
    setTimeout(() => this.playTone(900, 'sine', 0.2, 0.1), 100); 
  }
  playError() { this.playTone(150, 'sawtooth', 0.3, 0.1); }
  playHover() { this.playTone(300, 'triangle', 0.02, 0.02); }
}

const soundManager = new SoundManager();

const App: React.FC = () => {
  const [currentTopicIndex, setCurrentTopicIndex] = useState<number | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  // Game State
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [pointsDelta, setPointsDelta] = useState<number | null>(null);

  const currentTopic = currentTopicIndex !== null ? TOPICS[currentTopicIndex] : null;
  const currentSlide = currentTopic ? currentTopic.slides[currentSlideIndex] : null;

  // Preload Images
  useEffect(() => {
    if (currentTopic) {
      currentTopic.slides.forEach((slide) => {
        if (slide.imageUrl) {
          const img = new Image();
          img.src = slide.imageUrl;
        }
      });
    }
  }, [currentTopic]);

  const handleNext = () => {
    soundManager.playClick();
    if (currentTopic && currentSlideIndex < currentTopic.slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    } else {
      setCurrentTopicIndex(null);
      setCurrentSlideIndex(0);
    }
  };

  const handlePrev = () => {
    soundManager.playClick();
    if (currentTopic && currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const startTopic = (index: number) => {
    soundManager.playSuccess();
    setCurrentTopicIndex(index);
    setCurrentSlideIndex(0);
  };

  // Score Callback
  const handleScoreUpdate = (correct: boolean) => {
    if (correct) {
      soundManager.playSuccess();
      const newPoints = 100 + (streak * 10);
      setScore(s => s + newPoints);
      setStreak(s => s + 1);
      setPointsDelta(newPoints);
      setTimeout(() => setPointsDelta(null), 1000);
    } else {
      soundManager.playError();
      setStreak(0);
    }
  };

  // Sound triggers for interactions
  const handleInteraction = () => soundManager.playHover();

  const isLastSlide = currentTopic ? currentSlideIndex === currentTopic.slides.length - 1 : false;
  const isFirstSlide = currentSlideIndex === 0;

  // Theme Logic
  let themeClass = '';
  if (currentTopic?.theme === 'gta') themeClass = 'gta-mode';
  if (currentTopic?.theme === 'wukong') themeClass = 'wukong-mode';

  return (
    <div className={`h-screen w-screen font-sans text-slate-900 selection:bg-surgical-200 overflow-hidden relative bg-[#e0e5ec] flex flex-col ${themeClass}`}>
      
      {/* 3D Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] rounded-full bg-gradient-to-br from-purple-200 to-blue-200 blur-3xl opacity-40 animate-cloud-move"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] rounded-full bg-gradient-to-t from-surgical-200 to-white blur-3xl opacity-50"></div>
      </div>

      {/* Header */}
      <header className="h-20 bg-[#e0e5ec]/90 backdrop-blur-md border-b border-white/50 z-50 flex items-center justify-between px-6 shadow-sm shrink-0 transition-colors duration-500">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 art-3d-btn-primary flex items-center justify-center shadow-lg rounded-xl transition-all duration-500 cursor-pointer hover:scale-110 active:scale-90" onClick={() => setCurrentTopicIndex(null)} onMouseEnter={handleInteraction}>
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-black text-2xl tracking-tight text-slate-800 leading-none cursor-pointer" onClick={() => setCurrentTopicIndex(null)}>
              Lingu<span className="text-surgical-600">Verse</span>
            </h1>
            {currentTopic && (
               <p className="text-xs font-bold text-slate-500 mt-1 truncate max-w-[200px] md:max-w-md">
                 {currentTopic.title}
               </p>
            )}
          </div>
        </div>

        {/* GAMIFICATION HUD */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-6">
           <div className={`flex items-center gap-2 font-black text-xl transition-transform ${pointsDelta ? 'scale-110 text-green-500' : 'text-slate-700'}`}>
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span>{score}</span>
              {pointsDelta && <span className="absolute -top-6 left-full text-sm text-green-500 animate-fade-in-up">+{pointsDelta}</span>}
           </div>
           {streak > 1 && (
             <div className="flex items-center gap-1 font-black text-orange-500 animate-pulse">
                <Zap className="w-5 h-5 fill-current" />
                <span>x{streak}</span>
             </div>
           )}
        </div>

        {/* NAVIGATION */}
        {currentTopic && (
          <div className="flex items-center gap-3">
            <Button 
              onClick={handlePrev} 
              disabled={isFirstSlide}
              className={`!py-2 !px-4 !rounded-xl !text-sm shadow-lg hover:scale-105 active:scale-95 transition-all ${isFirstSlide ? 'opacity-50 grayscale' : ''}`}
              variant="secondary"
              onMouseEnter={handleInteraction}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden md:inline">Prev</span>
            </Button>

            <Button 
              onClick={handleNext} 
              className="!py-2 !px-6 !rounded-xl !text-sm shadow-xl hover:scale-105 active:scale-95"
              onMouseEnter={handleInteraction}
            >
              {isLastSlide ? 'Finish' : 'Next'}
              {isLastSlide ? <Check className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-6 transition-colors duration-500">
        
        {!currentTopic ? (
          /* Topic Selection */
          <div className="w-full max-w-6xl h-full overflow-y-auto no-scrollbar pb-10">
            <div className="text-center mb-8 pt-4">
              <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-2 tracking-tight">
                Select Module
              </h1>
              <p className="text-slate-500 text-lg font-medium">Precision training modules.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
              {TOPICS.map((topic, index) => {
                let cardThemeClass = 'bg-gradient-to-br from-[#e0e5ec] to-[#f0f4f8]';
                let badgeClass = 'bg-surgical-100 text-surgical-600 shadow-sm border border-white';
                let iconBgClass = 'bg-[#e0e5ec] group-hover:text-surgical-500';
                let iconColorClass = 'text-slate-400 group-hover:text-surgical-500';
                let titleColorClass = 'text-slate-800 group-hover:text-surgical-700';

                if (topic.theme === 'gta') {
                  cardThemeClass = 'bg-gradient-to-br from-slate-800 to-slate-900 border-green-500/30';
                  badgeClass = 'bg-green-900 text-green-400 border border-green-500';
                  iconBgClass = 'bg-slate-800 group-hover:text-green-500';
                  iconColorClass = 'text-green-700 group-hover:text-green-400';
                  titleColorClass = 'text-slate-100 group-hover:text-green-400';
                } else if (topic.theme === 'wukong') {
                  cardThemeClass = 'bg-gradient-to-br from-[#fffbeb] to-[#fef3c7] border-amber-500/50';
                  badgeClass = 'bg-amber-100 text-amber-800 border border-amber-500';
                  iconBgClass = 'bg-[#fffbeb] group-hover:text-amber-600';
                  iconColorClass = 'text-amber-700 group-hover:text-amber-500';
                  titleColorClass = 'text-[#451a03] group-hover:text-amber-700 font-mythical';
                }

                return (
                  <div 
                    key={topic.id}
                    onClick={() => startTopic(index)}
                    onMouseEnter={handleInteraction}
                    className="group cursor-pointer perspective-500"
                  >
                    <div className={`art-3d-card p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-x-2 group-hover:shadow-[15px_15px_30px_#a3b1c6,-15px_-15px_30px_#ffffff] relative overflow-hidden h-full flex flex-col ${cardThemeClass}`}>
                      <div className="flex justify-between items-start mb-4">
                        <Badge color={badgeClass}>Module {index + 1}</Badge>
                        <div className={`w-8 h-8 rounded-lg shadow-[3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff] flex items-center justify-center transition-colors ${iconBgClass}`}>
                          <Play className={`w-4 h-4 ml-0.5 transition-colors ${iconColorClass}`} />
                        </div>
                      </div>
                      <h3 className={`text-lg font-bold mb-1 leading-tight transition-colors ${titleColorClass}`}>{topic.title}</h3>
                      <p className={`font-medium text-xs mt-auto pt-4 ${topic.theme === 'gta' ? 'text-slate-400' : 'text-slate-400'}`}>{topic.slides.length} Slides</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Slide View */
          <div className="w-full max-w-5xl h-full flex flex-col relative">
            {currentSlide && (
              <SlideRenderer 
                key={currentSlide.id}
                slide={currentSlide} 
                theme={currentTopic.theme}
                onScore={handleScoreUpdate}
              />
            )}
          </div>
        )}
      </main>
      
      {/* Progress Bar */}
      {currentTopic && (
        <div className="h-1.5 w-full bg-slate-200/50 shrink-0">
          <div 
            className={`h-full transition-all duration-500 ease-out shadow-[0_0_10px_#0ea5e9] ${
              currentTopic.theme === 'gta' ? 'bg-green-500 shadow-[0_0_15px_#22c55e]' : 
              currentTopic.theme === 'wukong' ? 'bg-amber-500 shadow-[0_0_15px_#f59e0b]' :
              'bg-surgical-500'
            }`}
            style={{ width: `${((currentSlideIndex + 1) / currentTopic.slides.length) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default App;