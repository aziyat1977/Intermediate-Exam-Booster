import React, { useState, useEffect, useRef } from 'react';
import { TOPICS } from './data/courseContent';
import { SlideRenderer } from './components/SlideRenderer';
import { Button, Badge } from './components/UI';
import { Play, BookOpen, ChevronRight, ChevronLeft, Check, Trophy, Zap, Moon, Sun, Monitor, Volume2, Cloud, Hexagon } from 'lucide-react';

// Pure JS Sound Manager using Web Audio API
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
  const [darkMode, setDarkMode] = useState(false);
  
  // Game State
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [pointsDelta, setPointsDelta] = useState<number | null>(null);

  const currentTopic = currentTopicIndex !== null ? TOPICS[currentTopicIndex] : null;
  const currentSlide = currentTopic ? currentTopic.slides[currentSlideIndex] : null;

  // Background Elements State (200% more items)
  const [particles, setParticles] = useState<{id: number, x: number, y: number, size: number, speed: number}[]>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 5,
      speed: Math.random() * 10 + 5
    }));
    setParticles(newParticles);
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

  const handleInteraction = () => soundManager.playHover();
  const isLastSlide = currentTopic ? currentSlideIndex === currentTopic.slides.length - 1 : false;
  const isFirstSlide = currentSlideIndex === 0;

  // Background Render Logic
  const renderBackground = () => {
    const theme = currentTopic?.theme || 'default';
    
    if (theme === 'gta') {
      return (
        <>
          <div className="absolute inset-0 bg-slate-950 opacity-90 z-[-10]"></div>
          {/* Cyber Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)_translateY(-100px)] opacity-30 animate-pulse"></div>
          {/* Random Glitch Rectangles */}
          {particles.slice(0, 10).map(p => (
            <div key={p.id} className="absolute bg-green-500/20 backdrop-blur-sm"
              style={{
                left: `${p.x}%`, top: `${p.y}%`, width: `${p.size * 2}px`, height: `${p.size / 2}px`,
                animation: `float ${p.speed}s infinite`
              }}
            />
          ))}
        </>
      );
    }

    if (theme === 'wukong') {
      return (
        <>
           <div className={`absolute inset-0 z-[-10] ${darkMode ? 'bg-wukong-dark' : 'bg-[#fff7ed]'}`}></div>
           {/* Floating Clouds */}
           {particles.slice(0, 8).map(p => (
             <div key={p.id} className="absolute wukong-cloud rounded-full opacity-40"
               style={{
                 left: `${p.x}%`, top: `${p.y}%`, width: `${p.size * 10}px`, height: `${p.size * 6}px`,
                 animation: `float-reverse ${p.speed * 2}s infinite linear`
               }}
             />
           ))}
           {/* Gold Dust */}
           {particles.slice(10, 25).map(p => (
             <div key={p.id} className="absolute bg-amber-500 rounded-full blur-[1px]"
               style={{
                 left: `${p.x}%`, top: `${p.y}%`, width: `${p.size / 4}px`, height: `${p.size / 4}px`,
                 animation: `float ${p.speed}s infinite ease-in-out`
               }}
             />
           ))}
        </>
      );
    }

    // Default Surgical Theme
    return (
      <>
        <div className={`absolute inset-0 z-[-10] ${darkMode ? 'bg-slate-900' : 'bg-[#e0e5ec]'}`}></div>
        {/* Floating Geometry */}
        {particles.map((p, i) => (
          <div key={p.id} 
               className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float`}
               style={{
                 left: `${p.x}%`, top: `${p.y}%`, width: `${p.size * 5}px`, height: `${p.size * 5}px`,
                 backgroundColor: i % 2 === 0 ? '#38bdf8' : '#818cf8',
                 animationDuration: `${p.speed * 1.5}s`,
                 animationDelay: `${i * 0.2}s`
               }}
          />
        ))}
        {/* Grid Dots */}
        <div className={`absolute inset-0 opacity-20 bg-grid-pattern pointer-events-none`}></div>
      </>
    );
  };

  return (
    <div className={`h-screen w-screen font-sans overflow-hidden relative flex flex-col transition-colors duration-500 ${darkMode ? 'dark text-white' : 'text-slate-900'}`}>
      
      {/* GLOBAL BACKGROUND LAYER */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {renderBackground()}
      </div>

      {/* Header */}
      <header className="h-20 backdrop-blur-md border-b border-white/10 z-50 flex items-center justify-between px-6 shadow-sm shrink-0 transition-colors duration-500 relative">
        <div className="flex items-center gap-4 z-10">
          <div className="w-10 h-10 art-3d-btn-primary flex items-center justify-center shadow-lg rounded-xl transition-all duration-500 cursor-pointer hover:scale-110 active:scale-90" onClick={() => setCurrentTopicIndex(null)} onMouseEnter={handleInteraction}>
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className={`font-black text-2xl tracking-tight leading-none cursor-pointer ${darkMode ? 'text-white' : 'text-slate-800'}`} onClick={() => setCurrentTopicIndex(null)}>
              Lingu<span className="text-surgical-500">Verse</span>
            </h1>
            {currentTopic && (
               <p className={`text-xs font-bold mt-1 truncate max-w-[200px] md:max-w-md ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                 {currentTopic.title}
               </p>
            )}
          </div>
        </div>

        {/* GAMIFICATION HUD - CENTER */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-6 z-10">
           <div className={`flex items-center gap-2 font-black text-xl transition-transform ${pointsDelta ? 'scale-110 text-green-500' : (darkMode ? 'text-white' : 'text-slate-700')}`}>
              <Trophy className="w-5 h-5 text-yellow-500 animate-pulse" />
              <span>{score}</span>
              {pointsDelta && <span className="absolute -top-8 left-full text-lg font-bold text-green-500 animate-fade-in-up">+{pointsDelta}</span>}
           </div>
           {streak > 1 && (
             <div className="flex items-center gap-1 font-black text-orange-500 animate-bounce">
                <Zap className="w-5 h-5 fill-current" />
                <span>x{streak}</span>
             </div>
           )}
        </div>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-3 z-10">
          <button onClick={toggleTheme} className={`p-2 rounded-full transition-all duration-300 ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-white text-slate-600 hover:bg-slate-100 shadow-sm'}`}>
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {currentTopic && (
            <>
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
            </>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-6 z-10">
        
        {!currentTopic ? (
          /* Topic Selection */
          <div className="w-full max-w-6xl h-full overflow-y-auto no-scrollbar pb-10">
            <div className="text-center mb-10 pt-4 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-surgical-500/20 blur-[100px] rounded-full pointer-events-none"></div>
              <h1 className={`text-4xl md:text-6xl font-black mb-4 tracking-tight relative z-10 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                Select Module
              </h1>
              <p className={`text-lg font-medium relative z-10 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>High-fidelity linguistic training simulations.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {TOPICS.map((topic, index) => {
                const isGTA = topic.theme === 'gta';
                const isWukong = topic.theme === 'wukong';
                
                // Dynamic Styles based on Theme and Dark Mode
                let cardClass = darkMode 
                  ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-3d-dark' 
                  : 'bg-gradient-to-br from-[#e0e5ec] to-[#f0f4f8] border-white/50 shadow-3d-light';
                let iconClass = darkMode ? 'text-slate-300' : 'text-slate-600';
                let iconBg = darkMode ? 'bg-slate-700' : 'bg-slate-200';
                
                if (isGTA) {
                   cardClass = 'bg-slate-900 border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:shadow-[0_0_50px_rgba(34,197,94,0.3)]';
                   iconClass = 'text-green-400';
                   iconBg = 'bg-green-900/50';
                } else if (isWukong) {
                   cardClass = 'bg-[#450a0a] border-amber-500/30 shadow-[0_0_30px_rgba(217,119,6,0.1)] hover:shadow-[0_0_50px_rgba(217,119,6,0.3)]';
                   iconClass = 'text-amber-400';
                   iconBg = 'bg-amber-900/50';
                }

                return (
                  <div 
                    key={topic.id}
                    onClick={() => startTopic(index)}
                    onMouseEnter={handleInteraction}
                    className="group cursor-pointer perspective-1000"
                  >
                    <div className={`relative h-full p-8 rounded-3xl border transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] flex flex-col overflow-hidden ${cardClass}`}>
                      {/* Hover Effect Light */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <Badge color={isGTA ? 'bg-green-900/80 text-green-400 border border-green-500' : isWukong ? 'bg-amber-900/80 text-amber-400 border border-amber-500' : 'bg-surgical-100 text-surgical-600 dark:bg-slate-700 dark:text-surgical-400'}>
                          MODULE {index + 1}
                        </Badge>
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${iconBg}`}>
                          {isGTA ? <Monitor className={`w-6 h-6 ${iconClass}`} /> : 
                           isWukong ? <Cloud className={`w-6 h-6 ${iconClass}`} /> :
                           <Hexagon className={`w-6 h-6 ${iconClass}`} />}
                        </div>
                      </div>
                      
                      <h3 className={`text-2xl font-bold mb-2 leading-tight relative z-10 ${isGTA ? 'text-green-50' : isWukong ? 'text-amber-50 font-mythical' : (darkMode ? 'text-white' : 'text-slate-800')}`}>
                        {topic.title}
                      </h3>
                      
                      <div className="mt-auto pt-6 flex items-center gap-2 relative z-10">
                         <div className={`h-1 flex-1 rounded-full ${isGTA ? 'bg-green-900' : isWukong ? 'bg-amber-900' : 'bg-slate-200 dark:bg-slate-700'}`}>
                           <div className={`h-full w-1/3 rounded-full ${isGTA ? 'bg-green-500' : isWukong ? 'bg-amber-500' : 'bg-surgical-500'}`}></div>
                         </div>
                         <span className={`text-xs font-bold ${isGTA ? 'text-green-400' : isWukong ? 'text-amber-400' : 'text-slate-400'}`}>{topic.slides.length} Slides</span>
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
      
      {/* Footer Progress */}
      {currentTopic && (
        <div className={`h-2 w-full shrink-0 ${darkMode ? 'bg-slate-800' : 'bg-slate-200/50'}`}>
          <div 
            className={`h-full transition-all duration-500 ease-out shadow-[0_0_20px_currentColor] ${
              currentTopic.theme === 'gta' ? 'bg-green-500 text-green-500' : 
              currentTopic.theme === 'wukong' ? 'bg-amber-500 text-amber-500' :
              'bg-surgical-500 text-surgical-500'
            }`}
            style={{ width: `${((currentSlideIndex + 1) / currentTopic.slides.length) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default App;