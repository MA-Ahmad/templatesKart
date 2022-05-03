import * as React from 'react';
import { Container, Box, SimpleGrid } from '@chakra-ui/react';
import Card from './card';

const notes = [
  {
    id: '1',
    title: 'Hey 👋',
    body: `I'm dummy note here. Try to update me. Click me to see my remaining part. You can also delete me 😔. But I'll be here again by reopening the app link 😃.`
  },
  {
    id: '2',
    title: 'Notes 2',
    body: `Hey I'm note 2`
  }
];

const NotesList = () => {
  return (
    <Container maxW="7xl" p={10}>
      <Box minH="50vh">
        <SimpleGrid
          columns={[1, 2, 2, 3]}
          mt="40px"
          gridGap="10px"
          position="relative"
          overflow="hidden"
        >
          {notes.map((note) => (
            <Card note={note} key={note.id} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default NotesList;
