import * as React from 'react';
import {
  Box,
  Text,
  Heading,
  Flex,
  Avatar,
  Link,
  VStack,
  IconButton,
  Divider,
  Fade
} from '@chakra-ui/react';
import { siteConfig } from './site-config';
// Here we have used framer-motion package for animations
import { motion } from 'framer-motion';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const MainScreen = () => {
  return (
    <VStack spacing={5}>
      <motion.div whileHover={{ y: -5, scale: 1.1 }}>
        <Box boxShadow="xl" _hover={{ boxShadow: 'lg' }} borderRadius="full">
          <Avatar
            _groupHover={{ width: '5rem', height: '5rem' }}
            size="xl"
            src="https://avatars2.githubusercontent.com/u/37842853?v=4"
          />
        </Box>
      </motion.div>
      <Heading fontSize="xl" fontFamily="body" textTransform="capitalize" noOfLines={2}>
        Muhammad Ahmad
      </Heading>
      <Text
        color="gray.500"
        fontSize="lg"
        noOfLines={{ base: 3, md: 4 }}
        _groupHover={{ display: 'none' }}
        display="block"
      >
        Full-Stack Developer
      </Text>
      <Fade in>
        <Text
          color="gray.500"
          fontSize="lg"
          noOfLines={{ base: 3, md: 4 }}
          _groupHover={{ display: 'block' }}
          display="none"
        >
          I'm a Full Stack Developer and an open source lover from Pakistan 🇵🇰
        </Text>
      </Fade>
      <Divider />
      <Flex alignItems="center" justifyContent="center" w="100%">
        <Box textAlign="center">
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              colorScheme={sc.type}
              icon={sc.icon}
              rounded="full"
              {...iconProps}
            />
          ))}
        </Box>
      </Flex>
    </VStack>
  );
};

export default MainScreen;
