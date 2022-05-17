import {
  VStack,
  Heading,
  Box,
  Link,
  Container,
  BoxProps,
  Circle,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';
import { FaTools } from 'react-icons/fa';
// Here we have used react-icons package for the icons
import { FiPackage, FiHome, FiBarChart2, FiCheckCircle } from 'react-icons/fi';

const Milestones = () => {
  const linkColor = 'blue.400';
  const linkHoverColor = 'blue.600';

  return (
    <Container maxW="7xl" p={{ base: 2, sm: 10 }}>
      <VStack textAlign="start" align="start" mb={5}>
        <Box zIndex={5}>
          <Heading fontSize="4xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <MilestoneItem icon={FaTools}>
              Learnt{' '}
              <Link
                href="https://www.typescriptlang.org"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                Typescript
              </Link>{' '}
              and{' '}
              <Link
                href="https://nextjs.org"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                Next.js
              </Link>
            </MilestoneItem>
            <MilestoneItem icon={FiPackage}>
              Published 3 posts on my portfolio website{' '}
              <Link
                href="https://mahmad.me/blog"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                Blog
              </Link>
            </MilestoneItem>
            <MilestoneItem icon={FiPackage}>
              Published or contributed to{' '}
              <Link
                href="https://mahmad.me/open-source"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                20+ open-source repositories
              </Link>
            </MilestoneItem>
            <MilestoneItem icon={FiBarChart2}>
              Collected 34k+ posts views and 1.5k+ total reactions on{' '}
              <Link
                href="https://dev.to/m_ahmad"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                Dev.to
              </Link>
            </MilestoneItem>
            <MilestoneItem icon={FiHome} skipTrail>
              Rebuilt my portfolio website with React, ChakraUI and Framer-motion,{' '}
              <Link
                href="https://github.com/MA-Ahmad/myPortfolio"
                color={linkColor}
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                source on Github
              </Link>
              .
            </MilestoneItem>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

interface MilestoneItemProps extends BoxProps {
  icon?: any;
  boxProps?: BoxProps;
  skipTrail?: boolean;
}

const MilestoneItem: React.FC<MilestoneItemProps> = ({
  icon = FiCheckCircle,
  boxProps = {},
  skipTrail = false,
  children,
  ...props
}) => {
  const color = useColorModeValue('gray.700', 'gray.500');
  return (
    <Flex minH={20} {...props}>
      <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
        <Circle
          size={12}
          bg={useColorModeValue('gray.600', 'gray.500')}
          opacity={useColorModeValue(0.07, 0.15)}
        />
        <Box as={icon} size="1.25rem" color={color} pos="absolute" left="0.875rem" top="0.875rem" />
        {!skipTrail && <Box w="1px" flex={1} bg={color} my={1} />}
      </Flex>
      <Box pt={{ base: 1, sm: 3 }} {...boxProps}>
        {children}
      </Box>
    </Flex>
  );
};

export default Milestones;
