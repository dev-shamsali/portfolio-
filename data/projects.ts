import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with user authentication, product management, and payment integration.',
    longDescription: 'A comprehensive MERN stack e-commerce platform featuring user authentication with JWT, product catalog with search and filters, shopping cart functionality, Stripe payment integration, order management, and admin dashboard for inventory management.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/ecommerce-platform',
    demoUrl: 'https://ecommerce-demo.vercel.app',
    image: '/images/project-ecommerce.jpg',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    longDescription: 'A real-time collaborative task management application built with MERN stack. Features include real-time synchronization using Socket.io, drag-and-drop task organization, team workspaces, user roles and permissions, file attachments, and activity tracking.',
    techStack: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'TypeScript', 'Framer Motion'],
    githubUrl: 'https://github.com/username/task-manager',
    demoUrl: 'https://taskmanager-demo.vercel.app',
    image: '/images/project-taskmanager.jpg',
  },
  {
    id: '3',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with data visualization and scheduling features.',
    longDescription: 'A comprehensive social media management dashboard with analytics, content scheduling, multi-platform support (Twitter, Instagram, Facebook), engagement metrics visualization, automated posting, and team collaboration tools. Built with MERN stack and integrated with multiple social media APIs.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'REST API', 'Docker'],
    githubUrl: 'https://github.com/username/social-dashboard',
    demoUrl: 'https://social-dashboard-demo.vercel.app',
    image: '/images/project-social.jpg',
  },
];

