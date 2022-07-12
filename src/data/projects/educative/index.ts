import { pages_list } from './pages';
import { Project } from 'data/projects/types';
import { components } from './components';

export const educative: Project = {
  name: 'Educative',
  id: 'educative',
  description: 'Educative built with Next.js, ChakraUI.',
  techStack: ['nextjs', 'chakraUi'],
  imageUrl: '/assets/images/projects/educative.png',
  githubRepoName: 'educative',
  liveLink: 'https://educative.vercel.app/',
  pages: pages_list(),
  components: components,
  stars: 3
};
