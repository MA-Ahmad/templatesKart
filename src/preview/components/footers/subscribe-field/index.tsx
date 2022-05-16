import * as React from 'react';
import {
  Container,
  Box,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody
} from '@chakra-ui/react';
import { siteConfig } from './site-config';
import FooterSignup from './signup';
import { ExternalFooterLink, InternalFooterLink, ExternalSocialLink } from './links';
// Here we have used react-icons package for the icons
import { FaGithub, FaDev, FaLinkedin, FaQuora, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <SimpleGrid
        flexDirection="column-reverse"
        gridTemplateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr']}
        borderTopWidth={2}
        mt="30px"
        borderTopColor="gray.900"
        pt="20px"
      >
        <Box d={['block', 'block', 'none', 'none']} mb="30px">
          <FooterSignup />
        </Box>
        <Box>
          <SimpleGrid columns={[1, 1, 2, 2]}>
            <Stack mb={['10px', '10px', 0, 0]}>
              <Text as="span">
                <ExternalFooterLink href="#" text="Contact us" />
              </Text>
              <Text as="span">
                <ExternalFooterLink href="#" text="Contribute" />
              </Text>
              <Text as="span">
                <InternalFooterLink href="#" text="Open source projects" />
              </Text>
            </Stack>
            <Stack>
              <Text as="span">
                <Popover placement="top">
                  <PopoverTrigger>
                    <Text
                      as="span"
                      _focus={{ outline: 'none', boxShadow: 'none' }}
                      fontWeight={500}
                      color="gray.500"
                      cursor="pointer"
                      _hover={{ color: 'gray.600', textDecoration: 'none' }}
                    >
                      Social Accounts
                    </Text>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody>
                        <Stack
                          as="footer"
                          isInline
                          spacing={[1, 2]}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <ExternalSocialLink
                            href={siteConfig.author.github}
                            icon={<FaGithub />}
                            type="gray"
                            label="Github Account"
                          />
                          <ExternalSocialLink
                            href={siteConfig.author.dev}
                            icon={<FaDev />}
                            type="gray"
                            label="Dev Account"
                          />
                          <ExternalSocialLink
                            href={siteConfig.author.linkedin}
                            icon={<FaLinkedin />}
                            type="linkedin"
                            label="LinkedIn Account"
                          />
                          <ExternalSocialLink
                            href={siteConfig.author.twitter}
                            icon={<FaTwitter />}
                            type="twitter"
                            label="Twitter Account"
                          />
                          <ExternalSocialLink
                            href={siteConfig.author.quora}
                            icon={<FaQuora />}
                            type="red"
                            label="Quora Account"
                          />
                        </Stack>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
              </Text>

              <Text as="span">
                <ExternalFooterLink href="#" text="Sponsor" />
              </Text>
              <Text as="span">
                <ExternalFooterLink href="#" isExternal={false} text="FAQs" />
              </Text>
            </Stack>
          </SimpleGrid>
          <Text mt="20px" color="gray.500">
            Made with 🧡 by{' '}
            <ChakraLink
              _focus={{ boxShadow: 'none', outline: 'none' }}
              target="_blank"
              href={siteConfig.author.github}
              fontWeight={600}
              color="gray.400"
              bgClip="text"
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              _hover={{
                bgGradient: 'linear(to-r, red.500, yellow.500)'
              }}
            >
              Muhammad Ahmad
            </ChakraLink>{' '}
          </Text>
        </Box>
        <Box d={['none', 'none', 'block', 'block']}>
          <FooterSignup />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Footer;
