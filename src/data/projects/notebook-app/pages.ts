import { Page } from 'data/projects/types';
import { components } from './components';
import { AiOutlineHome } from 'react-icons/ai';
import { MdTimeline } from 'react-icons/md';

const page_names = [
  { name: 'Home', icon: AiOutlineHome },
  { name: 'Projects', icon: MdTimeline }
];

export const pages_list = () => {
  let pages: Page[] = [];
  page_names.map((p) => {
    const id = p.name.toLowerCase().replace(/ /g, '-');
    pages.push({
      name: p.name,
      id: id,
      icon: p.icon,
      components: components.filter((c) => c.page_id === id)
    });
  });
  return pages;
};
