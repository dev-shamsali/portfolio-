// Type definitions for the portfolio project

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5, where 5 is expert
  category: 'frontend' | 'backend' | 'devops' | 'tools';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

