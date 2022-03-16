export default function repositoriesList() {
  return [
    {
      title: 'Portfolio1',
      description: 'Portfolio app to show my skills and experience.',
      cover: '/assets/images/repositories/portfolio.png',
      language: 'Typescript',
      techStack: ['Nextjs', 'react', 'chakraUi'],
      url: 'https://github.com/MA-Ahmad/myPortfolio',
      live: 'https://mahmad.me',
      stargazers_count: 107,
      forks_count: 25
    },
    {
      title: 'Notebook',
      description: 'This is a notebook app which will help you to crate notes for your daily work.',
      cover: '/assets/images/repositories/notebook_app.png',
      language: 'Javascript',
      techStack: ['react', 'typescript'],
      url: 'https://github.com/MA-Ahmad/notebook',
      live: 'https://ma-ahmad.github.io/notebook',
      stargazers_count: 19,
      forks_count: 8
    }
  ];
}
