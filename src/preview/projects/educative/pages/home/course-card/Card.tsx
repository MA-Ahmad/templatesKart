import * as React from 'react';
import {
  Box,
  Image,
  Link,
  Icon,
  Flex,
  Stack,
  Text,
  Avatar,
  Button,
  HStack,
  Skeleton,
  AspectRatio,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaStar } from 'react-icons/fa';
import { BsClock, BsBarChartLine } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';

const Card = (props) => {
  const { course, rootProps } = props;
  const { name, imageUrl } = course;
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Stack
      spacing={3}
      {...rootProps}
      w={{ base: 'auto', md: '17rem' }}
      h={{ base: 'auto', md: '21.5rem' }}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 2}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: 'md',
              md: 'xl'
            })}
          />
        </AspectRatio>
        <Box position="absolute" top="3" left="3" p={1.5} bg="yellow.400" rounded="md">
          <Text fontSize="xs" lineHeight={1}>
            Free
          </Text>
        </Box>
      </Box>

      {/* Course name and Price  */}
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" height="2.6rem">
          <Text fontWeight="medium" fontSize="sm" color={textColor} noOfLines={2}>
            {name}
          </Text>
        </Stack>
        <Stack spacing="2" direction="row" alignItems="center">
          <Avatar src="" size="sm" />

          <Text fontWeight="medium" color={textColor}>
            Trainer Name
          </Text>
        </Stack>

        {/* Star (total  Reviews) | Total enrollments */}
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

        {/*  Badges */}
        <Flex direction="row" mt={0} flexWrap="wrap">
          <Badge icon={MdLanguage} data="English" size="sm" />
          <Badge icon={BsBarChartLine} data="Intermediate" size="sm" />
          <Badge icon={BsClock} data="01H:30M" size="sm" />
        </Flex>
      </Stack>

      <Button as={Link} rounded="md" size="md" colorScheme="teal" variant="solid">
        Start Learning...
      </Button>
    </Stack>
  );
};

const Badge = (props) => {
  const getValues = (size) => {
    return size === 'md'
      ? { padding: 1.5, boxSize: 5, fontSize: 'sm' }
      : { padding: 1, boxSize: 3, fontSize: 'xs' };
  };

  return (
    <HStack
      p={getValues(props.size).padding}
      bg={useColorModeValue('gray.200', 'gray.700')}
      color={useColorModeValue('black', 'white')}
      rounded="md"
      spacing={1}
      m="2px"
      alignItems="center"
    >
      {props.icon && (
        <Icon as={props.icon} w={getValues(props.size).boxSize} h={getValues(props.size).boxSize} />
      )}
      <Text fontSize={getValues(props.size).fontSize} lineHeight={1}>
        {props.data}
      </Text>
    </HStack>
  );
};

const VerticalDivider = (props) => {
  return (
    <Box
      borderLeft="1px solid"
      borderColor={useColorModeValue('gray.400', 'gray.600')}
      mx={5}
      height={props.height || '20px'}
      {...props}
    ></Box>
  );
};
export default Card;
