import { pages_list } from './pages';
import { Project } from 'data/projects/types';
import { components } from './components';

export const myWebsite: Project = {
  name: 'My Website',
  id: 'my-website',
  description:
    'This is a portfolio application built by using Next.js, ChakraUi, Typescript and Dev.to api.',
  techStack: ['nextjs', 'chakraUi'],
  imageUrl: '/assets/images/projects/my-website.png',
  githubRepoName: 'myPortfolio',
  themeCodeLink: 'https://github.com/MA-Ahmad/myPortfolio/tree/main/components/theme',
  liveLink: 'https://mahmad.me',
  pages: pages_list(),
  components: components,
  stars: 165
};
