import { pages_list } from './pages';
import { Project } from 'data/types';
import { components } from './components';

export const project: Project = {
  name: 'My Website',
  id: 'my-website',
  description:
    'This is a portfolio application built by using Next.js, ChakraUi, Typescript and Dev.to api.',
  techStack: ['nextjs', 'chakrkaUi'],
  imageUrl: '/assets/images/projects/mahmad.png',
  githubRepoName: 'myPortfolio',
  liveLink: 'https://mahmad.me',
  pages: pages_list(),
  components: components
};
