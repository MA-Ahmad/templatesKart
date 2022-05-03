import * as React from 'react';
import { SimpleGrid, Container } from '@chakra-ui/react';
import RepositoryCard from './card';
import { motion } from 'framer-motion';
import repositoriesList from './repos-list';

const OfflineData = () => {
  return (
    <Container maxW="7xl" p="5">
      <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={12}>
        {repositoriesList().map((repo, index) => (
          <motion.div whileHover={{ y: -5 }} key={index}>
            <RepositoryCard
              title={repo.title}
              description={repo.description}
              cover={repo.cover}
              techStack={repo.techStack}
              url={repo.url}
              stargazers_count={repo.stargazers_count}
            />
          </motion.div>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default OfflineData;
