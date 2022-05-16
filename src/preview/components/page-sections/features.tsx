import { Container, Box, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW={'5xl'} py={8} px={{ base: 5, md: 10 }}>
      <Box
        maxW="64rem"
        marginX="auto"
        py={{ base: '3rem', md: '4rem' }}
        px={{ base: '1rem', md: '0' }}
      >
        <Heading
          as="h3"
          fontSize="1.5rem"
          fontWeight="bold"
          textAlign="left"
          mb={{ base: '4', md: '2' }}
          pb={4}
          borderBottom="1px solid"
          borderColor="gray.300"
        >
          Traveling with AirBnb
        </Heading>
        <Flex
          as="section"
          alignItems="start"
          justify="between"
          flexDirection={{ base: 'column', md: 'row' }}
          my={{ base: '1.5rem', md: '2.5rem' }}
          borderBottom="1px solid"
          borderColor="gray.300"
          pb={8}
        >
          {featuresList.map((feature) => {
            return (
              <Box
                key={feature.id}
                w={{ base: '100%', md: 1 / 3 }}
                px={{ md: '0.5rem' }}
                mb={{ base: '6', md: '0' }}
              >
                {feature.icon}
                <Text textAlign="left" fontWeight="700" mt={3} mb={1}>
                  {feature.title}
                </Text>
                <Text
                  color={useColorModeValue('gray.700', 'gray.400')}
                  fontSize="0.875rem"
                  fontWeight="300"
                  textAlign="left"
                  mt={3}
                  mb={1}
                >
                  {feature.desc}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Container>
  );
}

export const featuresList = [
  {
    id: 1,
    title: '24/7 customer support',
    desc: `Day or night, we’re here for you. Talk to our support team from anywhere in the world,
    any hour of day.`,
    icon: (
      <svg
        style={{ width: '2rem', height: '2rem' }}
        viewBox="0 0 24 24"
        fill="#60B6B5"
        fillOpacity="0"
        stroke="#60B6B5"
        strokeWidth="1"
        focusable="false"
        aria-hidden="true"
        role="presentation"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Global hospitality standards',
    desc: `Guests review their hosts after each stay. All hosts must maintain a minimum rating
    and our hospitality standards to be on Airbnb.`,
    icon: (
      <svg
        style={{ width: '2rem', height: '2rem' }}
        viewBox="0 0 24 24"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        fill="#60B6B5"
      >
        <path
          d="m23.57 11.4-1.75-1.76-3.85-3.87-1.78-1.79-2.7-2.71-.82-.83-.22-.23-.06-.06c-.22-.22-.53-.22-.73-.02l-1.75 1.76-3.85 3.87-3.85 3.87-1.75 1.76a1.49 1.49 0 0 0 -.44 1.05v.01c0 .38.15.77.44 1.06l.55.55a1.49 1.49 0 0 0 2.01.08v8.4c0 .81.68 1.45 1.5 1.45h15c .82 0 1.5-.65 1.5-1.45v-8.4c.59.49 1.45.47 2.01-.08l.55-.55c.29-.29.44-.68.44-1.06v-.01c0-.38-.14-.77-.44-1.06zm-3.57 11.16c0 .24-.22.45-.5.45h-15c-.28 0-.5-.21-.5-.45v-9.36l8-7.99 8 7.99zm2.85-9.74-.55.55c-.2.2-.52.2-.71.01l-9.24-9.22a.5.5 0 0 0 -.71 0l-9.24 9.22a.5.5 0 0 1 -.71-.01l-.55-.55a.5.5 0 0 1 -.01-.71l1.75-1.76 3.85-3.87 3.85-3.87 1.4-1.4.77.77 2.7 2.71 1.78 1.79 3.85 3.87 1.75 1.76a.51.51 0 0 1 -.01.71z"
          fillRule="evenodd"
        ></path>
      </svg>
    )
  },
  {
    id: 3,
    title: ' 5-star hosts',
    desc: `From fresh-pressed sheets to tips on where to get the best brunch, our hosts are full
    of local hospitality.`,
    icon: (
      <svg
        style={{ width: '2rem', height: '2rem' }}
        viewBox="0 0 24 24"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        fill="#60B6B5"
      >
        <path
          d="m15.37 13.54-.01.01a.53.53 0 0 0 .01-.01m-.37 9.46h-11.5c-.28 0-.9-.22-1.38-.58-.71-.52-1.12-1.31-1.12-2.42 0-.04 0-.07.01-.11.09-1.1 1.59-2.44 4.02-3.79a33.14 33.14 0 0 1 2.9-1.42 35.57 35.57 0 0 1 1.31-.54c.63-.26.71-.95.18-1.35a4.55 4.55 0 0 1 -.38-.31 7.1 7.1 0 0 1 -.84-.9c-.73-.92-1.17-1.96-1.2-3.09v-2.99c.07-2.36 2.38-4.5 5.04-4.5 2.67 0 4.96 2.14 4.96 4.5v3c0 1.13-.43 2.17-1.15 3.11a7.35 7.35 0 0 1 -1.09 1.13l-.08.07c-.02.02-.02.02-.05.05s-.03.03-.09.14c-.05.47-.05.47.46.7a.49.49 0 0 0 .36-.15l.06-.05a8.32 8.32 0 0 0 1.23-1.28c.84-1.1 1.35-2.35 1.35-3.72v-3c0-2.92-2.75-5.5-5.96-5.5-3.2 0-5.96 2.56-6.04 5.49v3.01c.03 1.38.56 2.62 1.42 3.71.31.39.63.73.96 1.03.06.05.1.08.15.12a34.28 34.28 0 0 0 -3.98 1.87c-2.73 1.51-4.41 3.02-4.54 4.58a2.41 2.41 0 0 0 -.01.19c0 2.55 1.91 3.99 3.5 4h11.5a.5.5 0 1 0 0-1m7.67-4.22c-.36.74-.97 1.55-1.78 2.38a20.33 20.33 0 0 1 -1.89 1.71 19.94 19.94 0 0 1 -1.89-1.71c-.81-.83-1.42-1.64-1.78-2.38-.22-.45-.33-.86-.33-1.23 0-.99.61-1.56 1.43-1.56.7 0 1.55.53 2.18 1.31a.5.5 0 0 0 .78 0c .63-.78 1.48-1.31 2.18-1.31.82 0 1.43.57 1.43 1.56 0 .36-.11.77-.33 1.23m-1.1-3.78c-.89 0-1.82.5-2.57 1.25-.75-.76-1.68-1.25-2.57-1.25-1.36 0-2.43 1.01-2.43 2.56 0 .53.15 1.08.43 1.66.41.85 1.09 1.74 1.96 2.64a21.09 21.09 0 0 0 2.31 2.05.5.5 0 0 0 .6 0 20.91 20.91 0 0 0 2.31-2.05c.87-.9 1.55-1.79 1.96-2.64.28-.58.43-1.13.43-1.66 0-1.55-1.07-2.56-2.43-2.56"
          fillRule="evenodd"
        ></path>
      </svg>
    )
  }
];
