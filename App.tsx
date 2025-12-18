import React, { useState, useEffect } from 'react';
import { TOPICS } from './data/courseContent';
import { SlideRenderer } from './components/SlideRenderer';
import { ProgressBar, Button, Badge } from './components/UI';
import { Play, BookOpen, ChevronRight, ChevronLeft, Check } from 'lucide-react';

const App: React.FC = () => {
  const [currentTopicIndex, setCurrentTopicIndex] = useState<number | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const currentTopic = currentTopicIndex !== null ? TOPICS[currentTopicIndex] : null;
  const currentSlide = currentTopic ? currentTopic.slides[currentSlideIndex] : null;

  // Preload Images when a topic is selected
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
    if (currentTopic && currentSlideIndex < currentTopic.slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    } else {
      // Finished Topic
      setCurrentTopicIndex(null);
      setCurrentSlideIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentTopic && currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const startTopic = (index: number) => {
    setCurrentTopicIndex(index);
    setCurrentSlideIndex(0);
  };

  const isLastSlide = currentTopic ? currentSlideIndex === currentTopic.slides.length - 1 : false;
  const isFirstSlide = currentSlideIndex === 0;

  const themeClass = currentTopic?.theme === 'gta' ? 'gta-mode' : '';

  return (
    <div className={`h-screen w-screen font-sans text-slate-900 selection:bg-surgical-200 overflow-hidden relative bg-[#e0e5ec] flex flex-col ${themeClass}`}>
      
      {/* 3D Background Elements - Static to prevent distraction/repaint */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] rounded-full bg-gradient-to-br from-purple-200 to-blue-200 blur-3xl opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] rounded-full bg-gradient-to-t from-surgical-200 to-white blur-3xl opacity-50"></div>
      </div>

      {/* Header - Fixed Height */}
      <header className="h-20 bg-[#e0e5ec]/90 backdrop-blur-md border-b border-white/50 z-50 flex items-center justify-between px-6 shadow-sm shrink-0 transition-colors duration-500">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 art-3d-btn-primary flex items-center justify-center shadow-lg rounded-xl transition-all duration-500 cursor-pointer" onClick={() => setCurrentTopicIndex(null)}>
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-black text-2xl tracking-tight text-slate-800 leading-none transition-colors duration-500 cursor-pointer" onClick={() => setCurrentTopicIndex(null)}>
              Lingu<span className="text-surgical-600 transition-colors duration-500">Verse</span>
            </h1>
            {currentTopic && (
               <p className="text-xs font-bold text-slate-500 mt-1 truncate max-w-[200px] md:max-w-md transition-colors duration-500">
                 {currentTopic.title}
               </p>
            )}
          </div>
        </div>

        {/* NAVIGATION BUTTONS */}
        {currentTopic && (
          <div className="flex items-center gap-3">
            <Button 
              onClick={handlePrev} 
              disabled={isFirstSlide}
              className={`!py-2 !px-4 !rounded-xl !text-sm shadow-lg hover:scale-105 active:scale-95 transition-all ${isFirstSlide ? 'opacity-50 grayscale' : ''}`}
              variant="secondary"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden md:inline">Prev</span>
            </Button>

            <Button 
              onClick={handleNext} 
              className="!py-2 !px-6 !rounded-xl !text-sm shadow-xl hover:scale-105 active:scale-95"
            >
              {isLastSlide ? 'Finish' : 'Next'}
              {isLastSlide ? <Check className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </Button>
          </div>
        )}
      </header>

      {/* Main Content Area - Flex Grow to fill remaining height */}
      <main className="flex-1 relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-6 transition-colors duration-500">
        
        {!currentTopic ? (
          /* Topic Selection Screen */
          <div className="w-full max-w-6xl h-full overflow-y-auto no-scrollbar pb-10">
            <div className="text-center mb-8 pt-4">
              <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-2 tracking-tight">
                Select Module
              </h1>
              <p className="text-slate-500 text-lg font-medium">Precision training modules.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
              {TOPICS.map((topic, index) => (
                <div 
                  key={topic.id}
                  onClick={() => startTopic(index)}
                  className="group cursor-pointer perspective-500"
                >
                  <div className={`art-3d-card p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[15px_15px_30px_#a3b1c6,-15px_-15px_30px_#ffffff] relative overflow-hidden h-full flex flex-col ${topic.theme === 'gta' ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-green-500/30' : 'bg-gradient-to-br from-[#e0e5ec] to-[#f0f4f8]'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <Badge color={topic.theme === 'gta' ? 'bg-green-900 text-green-400 border border-green-500' : 'bg-surgical-100 text-surgical-600 shadow-sm border border-white'}>Module {index + 1}</Badge>
                      <div className={`w-8 h-8 rounded-lg shadow-[3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff] flex items-center justify-center transition-colors ${topic.theme === 'gta' ? 'bg-slate-800 group-hover:text-green-500' : 'bg-[#e0e5ec] group-hover:text-surgical-500'}`}>
                        <Play className={`w-4 h-4 ml-0.5 transition-colors ${topic.theme === 'gta' ? 'text-green-700 group-hover:text-green-400' : 'text-slate-400 group-hover:text-surgical-500'}`} />
                      </div>
                    </div>
                    <h3 className={`text-lg font-bold mb-1 leading-tight transition-colors ${topic.theme === 'gta' ? 'text-slate-100 group-hover:text-green-400' : 'text-slate-800 group-hover:text-surgical-700'}`}>{topic.title}</h3>
                    <p className={`font-medium text-xs mt-auto pt-4 ${topic.theme === 'gta' ? 'text-slate-400' : 'text-slate-400'}`}>{topic.slides.length} Slides</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Slide View - Full Height Container */
          <div className="w-full max-w-5xl h-full flex flex-col relative">
            {currentSlide && (
              <SlideRenderer 
                key={currentSlide.id}
                slide={currentSlide} 
                theme={currentTopic.theme}
              />
            )}
          </div>
        )}

      </main>
      
      {/* Fixed Bottom Progress Bar */}
      {currentTopic && (
        <div className="h-1.5 w-full bg-slate-200/50 shrink-0">
          <div 
            className={`h-full transition-all duration-500 ease-out shadow-[0_0_10px_#0ea5e9] ${currentTopic.theme === 'gta' ? 'bg-green-500 shadow-[0_0_15px_#22c55e]' : 'bg-surgical-500'}`}
            style={{ width: `${((currentSlideIndex + 1) / currentTopic.slides.length) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default App;