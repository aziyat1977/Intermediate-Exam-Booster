import React, { useState, useEffect } from 'react';
import { TOPICS } from './data/courseContent';
import { SlideRenderer } from './components/SlideRenderer';
import { Button, Badge } from './components/UI';
import { BookOpen, ChevronRight, ChevronLeft, Check, Trophy, Zap, Moon, Sun, Wand2, Star, Snowflake } from 'lucide-react';

// Pure JS Sound Manager
class SoundManager {
  ctx: AudioContext | null = null;
  muted: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  toggleMute() { this.muted = !this.muted; }

  playTone(freq: number, type: OscillatorType, duration: number, gainVal: number = 0.1) {
    if (!this.ctx || this.muted) return;
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

  playClick() { this.playTone(600, 'sine', 0.1, 0.05); } // Magical ding
  playSuccess() { 
    this.playTone(500, 'sine', 0.1, 0.1); 
    setTimeout(() => this.playTone(800, 'sine', 0.3, 0.1), 100); 
    setTimeout(() => this.playTone(1200, 'sine', 0.5, 0.05), 200); 
  }
  playError() { this.playTone(100, 'sawtooth', 0.4, 0.1); }
  playHover() { this.playTone(800, 'triangle', 0.05, 0.01); }
}

const soundManager = new SoundManager();

const App: React.FC = () => {
  const [currentTopicIndex, setCurrentTopicIndex] = useState<number | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(true); // Default to Dark/Winter
  
  // Game State
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [pointsDelta, setPointsDelta] = useState<number | null>(null);

  const currentTopic = currentTopicIndex !== null ? TOPICS[currentTopicIndex] : null;
  const currentSlide = currentTopic ? currentTopic.slides[currentSlideIndex] : null;

  // Magical Particles
  const [particles, setParticles] = useState<{id: number, x: number, y: number, size: number, speed: number}[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 5 + 2
    }));
    setParticles(newParticles);
    document.documentElement.classList.add('dark'); // Force dark mode for HP theme default
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    soundManager.playClick();
  };

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

  const handleScoreUpdate = (correct: boolean) => {
    if (correct) {
      soundManager.playSuccess();
      const newPoints = 10 + (streak * 2); // House points
      setScore(s => s + newPoints);
      setStreak(s => s + 1);
      setPointsDelta(newPoints);
      setTimeout(() => setPointsDelta(null), 1000);
    } else {
      soundManager.playError();
      setStreak(0);
    }
  };

  const handleInteraction = () => soundManager.playHover();
  const isLastSlide = currentTopic ? currentSlideIndex === currentTopic.slides.length - 1 : false;
  const isFirstSlide = currentSlideIndex === 0;

  return (
    <div className={`h-screen w-screen font-sans overflow-hidden relative flex flex-col transition-colors duration-500 bg-[#0c1220] text-slate-100`}>
      
      {/* MAGICAL BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute inset-0 bg-gradient-to-b from-[#0e1a40] to-[#000000] opacity-90"></div>
         {/* Stars */}
         <div className="absolute inset-0 bg-star-dust opacity-30"></div>
         {/* Snow */}
         {particles.map((p) => (
           <div key={p.id} className="absolute bg-white rounded-full opacity-60 blur-[1px]" 
                style={{
                  left: `${p.x}%`, 
                  top: `${p.y}%`, 
                  width: `${p.size}px`, 
                  height: `${p.size}px`,
                  animation: `snow-slow ${p.speed * 4}s linear infinite`
                }} />
         ))}
      </div>

      {/* Header */}
      <header className="h-20 backdrop-blur-md border-b border-white/10 z-50 flex items-center justify-between px-6 shadow-magical shrink-0 relative bg-[#0e1a40]/50">
        <div className="flex items-center gap-4 z-10">
          <div className="w-10 h-10 bg-hp-gold rounded-full flex items-center justify-center shadow-[0_0_15px_#d4af37] cursor-pointer hover:scale-110 transition-transform" onClick={() => setCurrentTopicIndex(null)} onMouseEnter={handleInteraction}>
            <Wand2 className="w-6 h-6 text-[#740001]" />
          </div>
          <div>
            <h1 className="font-magic font-black text-2xl tracking-widest text-hp-gold drop-shadow-md cursor-pointer" onClick={() => setCurrentTopicIndex(null)}>
              HOGWARTS <span className="text-white text-sm font-sans tracking-normal opacity-70">Winter Booster</span>
            </h1>
            {currentTopic && (
               <p className="text-xs font-serif text-slate-400 mt-1 uppercase tracking-widest">
                 {currentTopic.title}
               </p>
            )}
          </div>
        </div>

        {/* HOUSE POINTS HUD */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-6 z-10">
           <div className={`flex items-center gap-2 font-magic text-2xl transition-transform ${pointsDelta ? 'scale-110 text-hp-gold' : 'text-slate-300'}`}>
              <Trophy className="w-6 h-6 text-hp-gold" />
              <span>{score}</span>
              {pointsDelta && <span className="absolute -top-8 left-full text-xl font-bold text-hp-gold animate-fade-in-up">+{pointsDelta} Points!</span>}
           </div>
           {streak > 1 && (
             <div className="flex items-center gap-1 font-bold text-cyan-400 animate-pulse">
                <Zap className="w-4 h-4 fill-current" />
                <span>Streak x{streak}</span>
             </div>
           )}
        </div>

        {/* CONTROLS */}
        <div className="flex items-center gap-3 z-10">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-yellow-200 transition-all">
            {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          {currentTopic && (
            <>
              <Button 
                onClick={handlePrev} 
                disabled={isFirstSlide}
                className={`!py-2 !px-4 !rounded border border-white/20 bg-black/30 backdrop-blur text-white hover:bg-white/10 ${isFirstSlide ? 'opacity-30' : ''}`}
                variant="secondary"
                onMouseEnter={handleInteraction}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button 
                onClick={handleNext} 
                className="!py-2 !px-6 !rounded border border-hp-gold bg-[#740001] text-hp-gold hover:bg-[#ae0001] shadow-[0_0_15px_#740001]"
                onMouseEnter={handleInteraction}
              >
                {isLastSlide ? 'Finish' : 'Next'}
                {isLastSlide ? <Check className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </Button>
            </>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-6 z-10">
        
        {!currentTopic ? (
          /* Module Selection Map */
          <div className="w-full max-w-6xl h-full overflow-y-auto no-scrollbar pb-10">
            <div className="text-center mb-12 pt-8 relative">
              <h1 className="text-5xl md:text-7xl font-magic text-transparent bg-clip-text bg-gradient-to-b from-hp-gold to-[#946b2d] drop-shadow-sm mb-4">
                Select Your Class
              </h1>
              <p className="text-xl font-serif italic text-slate-400">"Help will always be given at Hogwarts to those who ask for it."</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {TOPICS.map((topic, index) => {
                const colors = {
                    'hp-gryffindor': 'border-[#d4af37] shadow-[0_0_20px_#740001] bg-[#740001]/40',
                    'hp-slytherin': 'border-[#aaaaaa] shadow-[0_0_20px_#1a472a] bg-[#1a472a]/40',
                    'hp-ravenclaw': 'border-[#946b2d] shadow-[0_0_20px_#0e1a40] bg-[#0e1a40]/40',
                    'hp-hufflepuff': 'border-[#111111] shadow-[0_0_20px_#ecb939] bg-[#ecb939]/40',
                    'hp-winter': 'border-cyan-400 shadow-[0_0_20px_cyan] bg-slate-900/60',
                    'hp-dark': 'border-gray-600 shadow-[0_0_20px_black] bg-black/60'
                }[topic.theme || 'hp-gryffindor'];

                return (
                  <div 
                    key={topic.id}
                    onClick={() => startTopic(index)}
                    onMouseEnter={handleInteraction}
                    className="group cursor-pointer perspective-1000"
                  >
                    <div className={`relative h-full p-8 rounded border-2 transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.02] flex flex-col overflow-hidden backdrop-blur-sm ${colors}`}>
                      {/* Magical Glow */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <Badge color="bg-black/50 text-white border border-white/20 font-serif">YEAR {index + 1}</Badge>
                        <Star className="w-6 h-6 text-white opacity-50 group-hover:text-hp-gold group-hover:opacity-100 transition-colors animate-pulse" />
                      </div>
                      
                      <h3 className="text-2xl font-magic font-bold mb-2 leading-tight text-white drop-shadow-md">
                        {topic.title}
                      </h3>
                      
                      <div className="mt-auto pt-6 flex items-center gap-2 relative z-10">
                         <div className="h-1 flex-1 rounded-full bg-white/10">
                           <div className="h-full w-1/3 rounded-full bg-white shadow-[0_0_10px_white]"></div>
                         </div>
                         <span className="text-xs font-bold text-slate-300">{topic.slides.length} Spells</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Slide View */
          <div className="w-full max-w-5xl h-full flex flex-col relative z-20">
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
      
      {/* Footer Wand Progress */}
      {currentTopic && (
        <div className="h-1 w-full shrink-0 bg-[#0c1220]">
          <div 
            className="h-full transition-all duration-500 ease-out bg-gradient-to-r from-transparent via-cyan-400 to-white shadow-[0_0_20px_cyan]"
            style={{ width: `${((currentSlideIndex + 1) / currentTopic.slides.length) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default App;