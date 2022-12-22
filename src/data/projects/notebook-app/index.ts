import { pages_list } from './pages';
import { Project } from 'data/projects/types';
import { components } from './components';

export const notebook: Project = {
  name: 'Notebook app',
  id: 'notebook-app',
  description: 'A notebook app which will help you to crate notes for your daily work.',
  techStack: ['chakraUi'],
  imageUrl: '/assets/images/projects/notebook.png',
  githubRepoName: 'notebook',
  liveLink: 'https://ma-ahmad.github.io/notebook',
  pages: pages_list(),
  components: components,
  stars: 24
};
