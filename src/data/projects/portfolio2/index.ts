import { pages_list } from './pages';
import { Project } from 'data/types';
import { components } from './components';

export const project: Project = {
  name: 'Portfolio2',
  id: 'portfolio2',
  description:
    'My previous portfolio website to show my skills, experience, and articles I published.',
  techStack: ['nextjs', 'chakrkaUi'],
  imageUrl: '/assets/images/projects/portfolio2.png',
  githubRepoName: 'portfolio2',
  liveLink: 'https://ma-ahmad.github.io/portfolio2',
  pages: pages_list(),
  components: components
};
