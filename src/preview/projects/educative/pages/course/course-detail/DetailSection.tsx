import React, { Fragment } from 'react';
import {
  chakra,
  Text,
  Box,
  Image,
  Button,
  HStack,
  Stack,
  Flex,
  Icon,
  Avatar,
  Divider,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import Badge from './Badge';
import VerticalDivider from './VerticalDivider';
// Here we have used react-icons package for the icons
import { BsClock, BsBarChartLine } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';
import { FaPlay, FaStar } from 'react-icons/fa';

const DetailSection = ({ course }) => {
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Fragment>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={10}
        justifyContent="space-between"
        mb={10}
        w="100%"
      >
        {/* Left Panel */}
        <Stack spacing={5} mt={5} w={{ base: '100%', md: '60%' }}>
          <chakra.h1 fontSize="3xl" fontWeight="bold">
            {course.name}
          </chakra.h1>
          <Text fontWeight="medium" color={textColor} noOfLines={2}>
            {course.description}
          </Text>
          <Stack spacing="2" direction="row" alignItems="center">
            <Avatar src="" size="sm" />

            <Text fontWeight="medium" color={textColor}>
              Trainer Name
            </Text>
          </Stack>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            alignItems={{ base: 'flex-start', sm: 'center' }}
          >
            <HStack>
              <Icon as={FaStar} color="yellow.400" />
              <Text fontSize="sm" color={textColor}>
                4.4 (12 Reviews)
              </Text>
            </HStack>
            <VerticalDivider height="15px" display={{ base: 'none', sm: 'block' }} />
            <Text fontSize="sm" color={textColor}>
              100 Enrollments
            </Text>
          </Stack>
          <Divider />
          <Flex direction="row" mt={2} flexWrap="wrap">
            <Badge icon={MdLanguage} data="English" size="md" />
            <Badge icon={BsBarChartLine} data="Intermediate" size="md" />
            <Badge icon={BsClock} data="01H:30M" size="md" />
            <Badge icon={BsClock} data="TAG" size="md" />
            <Badge icon={BsClock} data="TAG" size="md" />
          </Flex>
        </Stack>

        {/* Right Panel */}
        <Stack spacing={2} w={{ base: '100%', md: '40%' }}>
          <Text
            fontWeight="medium"
            fontSize="sm"
            color={textColor}
            noOfLines={2}
            textAlign="center"
          >
            You are enrolled on 29-May-2022 this will expire on 28-Jun-2022 click below to resume
            learning.
          </Text>
          <Button
            w={{ base: '100%', sm: 'auto' }}
            h={12}
            px={6}
            size="lg"
            rounded="md"
            mb={{ base: 2, sm: 0 }}
            zIndex={5}
            lineHeight={1}
            colorScheme="teal"
          >
            Enroll Now (Free)
          </Button>
          <Box
            position="relative"
            height="200px"
            rounded="2xl"
            boxShadow="2xl"
            width="full"
            overflow="hidden"
            _after={{
              content: '""',
              bg: 'black',
              filter: 'blur(5px)',
              position: 'absolute',
              w: '100%',
              bottom: '0',
              height: '70',
              borderRadius: '5px'
            }}
          >
            <IconButton
              aria-label="Play Button"
              colorScheme="teal"
              icon={<FaPlay />}
              rounded="full"
              size="lg"
              color="white"
              position="absolute"
              left="50%"
              top="50%"
              _hover={{ shadow: 'md' }}
              transform="translateX(-50%) translateY(-50%)"
            />
            <Image
              alt="Hero Image"
              fit="cover"
              align="center"
              w="100%"
              h="100%"
              src={'https://die54k.fra1.a.restack.io/assets/d05a08aa-f0ec-40a2-8ebe-c4d49a779a05'}
            />
            <Text
              fontSize={{ base: 'xs', md: 'sm', lg: 'lg' }}
              position="absolute"
              left="50%"
              bottom={{ base: '5%', sm: '2%' }}
              zIndex={55}
              transform="translateX(-46%) translateY(-50%)"
              color="white"
            >
              Preview the Course
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Fragment>
  );
};

export default DetailSection;
