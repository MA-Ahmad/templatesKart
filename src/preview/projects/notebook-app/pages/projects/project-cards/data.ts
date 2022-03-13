export default function projectsList() {
  return [
    {
      id: 1,
      title: 'My website',
      desc: 'This is a my personal website built by using Next.js, ChakraUi, Typescript and Dev.to api.',
      technologies: ['Nextjs', 'ChakraUi'],
      stars: 104,
      githubLink: 'https://github.com/MA-Ahmad/myportfolio',
      liveLink: 'https://mahmad.me/',
      coverImage: '/assets/images/projects/my-website.png'
    },
    {
      id: 2,
      title: 'Portfolio2',
      desc: 'Personal portfolio app to show my skills and experience.',
      technologies: ['Nextjs', 'ChakraUi'],
      stars: 69,
      githubLink: 'https://github.com/MA-Ahmad/portfolio',
      liveLink: 'https://mahmad.me/',
      coverImage: '/assets/images/projects/portfolio2.png'
    },
    {
      id: 3,
      title: 'Notebook App',
      desc: 'Create notes for your daily important work.',
      technologies: ['Reactjs', 'ChakraUi'],
      stars: 19,
      githubLink: 'https://github.com/MA-Ahmad/notebook',
      liveLink: '',
      coverImage: '/assets/images/projects/notebook.png'
    },
    {
      id: 4,
      title: 'Blog App',
      desc: 'A Blog App built by using React, ChakraUI and Formik.',
      technologies: ['Reactjs', 'ChakraUi'],
      stars: 15,
      githubLink: 'https://github.com/MA-Ahmad/reactBlog',
      liveLink: 'https://ma-ahmad.github.io/reactBlog',
      coverImage: '/assets/images/projects/blog.png'
    }
  ];
}
