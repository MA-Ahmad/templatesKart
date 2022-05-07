import {
  Stack,
  Box,
  Popover,
  Link,
  Text,
  Icon,
  HStack,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaChevronDown } from 'react-icons/fa';

interface MenuData {
  id: number;
  label: string;
  subLabel: string;
  href: string;
  linkColor?: string;
}

interface MenuDataProps {
  menuData: MenuData[];
}

const DropDownMenu = ({ menuData }: MenuDataProps) => {
  const linkColor = 'cyan.400';
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Stack direction="row" spacing={4} d={{ base: 'none', sm: 'flex' }}>
      <Popover trigger="hover" placement="bottom-start" onOpen={onOpen} onClose={onClose}>
        <PopoverTrigger>
          <HStack alignItems="center" cursor="pointer" role="group">
            <Link
              href="#"
              p={2}
              fontSize={{ sm: 'md', md: 'lg' }}
              fontWeight="bold"
              color={useColorModeValue('gray.600', 'gray.200')}
              _groupHover={{
                color: linkColor
              }}
            >
              Templates
            </Link>
            <Icon
              as={FaChevronDown}
              h={4}
              w={4}
              _groupHover={{
                color: linkColor
              }}
              transition="all .25s ease-in-out"
              transform={isOpen ? 'rotate(180deg)' : ''}
            />
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
          rounded="lg"
          minW="xs"
        >
          <Stack>
            {menuData.map((data) => (
              <DropDownItem key={data.id} linkColor={linkColor} {...data} />
            ))}
          </Stack>
        </PopoverContent>
      </Popover>
    </Stack>
  );
};

const DropDownItem = ({ label, href, subLabel, linkColor }: MenuData) => {
  return (
    <Link
      href={href!}
      display="block"
      p={2}
      rounded="md"
      _hover={{ bg: useColorModeValue('gray.100', 'gray.900'), color: linkColor }}
    >
      <Stack direction="row" align="center">
        <Box>
          <Text fontWeight={500}>{label}</Text>
          <Text fontSize="sm">{subLabel}</Text>
        </Box>
      </Stack>
    </Link>
  );
};

export default DropDownMenu;
