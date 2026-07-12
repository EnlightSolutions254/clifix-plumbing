export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Stat {
  id: string;
  value: string;
  number: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
  imageUrl: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: string;
  beforeUrl: string;
  afterUrl: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Sanitary' | 'Infrastructure' | 'Emergency' | 'Commercial';
  imageUrl: string;
  description: string;
  location: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceArea {
  name: string;
  neighborhoods: string[];
  zipCodes: string[];
}
