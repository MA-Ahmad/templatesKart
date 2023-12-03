import React from 'react';
import {
  Flex,
  Text,
  Link,
  Avatar,
  VStack,
  Menu,
  MenuDivider,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue
} from '@chakra-ui/react';

const MenuContainer = () => {
  return (
    <Flex
      w="full"
      h="350px"
      justifyContent={{ base: 'flex-start', sm: 'center' }}
      alignItems="flex-start"
      p={{ base: 5, sm: 10 }}
    >
      <DropDownMenu />
    </Flex>
  );
};

// Ideally, only the DropDownMenu component should be used. The MenuContainer component is used to style the preview.
const DropDownMenu = () => {
  return (
    <Menu isLazy>
      <MenuButton>
        <Avatar
          size="md"
          rounded="full"
          src={'https://avatars2.githubusercontent.com/u/37842853?v=4'}
        />
      </MenuButton>
      <MenuList
        zIndex={5}
        border="2px solid"
        borderColor={useColorModeValue('gray.700', 'gray.100')}
        boxShadow="4px 4px 0"
      >
        <Link href="https://dev.to/m_ahmad" _hover={{ textDecoration: 'none' }} isExternal>
          <MenuItem>
            <VStack justifyContent="start" alignItems="left">
              <Text fontWeight="500">Muhammad Ahmad</Text>
              <Text size="sm" color="gray.500" mt="0 !important">
                @m_ahmad
              </Text>
            </VStack>
          </MenuItem>
        </Link>
        <MenuDivider />
        <MenuItem>
          <Text fontWeight="500">Dashboard</Text>
        </MenuItem>
        <MenuItem>
          <Text fontWeight="500">Create Post</Text>
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <Text fontWeight="500">Sign Out</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuContainer;
