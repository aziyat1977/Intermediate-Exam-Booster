export type SlideType = 'intro' | 'concept' | 'quiz' | 'test' | 'gap-fill' | 'speaking' | 'reading';

export interface SlideContent {
  id: string;
  type: SlideType;
  title: string;
  
  // Visuals
  imageUrl?: string;
  
  // Text Content
  leadText?: string;
  bulletPoints?: {
    lang: 'en' | 'uz' | 'ru';
    label: string;
    text: string;
  }[];
  
  // Interactive Data
  question?: string;
  options?: string[];
  correctAnswer?: string | number; // Index for options, string for gap-fill
  explanation?: string;
  
  // Reading specific
  passage?: string;
  
  // Speaking specific
  speakingPrompts?: string[];
}

export interface Topic {
  id: string;
  title: string;
  slides: SlideContent[];
}