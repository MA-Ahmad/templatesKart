import { Fragment, ReactNode } from 'react';
import {
  Container,
  Flex,
  Stack,
  SlideFade,
  Tooltip,
  ScaleFade,
  Icon,
  useDisclosure
} from '@chakra-ui/react';
import Footer from 'components/shared/footer';
import TopNav from 'components/shared/top-nav';
import { Sidebar } from './sidebar';
import { FaChevronLeft } from 'react-icons/fa';
import { useLinkColor } from 'components/theme';

interface ComponentLayoutProps {
  children: ReactNode;
}

function ComponentLayout({ children }: ComponentLayoutProps) {
  const { isOpen, onToggle } = useDisclosure();
  const linkColor = useLinkColor();

  return (
    <Fragment>
      <TopNav />
      <Container maxW="1280px" mt={28} flex="1 0 auto" py={8}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 0, lg: isOpen ? 0 : 8 }}
          pos="relative"
        >
          <Tooltip label={`${isOpen ? 'Show' : 'Hide'} sidebar`}>
            <Stack
              right="0"
              p={3}
              pos="absolute"
              boxShadow="lg"
              alignItems="center"
              bg={linkColor}
              color="white"
              cursor="pointer"
              onClick={onToggle}
              rounded="md"
              opacity="0.5"
              display={{ base: 'none', lg: 'flex' }}
              _hover={{ opacity: 1 }}
            >
              <Icon
                as={FaChevronLeft}
                h={4}
                w={4}
                transition="all .25s ease-in-out"
                transform={isOpen ? 'rotate(180deg)' : ''}
              />
            </Stack>
          </Tooltip>
          <ScaleFade initialScale={0.9} in={!isOpen}>
            <Sidebar display={{ base: 'none', lg: isOpen ? 'none' : 'block' }} />
          </ScaleFade>
          <Flex direction="column" w="full" maxW={{ lg: '100%' }}>
            <SlideFade in={true}>{children}</SlideFade>
          </Flex>
        </Stack>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default ComponentLayout;
