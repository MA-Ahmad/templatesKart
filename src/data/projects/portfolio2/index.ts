import { pages_list } from './pages';
import { Project } from 'data/projects/types';
import { components } from './components';

export const portfolio2: Project = {
  name: 'Portfolio2',
  id: 'portfolio2',
  description:
    'My previous portfolio website to show my skills, experience, and articles I published.',
  techStack: ['reactjs', 'chakraUi'],
  imageUrl: '/assets/images/projects/portfolio2.png',
  themeCodeLink: 'https://github.com/MA-Ahmad/myPortfolio/tree/main/components/theme',
  githubRepoName: 'portfolio2',
  liveLink: 'https://ma-ahmad.github.io/portfolio2/#',
  pages: pages_list(),
  components: components,
  stars: 28
};
