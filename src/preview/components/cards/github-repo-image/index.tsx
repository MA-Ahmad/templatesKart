import * as React from 'react';
import { SimpleGrid, Container } from '@chakra-ui/react';
import RepositoryCard from './card';
import { MotionBox } from './motion';
import repositoriesList from './repos-list';

const OfflineData = () => {
  return (
    <Container maxW={'7xl'} p="5" mx="auto">
      <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
        {repositoriesList().map((repo, index) => (
          <MotionBox whileHover={{ y: -5 }} key={index}>
            <RepositoryCard
              title={repo.title}
              description={repo.description}
              cover={repo.cover}
              techStack={repo.techStack}
              url={repo.url}
              stargazers_count={repo.stargazers_count}
            />
          </MotionBox>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default OfflineData;
