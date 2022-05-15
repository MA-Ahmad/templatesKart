import * as React from 'react';
import { useMediaQuery, Container } from '@chakra-ui/react';
import RepositoryCard from './repo-card';
import repositoriesList from './repos-list';
// Here we have used react-stack-grid package for the cards
import StackGrid from 'react-stack-grid';

const LiveData = () => {
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
  const [isLargerThan982] = useMediaQuery('(min-width: 982px)');

  let columnWidth = 390;
  if (isLargerThan982) {
    columnWidth = 390;
  } else {
    if (isLargerThan720) {
      columnWidth = 300;
    }
  }

  return (
    <Container maxW="7xl" p={{ base: 5, md: 12 }}>
      <StackGrid columnWidth={!isLargerThan982 && !isLargerThan720 ? '100%' : columnWidth}>
        {repositoriesList()?.map((repo, index) => (
          <RepositoryCard
            key={index}
            title={repo.title}
            description={repo.description}
            language={repo.language}
            url={repo.url}
            stargazers_count={repo.stargazers_count}
            forks_count={repo.forks_count}
          />
        ))}
      </StackGrid>
    </Container>
  );
};

export default LiveData;
