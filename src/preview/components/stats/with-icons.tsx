import React from 'react';
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Flex,
  Link,
  Icon,
  SimpleGrid,
  Container,
  Stack
} from '@chakra-ui/react';
// Here we have used framer-motion package for animations
import { motion } from 'framer-motion';
// Here we have used react-icons package for the icons
import { HiOutlineMail } from 'react-icons/hi';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';
import { AiOutlineLike, AiOutlineEye } from 'react-icons/ai';

interface StatData {
  id: number;
  label: string;
  score: number;
  icon: any;
  percentage: string;
}

const statData: StatData[] = [
  {
    id: 1,
    label: 'Total post reactions',
    score: 1730,
    icon: AiOutlineLike,
    percentage: '10%'
  },
  {
    id: 2,
    label: 'Total post views',
    score: 3245,
    icon: AiOutlineEye,
    percentage: '30%'
  },
  {
    id: 3,
    label: 'Total messages',
    score: 100,
    icon: HiOutlineMail,
    percentage: '30%'
  }
];

const StatsWithIcons = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5} mt={6} mb={4}>
        {statData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

const Card = ({ data }: { data: StatData }) => {
  return (
    <motion.div whileHover={{ translateY: -5 }}>
      <Stack
        direction="column"
        rounded="md"
        boxShadow={useColorModeValue(
          '0 4px 6px rgba(160, 174, 192, 0.6)',
          '2px 4px 6px rgba(9, 17, 28, 0.9)'
        )}
        w="100%"
        textAlign="left"
        align="start"
        spacing={0}
        role="group"
        overflow="hidden"
      >
        <HStack py={6} px={5} spacing={4} bg={useColorModeValue('gray.100', 'gray.800')} w="100%">
          <Flex
            justifyContent="center"
            alignItems="center"
            rounded="lg"
            p={2}
            bg="green.400"
            position="relative"
            w={12}
            h={12}
            overflow="hidden"
            lineHeight={0}
            boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
          >
            <Icon as={data.icon} w={6} h={6} color="white" />
          </Flex>
          <VStack spacing={0} align="start" maxW="lg" h="100%">
            <Text as="h3" fontSize="md" noOfLines={2} color="gray.400">
              {data.label}
            </Text>
            <HStack spacing={2}>
              <Text as="h2" fontSize="lg" fontWeight="extrabold">
                {data.score}
              </Text>
              <Flex>
                {Number(data.score) > 100 ? (
                  <Icon as={BsArrowUpShort} w={6} h={6} color="green.400" />
                ) : (
                  <Icon as={BsArrowDownShort} w={6} h={6} color="red.400" />
                )}
                <Text as="h2" fontSize="md">
                  {data.percentage}
                </Text>
              </Flex>
            </HStack>
          </VStack>
        </HStack>

        <Flex
          visibility="hidden"
          opacity={0}
          height={0}
          alignItems="center"
          px={5}
          _groupHover={{ visibility: 'visible', opacity: 1, height: '40px' }}
          transition="opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, height 0.3s ease-in-out"
        >
          <Link fontSize="md">View All</Link>
        </Flex>
      </Stack>
    </motion.div>
  );
};

export default StatsWithIcons;
