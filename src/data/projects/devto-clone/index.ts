import { pages_list } from './pages';
import { Project } from 'data/projects/types';
import { components } from './components';

export const devTo: Project = {
  name: 'Devto clone',
  id: 'devto-clone',
  description: 'Dev.to clone built with Next.js, ChakraUI and dev.to api.',
  techStack: ['nextjs', 'chakraUi'],
  imageUrl: '/assets/images/projects/devto.png',
  githubRepoName: 'dev.to-clone',
  liveLink: 'https://dev-to-clone-ab.vercel.app',
  pages: pages_list(),
  components: components,
  stars: 65
};
