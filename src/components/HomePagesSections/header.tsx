import { PropsWithChildren, ReactNode } from 'react';
import { chakra, BoxProps } from '@chakra-ui/react';
import { useLinkColor } from 'components/theme';

interface HeaderProps extends BoxProps {
  children: ReactNode;
}
const Header = ({ children, ...props }: PropsWithChildren<HeaderProps>) => {
  const linkColor = useLinkColor();

  return (
    <chakra.h1
      fontSize={{ base: '4xl', sm: '5xl' }}
      color={linkColor}
      lineHeight={1.2}
      fontWeight="bold"
      w="100%"
      {...props}
    >
      {children}
    </chakra.h1>
  );
};

export default Header;
