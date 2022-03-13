import { Page } from 'data/projects/types';
import { components } from './components';
import { AiOutlineHome, AiTwotoneThunderbolt } from 'react-icons/ai';
import { FaUserCircle, FaBlogger } from 'react-icons/fa';
import { CgArrowsExchange } from 'react-icons/cg';
import { BsCheckCircle } from 'react-icons/bs';
import { MdTimeline } from 'react-icons/md';
import { BsBook } from 'react-icons/bs';

const page_names = [
  { name: 'Home', icon: AiOutlineHome },
  { name: 'About', icon: FaUserCircle },
  { name: 'Blog', icon: FaBlogger },
  { name: 'Projects', icon: MdTimeline },
  { name: 'Tech Stack', icon: AiTwotoneThunderbolt },
  { name: 'Open Source', icon: BsBook },
  { name: 'Achievements', icon: BsCheckCircle },
  { name: 'Changelog', icon: CgArrowsExchange }
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
