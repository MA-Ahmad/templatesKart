import { Box, Heading, Text, Flex, Icon, HStack } from '@chakra-ui/react';
import { useLinkColor } from 'components/theme';
import UnderlinedText from 'components/shared/underlined-text';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { Key } from 'react';

const descriptionList: {
  Projects: string[];
  Components: string[];
} = {
  Projects: [
    'Beautiful and responsive React components to build your application',
    'Copy code from live websites'
  ],
  Components: [
    'Beautiful and responsive React components to build your application',
    'Copy code from live websites'
  ]
};

const HeadingSection = ({ title }: { title: string }) => {
  const linkColor = useLinkColor();

  return (
    <Box textAlign="center">
      <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb={4}>
        <Flex position="relative" justify="center">
          <Icon
            position="relative"
            as={GoChevronLeft}
            transform={'rotate(-15deg)'}
            w={7}
            h={7}
            color={linkColor}
            top={1}
          />
          <UnderlinedText color={linkColor}>
            <HStack spacing={2}>
              <Text textShadow="1px 2px #179c40">{title}</Text>
              <Text textShadow="1px 2px #179c40">Kart</Text>
            </HStack>
          </UnderlinedText>

          <Icon
            position="relative"
            as={GoChevronRight}
            transform={'rotate(-15deg)'}
            w={7}
            h={7}
            color={linkColor}
            bottom={1}
          />
        </Flex>
      </Heading>
      {descriptionList[title].map((text: string, index: Key) => (
        <Text key={index} fontSize="lg" fontWeight="semibold" mt={2}>
          {text}
        </Text>
      ))}
    </Box>
  );
};

export default HeadingSection;
