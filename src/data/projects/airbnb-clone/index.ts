import { pages_list } from './pages';
import { Project } from 'data/projects/types';
import { components } from './components';

export const airbnb: Project = {
  name: 'Airbnb clone',
  id: 'airbnb-clone',
  description: 'Airbnb clone built with Next.js, ChakraUI.',
  techStack: ['nextjs', 'chakraUi'],
  imageUrl: '/assets/images/projects/airbnb/airbnb-home.jpg',
  githubRepoName: 'chakra-airbnb',
  liveLink: 'https://chakra-airbnb.vercel.app',
  pages: pages_list(),
  components: components,
  stars: 7
};
