import { Box, Heading, Text, Flex, Icon, HStack, useColorModeValue } from '@chakra-ui/react';
import { useLinkColor } from 'components/theme';
import UnderlinedText from 'components/shared/underlined-text';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { Key } from 'react';

const descriptionList: { [key: string]: string[] } = {
  Projects: [
    'Project templates provide an easy solution to getting the look you want for your website without having to mess around with too much code.',
    'Copy code from these live websites'
  ],
  Components: [
    'Beautiful and responsive React components to build your application',
    'Checkout these components'
  ]
};

const HeadingSection = ({ title }: { title: string }) => {
  const linkColor = useLinkColor();

  return (
    <Flex textAlign="center" justifyContent="center" align="center" flexDirection="column">
      <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb={4}>
        <Flex position="relative" justifyContent="center">
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
              <Text textShadow="1px 2px #179c40">
                {title} &nbsp;
                <Box
                  as="span"
                  position="relative"
                  _before={{
                    content: '""',
                    bg: linkColor,
                    position: 'absolute',
                    top: '-0.15rem',
                    right: '-0.15rem',
                    bottom: '-0.15rem',
                    left: '-0.15rem',
                    transform: 'rotate(-4deg)'
                  }}
                >
                  <Box
                    as="span"
                    textShadow="1px 2px #179c40"
                    color={useColorModeValue('white', 'black')}
                    position="relative"
                  >
                    Kart
                  </Box>
                </Box>
              </Text>
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
        <Text
          key={index}
          fontSize={{ base: 'md', sm: 'lg' }}
          fontWeight="semibold"
          mt={2}
          maxW="2xl"
        >
          {text}
        </Text>
      ))}
    </Flex>
  );
};

export default HeadingSection;
