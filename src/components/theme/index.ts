import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import { colors } from './colors';
import { mergeWith } from '@chakra-ui/utils';
import { mode } from '@chakra-ui/theme-tools';
import { useHoverLinkColor } from './colors';
import { getColor } from '@chakra-ui/theme-tools';

// Re-exports
export { useLinkColor, useHoverLinkColor, accentKeys } from './colors';
export type { ColorKeys } from './colors';

export function makeTheme(overrides: ThemeOverride = {}) {
  const theme = extendTheme({
    ...extendedTheme,
    colors
  });
  return mergeWith(theme, overrides);
}

export const extendedTheme = extendTheme({
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Work Sans, system-ui, sans-serif'
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.700', 'whiteAlpha.900')(props),
        bg: mode('gray.50', 'gray.900')(props),
        fontSize: '1.2em',
        '.deleted': {
          color: '#ff8383 !important',
          fontStyle: 'normal !important'
        },
        '.inserted': {
          color: '#b5f4a5 !important',
          fontStyle: 'normal !important'
        }
      },
      a: {
        color: mode('blue.500', 'blue.200')(props),
        transition: 'color 0.15s',
        transitionTimingFunction: 'ease-out',
        fontWeight: '500',
        _hover: {
          color: useHoverLinkColor()
        }
        // _hover: {
        //   color: mode("blue.600", "blue.300")(props),
        // }
      }
    })
  },
  components: {
    Popover: {
      variants: {
        responsive: {
          popper: {
            maxWidth: 'unset',
            width: '5px'
          }
        }
      }
    },
    // Popover: {
    //   parts: ['popper'],
    //   baseStyle: (props) => ({
    //     popper: {
    //       zIndex: 10,
    //       maxW: 'xs',
    //       // maxW: props.width ? props.width : 'xs',
    //       w: props.width,
    //     },
    //   }),
    // },
    Button: {
      baseStyle: {
        fontWeight: '500',
        rounded: 'xl'
      }
    },
    Text: {
      variants: {
        gradient: (props) => {
          const { theme, fromcolor, tocolor } = props;
          const lgFrom = getColor(theme, fromcolor);
          const lgTo = getColor(theme, tocolor);
          return {
            background: `linear-gradient(135deg, ${lgFrom}, ${lgTo})`,
            backgroundClip: 'text',
            textFillColor: 'transparent',
            _hover: {
              background: `linear-gradient(315deg, ${lgFrom}, ${lgTo})`,
              backgroundClip: 'text'
            }
          };
        }
      }
    },
    Tag: {
      baseStyle: {
        rounded: 'lg'
      }
    },
    textarea: {
      baseStyle: {
        background: 'green.300'
      }
    },
    Link: {
      baseStyle: {
        fontWeight: 'inherit',
        _hover: {
          textDecoration: 'none'
        },
        _focus: {
          boxShadow: 'none'
        },
        variants: {
          text: {
            color: 'blue.400',
            transition: 'color 0.15s',
            transitionTimingFunction: 'ease-out',
            fontWeight: '500',
            _hover: {
              color: 'blue.300'
            }
          },
          gradient: {
            bgGradient: 'linear(to-br, blue.400,blue.300)',
            bgClip: 'text',
            fontWeight: '500',
            _hover: {
              bgGradient: 'linear(to-br, blue.500,blue.300)',
              bgClip: 'text'
            }
          }
        }
      }
    }
  }
});

export const getTagColor = (type) => {
  type = type.toLowerCase();
  if (type === 'rails' || type === 'ruby') {
    return 'red';
  } else if (type === 'react') {
    return 'cyan';
  } else if (type === 'javascript') {
    return 'yellow';
  } else if (type === 'typescript' || type === 'tailwindcss') {
    return 'blue';
  } else if (type === 'chakraui' || type === 'css') {
    return 'teal';
  }
};

export const theme = makeTheme();
