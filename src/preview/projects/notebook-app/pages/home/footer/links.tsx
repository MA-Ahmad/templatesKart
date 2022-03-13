import * as React from 'react';
import { Link as ChakraLink, IconButton } from '@chakra-ui/react';

type ExternalFooterLinkProps = {
  href: string;
  text: string;
  isExternal?: boolean;
};

export const ExternalFooterLink = (props: ExternalFooterLinkProps) => {
  const { href, text, isExternal = true } = props;

  return (
    <ChakraLink
      _focus={{ outline: 'none', boxShadow: 'none' }}
      href={href}
      target={isExternal ? '_blank' : '_self'}
      fontWeight={500}
      color="gray.500"
      _hover={{ color: 'gray.600', textDecoration: 'none' }}
    >
      {text}
    </ChakraLink>
  );
};

type InternalFooterLinkProps = {
  href: string;
  text: string;
};

export const InternalFooterLink = (props: InternalFooterLinkProps) => {
  const { href, text } = props;

  return (
    <a>
      <ChakraLink
        _focus={{ outline: 'none', boxShadow: 'none' }}
        as="span"
        fontWeight={500}
        color="gray.500"
        _hover={{ color: 'gray.600', textDecoration: 'none' }}
      >
        {text}
      </ChakraLink>
    </a>
  );
};

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

type ExternalSocialLinkProps = {
  href: string;
  label: string;
  isExternal?: boolean;
  type: string;
  icon: any;
};

export const ExternalSocialLink = (props: ExternalSocialLinkProps) => {
  const { href, label, icon, type, isExternal = true } = props;

  return (
    <IconButton
      as={ChakraLink}
      href={href}
      target={isExternal ? '_blank' : '_self'}
      aria-label={label}
      icon={icon}
      colorScheme={type}
      {...iconProps}
    />
  );
};
