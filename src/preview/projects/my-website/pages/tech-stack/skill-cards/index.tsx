import * as React from 'react';
import { SimpleGrid, Container } from '@chakra-ui/react';
import skillsList from './data';
import Card from './card';

const SkillCards = () => {
  return (
    <Container p="12">
      <SimpleGrid columns={[1, 1, 2]} spacing={4}>
        {skillsList().map((tool, index) => (
          <Card
            key={index}
            name={tool.name}
            description={tool.description}
            image={tool.image}
            link={tool.link}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default SkillCards;
