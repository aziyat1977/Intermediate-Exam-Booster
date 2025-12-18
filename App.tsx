import React, { useState } from 'react';
import { TOPICS } from './data/courseContent';
import { SlideRenderer } from './components/SlideRenderer';
import { ProgressBar, Button, Card, Badge } from './components/UI';
import { Play, BookOpen, CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  const [currentTopicIndex, setCurrentTopicIndex] = useState<number | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const currentTopic = currentTopicIndex !== null ? TOPICS[currentTopicIndex] : null;
  const currentSlide = currentTopic ? currentTopic.slides[currentSlideIndex] : null;

  const handleNext = () => {
    if (currentTopic && currentSlideIndex < currentTopic.slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Finished Topic
      setCurrentTopicIndex(null);
      setCurrentSlideIndex(0);
    }
  };

  const startTopic = (index: number) => {
    setCurrentTopicIndex(index);
    setCurrentSlideIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-surgical-200 overflow-hidden relative">
      
      {/* 3D Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-200 to-blue-200 blur-3xl opacity-40 animate-float" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[20%] right-[-15%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-surgical-200 to-teal-200 blur-3xl opacity-40 animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-gradient-to-t from-indigo-200 to-white blur-3xl opacity-50 animate-float" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-[#e0e5ec]/80 backdrop-blur-lg border-b border-white/40 z-50 h-20 flex items-center justify-between px-6 lg:px-12 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 art-3d-btn-primary flex items-center justify-center shadow-lg">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-slate-800 drop-shadow-sm">Lingu<span className="text-surgical-600">Verse</span> <span className="text-slate-400 font-light">3D</span></span>
        </div>
        {currentTopic && (
          <div className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-500 bg-[#e0e5ec] px-6 py-2 rounded-full shadow-[inset_3px_3px_6px_#a3b1c6,inset_-3px_-3px_6px_#ffffff]">
             <span className="text-surgical-600">{currentTopic.title}</span>
             <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
             <span>Slide {currentSlideIndex + 1} / {currentTopic.slides.length}</span>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-16 px-4 md:px-8 flex flex-col items-center justify-center min-h-screen relative z-0">
        
        {!currentTopic ? (
          /* Topic Selection Screen */
          <div className="max-w-5xl w-full animate-fade-in-up">
            <div className="text-center mb-16 relative">
              <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-6 tracking-tight drop-shadow-sm">
                Select Module
              </h1>
              <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">Immerse yourself in high-precision linguistic training with our new spatial interface.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10 px-4">
              {TOPICS.map((topic, index) => (
                <div 
                  key={topic.id}
                  onClick={() => startTopic(index)}
                  className="group cursor-pointer perspective-500"
                >
                  <div className="art-3d-card h-full p-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[25px_25px_50px_#a3b1c6,-25px_-25px_50px_#ffffff] relative overflow-hidden bg-gradient-to-br from-[#e0e5ec] to-[#f0f4f8]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-surgical-400 opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500 -mr-10 -mt-10"></div>
                    
                    <div className="flex justify-between items-start mb-8">
                      <Badge color="bg-surgical-100 text-surgical-600 shadow-sm border border-white">Module {index + 1}</Badge>
                      <div className="w-12 h-12 rounded-2xl bg-[#e0e5ec] shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff] flex items-center justify-center group-hover:text-surgical-500 transition-colors">
                        <Play className="w-6 h-6 ml-1 text-slate-400 group-hover:text-surgical-500 transition-colors" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-surgical-700 transition-colors">{topic.title}</h3>
                    <p className="text-slate-500 font-medium">{topic.slides.length} Interactive Slides</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Slide View */
          <div className="w-full flex flex-col items-center gap-8">
            <div className="w-full max-w-4xl px-4">
              <ProgressBar current={currentSlideIndex} total={currentTopic.slides.length} />
            </div>
            
            {currentSlide && (
              <SlideRenderer 
                key={currentSlide.id}
                slide={currentSlide} 
                onNext={handleNext}
                isLast={currentSlideIndex === currentTopic.slides.length - 1}
              />
            )}
          </div>
        )}

      </main>
    </div>
  );
};

export default App;