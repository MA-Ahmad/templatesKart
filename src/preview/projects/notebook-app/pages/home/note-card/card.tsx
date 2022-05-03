import * as React from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
  Flex,
  Center,
  Fade,
  Icon,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used framer-motion package for animations
import { motion } from 'framer-motion';
// Here we have used react-icons package for the icons
import { AiOutlineDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';

interface NoteProps {
  id: string;
  title: string;
  body: string;
}

interface Note {
  note: NoteProps;
}

const Card = ({ note }: Note) => {
  const bg = useColorModeValue('white', '#2f3244');

  return (
    <Fade in={true}>
      <motion.div whileHover={{ y: -10 }} layoutId={note.id}>
        <Center py={2} px={2} key={note.id}>
          <Box
            maxH="400px"
            w="100%"
            boxShadow="md"
            rounded="md"
            p={6}
            overflow="hidden"
            cursor="pointer"
            bg={bg}
            role="group"
          >
            <Stack>
              <Flex
                _groupHover={{ justifyContent: 'space-between' }}
                justifyContent="center"
                align="center"
              >
                <Box>
                  <Text
                    color="green.500"
                    textTransform="uppercase"
                    fontWeight={800}
                    fontSize="sm"
                    letterSpacing={1.1}
                  >
                    Note
                  </Text>
                </Box>
                <Box _groupHover={{ display: 'block' }} display="none">
                  <HStack spacing="2">
                    <Icon
                      color="green.500"
                      _hover={{ color: 'green.600' }}
                      _groupHover={{ display: 'block' }}
                      as={BiEdit}
                      w={4}
                      h={4}
                    />
                    <Icon
                      color="green.500"
                      _hover={{ color: '#ca364a' }}
                      _groupHover={{ display: 'block' }}
                      as={AiOutlineDelete}
                      w={4}
                      h={4}
                    />
                  </HStack>
                </Box>
              </Flex>
              <Heading fontSize="xl" fontFamily="body" textTransform="capitalize" noOfLines={2}>
                {note.title}
              </Heading>

              <Text color="gray.500" fontSize="md" noOfLines={{ base: 3, md: 4 }}>
                {note.body}
              </Text>
            </Stack>
          </Box>
        </Center>
      </motion.div>
    </Fade>
  );
};

export default Card;
