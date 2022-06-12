import { pages_list } from './pages';
import { Project } from 'data/projects/types';
import { components } from './components';

export const blogApp: Project = {
  name: 'Blog app',
  id: 'blog-app',
  description: 'A React Blog App built by using libraries like ChakraUI, Formik.',
  techStack: ['reactjs', 'chakraUi'],
  imageUrl: '/assets/images/projects/blog.png',
  githubRepoName: 'reactBlog',
  liveLink: 'https://ma-ahmad.github.io/reactBlog',
  pages: pages_list(),
  components: components,
  stars: 17
};
