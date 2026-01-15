
export type AppView = 'READ' | 'CHAT' | 'ENGAGE';

export type Language = 'Sanskrit' | 'Telugu' | 'Tamil' | 'Hindi' | 'Kannada' | 'Malayalam' | 'English';

export interface Book {
  id: string;
  name: Record<Language, string>;
  essence: Record<Language, string>;
  category: 'ITHIHASA' | 'PURANA';
  coverUrl: string;
  color: string;
}

export interface StoryPanel {
  id: string;
  title: string;
  visualPrompt: string;
  content: string;
  sloka?: string;
  meaning?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface DailyQuote {
  text: string;
  author: string;
  meaning: string;
}
