import { pages_list } from './pages';
import { Project } from 'data/types';
import { components } from './components';

export const notebook: Project = {
  name: 'Notebook app',
  id: 'notebook-app',
  description: 'A notebook app which will help you to crate notes for your daily work.',
  techStack: ['nextjs', 'chakrkaUi'],
  imageUrl: '/assets/images/projects/notebook.png',
  githubRepoName: 'next-notebook',
  liveLink: 'https://next-notebook.vercel.app',
  pages: pages_list(),
  components: components
};
