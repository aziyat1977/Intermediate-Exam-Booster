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

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-surgical-200">
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 h-16 flex items-center justify-between px-6 lg:px-12 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-tr from-surgical-600 to-surgical-400 rounded-lg shadow-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">Lingu<span className="text-surgical-600">Verse</span> Surgical</span>
        </div>
        {currentTopic && (
          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-500">
             <span>{currentTopic.title}</span>
             <span className="w-px h-4 bg-slate-300"></span>
             <span>Slide {currentSlideIndex + 1} / {currentTopic.slides.length}</span>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 md:px-8 flex flex-col items-center justify-center min-h-screen">
        
        {!currentTopic ? (
          /* Topic Selection Screen */
          <div className="max-w-4xl w-full animate-fade-in-up">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Select Your Module
              </h1>
              <p className="text-slate-500 text-lg">High-precision linguistic training awaits.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {TOPICS.map((topic, index) => (
                <div 
                  key={topic.id}
                  onClick={() => startTopic(index)}
                  className="group cursor-pointer relative"
                >
                  <div className="absolute inset-0 bg-surgical-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <Card className="h-full hover:-translate-y-1 transition-transform duration-300 border border-slate-100">
                    <div className="flex justify-between items-start mb-6">
                      <Badge color="bg-surgical-50 text-surgical-600">Module {index + 1}</Badge>
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-surgical-500 transition-colors">
                        <Play className="w-5 h-5 text-slate-400 group-hover:text-white ml-1" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{topic.title}</h3>
                    <p className="text-slate-500">{topic.slides.length} Interactive Slides</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Slide View */
          <div className="w-full flex flex-col items-center gap-6">
            <div className="w-full max-w-3xl">
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
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-surgical-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-slate-200/30 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default App;