import React from 'react';
import {
  Tag as ChakraTag,
  TagProps as ChakraTagProps,
  useColorModeValue,
  useTheme
} from '@chakra-ui/react';
import { ColorKeys, getTagBackgroundDark } from 'components/theme/colors';

export interface TagProps extends ChakraTagProps {
  name: string;
  interactive?: boolean;
  colorScheme?: ColorKeys;
}

export function useTagStyles(colorScheme: ColorKeys = 'accent') {
  const theme = useTheme();
  return {
    bg: useColorModeValue(
      `${colorScheme}.100`,
      colorScheme === 'accent'
        ? 'var(--colors-accent-tag-bg-dark)'
        : getTagBackgroundDark(colorScheme, theme)
    ),
    color: useColorModeValue(`${colorScheme}.800`, `${colorScheme}.200`)
  };
}

export const Tag: React.FC<TagProps> = ({
  colorScheme = 'accent',
  name,
  interactive = true,
  ...props
}) => {
  const propsOverride = {
    size: 'sm',
    verticalAlign: 'middle',
    ...useTagStyles(colorScheme)
  };
  if (!interactive) {
    return (
      <ChakraTag {...props} {...propsOverride}>
        {name}
      </ChakraTag>
    );
  }

  return (
    <ChakraTag {...props} {...propsOverride}>
      {name}
    </ChakraTag>
  );
};
