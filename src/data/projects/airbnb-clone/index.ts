import { pages_list } from './pages';
import { Project } from 'data/types';
import { components } from './components';

export const airbnb: Project = {
  name: 'Airbnb clone',
  id: 'airbnb-clone',
  description: 'Airbnb clone built with Next.js, ChakraUI.',
  techStack: ['nextjs', 'chakrkaUi'],
  imageUrl: '/assets/images/projects/devto.png',
  githubRepoName: 'chakra-airbnb',
  liveLink: 'https://chakra-airbnb.vercel.app',
  pages: pages_list(),
  components: components
};
