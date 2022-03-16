import {
  Stack,
  Box,
  Popover,
  PopoverTrigger,
  Link,
  useColorModeValue,
  PopoverContent,
  Text,
  Icon,
  HStack,
  useDisclosure
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

type MenuData = {
  id: number;
  label: string;
  subLabel: string;
  href: string;
};

const menuData: MenuData[] = [
  {
    id: 1,
    label: 'Projects',
    subLabel: 'Get component code from projects kart',
    href: '/'
  },
  { id: 2, label: 'Components', subLabel: 'Responsive components kart', href: '/components' }
];

const DropDownMenu = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Stack direction={'row'} spacing={4} d={{ base: 'none', sm: 'block' }}>
      <Popover trigger={'hover'} placement={'bottom-start'} onOpen={onOpen} onClose={onClose}>
        <PopoverTrigger>
          <HStack alignItems="center" cursor="pointer">
            <NextLink href={'/components'} passHref={true}>
              <Link
                p={2}
                fontSize={'md'}
                fontWeight={'bold'}
                color={useColorModeValue('gray.600', 'gray.200')}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('gray.800', 'white')
                }}
              >
                Components
              </Link>
            </NextLink>
            <Icon as={isOpen ? BsChevronUp : BsChevronDown} h={4} w={4} />
          </HStack>
        </PopoverTrigger>

        <PopoverContent
          border={0}
          boxShadow={useColorModeValue(
            '2px 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.9)'
          )}
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          rounded={'lg'}
          minW={'xs'}
        >
          <Stack>
            {menuData.map((data) => (
              <DropDownItem key={data.id} {...data} />
            ))}
          </Stack>
        </PopoverContent>
      </Popover>
    </Stack>
  );
};

const DropDownItem = ({ label, href, subLabel }: MenuData) => {
  return (
    <NextLink href={href!} passHref>
      <Link
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('gray.100', 'gray.900') }}
      >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text fontWeight={500}>{label}</Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
        </Stack>
      </Link>
    </NextLink>
  );
};

export default DropDownMenu;
