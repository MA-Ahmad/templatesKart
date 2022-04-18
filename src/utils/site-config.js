import { FaGithub, FaDev, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `© ${new Date().getFullYear()} Templates Kart. All Rights Reserved.`,
  author: {
    name: 'Muhammad Ahmad',
    accounts: [
      {
        url: 'https://github.com/MA-Ahmad/templateskart',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://twitter.com/muhammad_ahmaad',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />
      },
      {
        url: 'https://dev.to/m_ahmad',
        label: 'Dev Account',
        type: 'gray',
        icon: <FaDev />
      },
      {
        url: 'https://linkedin.com/in/muhammad-ahmad20',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
      {
        url: 'mailto:muhammad.ahmad8043@gmail.com',
        label: 'Mail ahmad',
        type: 'gray',
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
