import React from 'react';
import { IconButtonProps, Icon, Flex, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { TiTick } from 'react-icons/ti';
import { theme, ColorKeys, accentKeys } from '../theme';
import { useLocalSetting } from '../theme/hooks/useLocalSetting';
import { getTagBackgroundDark, getPresetBackground } from '../theme/colors';

const PresetColors: React.FC<IconButtonProps> = () => {
  const [accentKey, setAccentKey] = useLocalSetting<ColorKeys>('accent', 'defaultAccent');

  const update = React.useCallback(
    (key) => {
      let index = accentKeys.indexOf(key);
      setAccentKey(accentKeys[index]);
    },
    [accentKey]
  );

  const getColor = (key: string) => {
    return useColorModeValue(`${key}.400`, `${key}.500`);
  };

  const getHoverColor = (key: string) => {
    return useColorModeValue(`${key}.700`, `${key}.200`);
  };

  const isSelected = (key: string) => {
    return (accentKey === 'defaultAccent' && key === 'blue') || accentKey === key;
  };

  const tickMarker = (key: string) => {
    if (isSelected(key)) return <Icon as={TiTick} color="white" w={8} h={8} />;
  };

  const showBorderColor = (key: string) => {
    return isSelected(key) ? 'var(--colors-accent-200)' : 'gray.200';
  };

  const showBoxShadow = (key) => {
    return isSelected(key) ? 'var(--colors-accent-200) 0px 0px 12px 4px inset' : 'none';
  };

  const showBg = (key) => {
    return isSelected(key) ? getPresetBackground(key, theme) : getTagBackgroundDark(key, theme);
  };

  const handleGroupHover = (key) => {
    return isSelected(key) ? '' : getHoverColor(key);
  };

  return (
    <SimpleGrid columns={{ base: 2, md: 2, lg: 2 }} spacing={6} placeItems="center">
      {accentKeys
        .filter((key) => key !== 'defaultAccent')
        .map((key, index) => (
          <Flex
            key={index}
            border="1px solid"
            borderColor={showBorderColor(key)}
            w="90%"
            height={28}
            boxShadow={showBoxShadow(key)}
            bg={showBg(key)}
            rounded="xl"
            cursor="pointer"
            justifyContent="center"
            align="center"
            onMouseDown={() => update(key)}
            role="group"
          >
            <Flex
              width={16}
              height={16}
              rounded="full"
              bg={getColor(key)}
              _groupHover={{ bg: handleGroupHover(key) }}
              justifyContent="center"
              align="center"
            >
              {tickMarker(key)}
            </Flex>
          </Flex>
        ))}
    </SimpleGrid>
  );
};

export default PresetColors;
