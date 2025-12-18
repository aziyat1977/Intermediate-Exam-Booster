import React, { useState } from 'react';
import { TOPICS } from './data/courseContent';
import { SlideRenderer } from './components/SlideRenderer';
import { ProgressBar, Button, Badge } from './components/UI';
import { Play, BookOpen, ChevronRight, Check } from 'lucide-react';

const App: React.FC = () => {
  const [currentTopicIndex, setCurrentTopicIndex] = useState<number | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const currentTopic = currentTopicIndex !== null ? TOPICS[currentTopicIndex] : null;
  const currentSlide = currentTopic ? currentTopic.slides[currentSlideIndex] : null;

  const handleNext = () => {
    if (currentTopic && currentSlideIndex < currentTopic.slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    } else {
      // Finished Topic
      setCurrentTopicIndex(null);
      setCurrentSlideIndex(0);
    }
  };

  const startTopic = (index: number) => {
    setCurrentTopicIndex(index);
    setCurrentSlideIndex(0);
  };

  const isLastSlide = currentTopic ? currentSlideIndex === currentTopic.slides.length - 1 : false;

  return (
    <div className="h-screen w-screen font-sans text-slate-900 selection:bg-surgical-200 overflow-hidden relative bg-[#e0e5ec] flex flex-col">
      
      {/* 3D Background Elements - Static to prevent distraction/repaint */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] rounded-full bg-gradient-to-br from-purple-200 to-blue-200 blur-3xl opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] rounded-full bg-gradient-to-t from-surgical-200 to-white blur-3xl opacity-50"></div>
      </div>

      {/* Header - Fixed Height */}
      <header className="h-20 bg-[#e0e5ec]/90 backdrop-blur-md border-b border-white/50 z-50 flex items-center justify-between px-6 shadow-sm shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 art-3d-btn-primary flex items-center justify-center shadow-lg rounded-xl">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-black text-2xl tracking-tight text-slate-800 leading-none">
              Lingu<span className="text-surgical-600">Verse</span>
            </h1>
            {currentTopic && (
               <p className="text-xs font-bold text-slate-500 mt-1 truncate max-w-[200px] md:max-w-md">
                 {currentTopic.title}
               </p>
            )}
          </div>
        </div>

        {/* TOP RIGHT NAVIGATION BUTTON */}
        {currentTopic && (
          <Button 
            onClick={handleNext} 
            className="!py-2 !px-6 !rounded-xl !text-sm shadow-xl hover:scale-105 active:scale-95"
          >
            {isLastSlide ? 'Finish' : 'Next'}
            {isLastSlide ? <Check className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </Button>
        )}
      </header>

      {/* Main Content Area - Flex Grow to fill remaining height */}
      <main className="flex-1 relative overflow-hidden flex flex-col items-center justify-center p-4 md:p-6">
        
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
                  <div className="art-3d-card p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[15px_15px_30px_#a3b1c6,-15px_-15px_30px_#ffffff] relative overflow-hidden bg-gradient-to-br from-[#e0e5ec] to-[#f0f4f8] h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <Badge color="bg-surgical-100 text-surgical-600 shadow-sm border border-white">Module {index + 1}</Badge>
                      <div className="w-8 h-8 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff] flex items-center justify-center group-hover:text-surgical-500 transition-colors">
                        <Play className="w-4 h-4 ml-0.5 text-slate-400 group-hover:text-surgical-500" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-surgical-700 leading-tight">{topic.title}</h3>
                    <p className="text-slate-400 font-medium text-xs mt-auto pt-4">{topic.slides.length} Slides</p>
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
              />
            )}
          </div>
        )}

      </main>
      
      {/* Fixed Bottom Progress Bar */}
      {currentTopic && (
        <div className="h-1.5 w-full bg-slate-200 shrink-0">
          <div 
            className="h-full bg-surgical-500 transition-all duration-500 ease-out shadow-[0_0_10px_#0ea5e9]"
            style={{ width: `${((currentSlideIndex + 1) / currentTopic.slides.length) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default App;