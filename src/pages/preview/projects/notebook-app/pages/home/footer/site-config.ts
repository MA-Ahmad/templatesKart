const baseUrl = 'https://github.com/MA-Ahmad/notebook';

const siteConfig = {
  copyright: `Copyright © ${ new Date().getFullYear() } Muhammad Ahmad. All Rights Reserved.`,
  author: {
    name: 'Muhammad Ahmad',
    github: 'https://github.com/MA-Ahmad',
    twitter: 'https://twitter.com/muhammad_ahmaad',
    linkedin: 'https://linkedin.com/in/muhammad-ahmad20',
    quora: 'https://www.quora.com/profile/Muhammad-Ahmad-66',
    dev: 'https://dev.to/m_ahmad',
    email: 'muhammad.ahmad8043@gmail.com'
  },
  repo: {
    url: baseUrl,
    issuesUrl: `${ baseUrl }/issues/new`,
  }
};

export default siteConfig;
