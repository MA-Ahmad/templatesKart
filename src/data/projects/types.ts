import { IconType } from 'react-icons';

export interface Project {
  name: string;
  id: string;
  description: string;
  githubRepoName: string;
  imageUrl: string;
  liveLink: string;
  themeCodeLink?: string;
  techStack: string[];
  pages: Page[];
  components: Component[];
  stars: number;
}

export interface Page {
  name: string;
  id: string;
  icon: IconType;
  description?: string;
  components?: Component[];
}

export interface Component {
  name: string;
  filename: string;
  type: string;
  page_id: string;
  tags?: string[];
  codeLink?: string;
}
