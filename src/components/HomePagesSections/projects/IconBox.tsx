import { ReactNode } from 'react';
import { Link, useColorModeValue, Flex } from '@chakra-ui/react';

type IconBoxProps = {
  link: string;
  icon: ReactNode;
};

const IconBox = ({ link, icon }: IconBoxProps) => {
  return (
    <Link fontWeight="semibold" href={link} isExternal>
      <Flex
        as="button"
        p={'0.4rem'}
        rounded="lg"
        cursor="pointer"
        _hover={{ bg: useColorModeValue('gray.300', 'gray.800') }}
        bg={useColorModeValue('gray.200', 'gray.600')}
        justifyContent="center"
      >
        {icon}
      </Flex>
    </Link>
  );
};

export default IconBox;
