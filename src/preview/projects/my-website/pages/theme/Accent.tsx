import React from 'react';
import {
  IconButtonProps,
  Icon,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  SimpleGrid,
  Heading,
  Container,
  useColorModeValue
} from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import { BiBrushAlt } from 'react-icons/bi';
import { TiTick } from 'react-icons/ti';
import { theme, ColorKeys, useLinkColor, accentKeys } from './index';
import useLocalSetting from './hooks/useLocalSetting';
import { getTagBackgroundDark } from './colors';

const AccentPicker: React.FC<IconButtonProps> = ({ ...props }) => {
  const color = useLinkColor();
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

  return (
    <Popover placement="bottom-end" variant="responsive">
      <PopoverTrigger>
        <Flex
          as="button"
          p={'0.6rem'}
          rounded="lg"
          cursor="pointer"
          _hover={{ bg: useColorModeValue('gray.300', 'gray.800') }}
          bg={useColorModeValue('gray.200', 'gray.600')}
          justify="center"
          mr={3}
        >
          <Icon as={BiBrushAlt} color={color} />
        </Flex>
      </PopoverTrigger>
      <PopoverContent
        borderRadius={12}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.100', 'gray.600')}
        p={2}
      >
        <Container py={5}>
          <Heading as="h4" fontSize={{ base: '3xl', md: 'md' }}>
            Primary Color
          </Heading>
          <SimpleGrid columns={{ base: 3, md: 4, lg: 5 }} spacing={2} mt={4}>
            {accentKeys
              .filter((key) => key !== 'defaultAccent')
              .map((key, index) => (
                <Flex
                  key={index}
                  border="1px solid"
                  borderColor="gray.200"
                  width={8}
                  height={8}
                  rounded="full"
                  cursor="pointer"
                  justify="center"
                  align="center"
                  onMouseDown={() => update(key)}
                >
                  <Flex
                    width={6}
                    height={6}
                    rounded="full"
                    bg={getColor(key)}
                    _hover={{ bg: getHoverColor(key) }}
                    justify="center"
                    align="center"
                  >
                    {accentKey === key && <Icon as={TiTick} color={'white'} />}
                  </Flex>
                </Flex>
              ))}
          </SimpleGrid>
        </Container>
      </PopoverContent>
    </Popover>
  );
};

export const AccentGlobal: React.FC = () => {
  const [accentKey] = useLocalSetting<ColorKeys>('accent', 'defaultAccent');
  const accent = theme.colors[accentKey];
  const styles = React.useMemo(
    () => css`
      :root {
        --colors-accent-50: ${accent[50]};
        --colors-accent-100: ${accent[100]};
        --colors-accent-200: ${accent[200]};
        --colors-accent-300: ${accent[300]};
        --colors-accent-400: ${accent[400]};
        --colors-accent-500: ${accent[500]};
        --colors-accent-600: ${accent[600]};
        --colors-accent-700: ${accent[700]};
        --colors-accent-800: ${accent[800]};
        --colors-accent-900: ${accent[900]};
        --colors-accent-tag-bg-dark: ${getTagBackgroundDark(accentKey, theme)};
      }
    `,
    [accentKey]
  );
  return <Global styles={styles} />;
};

export default AccentPicker;
