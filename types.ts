export type SlideType = 'intro' | 'concept' | 'quiz' | 'test' | 'gap-fill' | 'speaking' | 'reading' | 'timeline' | 'match';

export interface VisualPoint {
  label: string;
  subLabel?: string;
  percentage: number; // 0 to 100
  type: 'point' | 'range' | 'star' | 'start' | 'end'; // Visual style
  color?: 'blue' | 'green' | 'red' | 'purple' | 'orange' | 'gold';
}

export interface SlideContent {
  id: string;
  type: SlideType;
  title: string;
  
  // Visuals
  imageUrl?: string;
  visualData?: VisualPoint[]; // For timeline slides
  visualContext?: string; // Helper text for the timeline
  
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
  
  // Match/Drag-Drop specific
  pairs?: {
    left: string;
    right: string;
  }[];
  
  // Reading specific
  passage?: string;
  
  // Speaking specific
  speakingPrompts?: string[];
}

export interface Topic {
  id: string;
  title: string;
  theme?: 'hp-gryffindor' | 'hp-slytherin' | 'hp-ravenclaw' | 'hp-hufflepuff' | 'hp-winter' | 'hp-dark';
  slides: SlideContent[];
}