
export type Category = 'web' | 'aiml' | 'app';

export interface Project {
  id: string;
  title: string;
  year: number;
  category: Category;
  image: string;   // public path e.g. "/projects/xyz.png"
  href: string;    // project link / github / case-study
  tags?: string[];
}

export const projects: Project[] = [
  // 2025
  {
    id: 'p1',
    title: 'Campus Navigator',
    year: 2025,
    category: 'app',
    image: '/image/abhi.jpg',
    href: 'https://github.com/your-org/campus-navigator',
    tags: ['React Native', 'Maps'],
  },
  {
    id: 'p2',
    title: 'CodeQuest',
    year: 2025,
    category: 'web',
    image: '/projects/codequest.png',
    href: 'https://yourdomain.com/codequest',
    tags: ['Next.js', 'Tailwind'],
  },
  {
    id: 'p3',
    title: 'Placement Predictor',
    year: 2025,
    category: 'aiml',
    image: '/projects/placement-predictor.png',
    href: 'https://github.com/your-org/placement-predictor',
    tags: ['Python', 'Sklearn'],
  },
];

// Helpers
export const years = Array.from(new Set(projects.map(p => p.year))).sort((a,b) => b - a);
export const categories: Category[] = ['web', 'aiml', 'app'];
