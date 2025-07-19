export interface Lesson {
  id: string;
  title: string;
  projectName: string;
  country?: string;
  vendor?: string;
  client?: string;
  industry?: string;
  valueProposition: string;
  description: string;
  imageUrl?: string;
  content?: string[];
  keywords?: string[];
}
