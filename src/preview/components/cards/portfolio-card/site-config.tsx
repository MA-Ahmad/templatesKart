import * as React from 'react';
// Here we have used react-icons package for the icons
import { FaGithub, FaDev, FaLinkedin, FaQuora, FaTwitter } from 'react-icons/fa';
export const siteConfig = {
  author: {
    name: 'Muhammad Ahmad',
    accounts: [
      {
        url: 'https://github.com/MA-Ahmad',
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
        url: 'https://www.quora.com/profile/Muhammad-Ahmad-66',
        label: 'Quora Account',
        type: 'red',
        icon: <FaQuora />
      }
    ]
  }
};
