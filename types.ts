
export enum CareerPath {
  PROFESSIONAL_START = 'PROFESSIONAL_START',
  ADVANCED_SKILLS = 'ADVANCED_SKILLS',
  SPA_STARTUP = 'SPA_STARTUP',
  INVESTMENT = 'INVESTMENT',
  INTERNATIONAL = 'INTERNATIONAL'
}

export interface CareerPathInfo {
  id: CareerPath;
  title: string;
  description: string;
  subLabel: string; // The "ghi nhỏ" label
  icon: string;
  color: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  imageUrl: string;
  tagColor: string;
  tagText: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
