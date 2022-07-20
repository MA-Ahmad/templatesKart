import React, { useRef } from 'react';
import {
  Flex,
  Box,
  Text,
  Icon,
  Tooltip,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue
} from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';
import PresetColors from './PresetColors';
import { useLinkColor } from 'components/theme';
import { useLocalSetting } from '../theme/hooks/useLocalSetting';
import { AiOutlineSetting, AiOutlineClose } from 'react-icons/ai';
import { BiDirections } from 'react-icons/bi';

const SettingsDrawerWrapper = () => {
  const linkColor = useLinkColor();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isRightDirection, setIsRightDirection] = useLocalSetting('isRightDirection', true);

  const handleDirection = () => {
    setIsRightDirection(!isRightDirection);
  };

  return (
    <>
      <Tooltip
        label="Settings"
        placement="left"
        isDisabled={isOpen}
        aria-label="Open settings drawer"
      >
        <Box
          pos="fixed"
          transition="all 0.1s ease-in-out"
          bottom="5"
          right={isRightDirection ? '5' : 'inherit'}
          left={isRightDirection ? 'inherit' : '10'}
          zIndex={5555}
        >
          <Flex
            rounded="full"
            bg={'var(--colors-accent-200)'}
            p="0.1rem"
            boxShadow={useColorModeValue(
              '2px 6px 8px 2px var(--colors-accent-100)',
              '2px 6px 8px rgba(9, 17, 28, 0.9)'
            )}
            cursor="pointer"
            onClick={isOpen ? onClose : onOpen}
          >
            <Flex
              rounded="full"
              bg={useColorModeValue('gray.100', 'gray.700')}
              p={3}
              alignItems="center"
              _hover={{ bg: useColorModeValue('gray.100', 'gray.600') }}
            >
              <Icon
                as={isOpen ? AiOutlineClose : AiOutlineSetting}
                color={isOpen ? linkColor : useColorModeValue('gray.900', 'white')}
                w={5}
                h={5}
              />
            </Flex>
          </Flex>
        </Box>
      </Tooltip>
      <SettingsDrawer
        isOpen={isOpen}
        onClose={onClose}
        handleDirection={handleDirection}
        isRightDirection={isRightDirection}
      />
    </>
  );
};

interface SettingsDrawer {
  isOpen: boolean;
  isRightDirection: boolean;
  onClose: () => void;
  handleDirection: () => void;
}

const SettingsDrawer = ({ isOpen, onClose, handleDirection, isRightDirection }: SettingsDrawer) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement={isRightDirection ? 'right' : 'left'}
      onClose={onClose}
      autoFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent bg={useColorModeValue('white', 'gray.800')}>
        <DrawerCloseButton />
        <DrawerHeader>Settings</DrawerHeader>

        <DrawerBody p={0}>
          <ColorModeSwitcher />
          <Flex
            justifyContent="space-between"
            alignItems="center"
            p={5}
            _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
            cursor="pointer"
            onClick={handleDirection}
          >
            <Text fontWeight="medium">Direction</Text>
            <Icon as={BiDirections} w={8} h={8} color="#eac849" />
          </Flex>
          <Box p={5}>
            <Text fontWeight="medium" mb={5}>
              Presets
            </Text>
            <PresetColors aria-label="Preset Colors" />
          </Box>
        </DrawerBody>
        <DrawerFooter p="2.5rem"></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SettingsDrawerWrapper;
