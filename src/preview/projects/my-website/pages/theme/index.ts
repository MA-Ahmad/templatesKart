import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import { Dict, mergeWith } from '@chakra-ui/utils';
import { mode } from '@chakra-ui/theme-tools';
import { useHoverLinkColor, colors } from './colors';
import { getColor } from '@chakra-ui/theme-tools';

// Re-exports
export { useLinkColor, useHoverLinkColor, accentKeys } from './colors';
export type { ColorKeys } from './colors';

export default function makeTheme(overrides: ThemeOverride = {}) {
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
    global: (props: Dict<any>) => ({
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
      },
      '#nprogress': {
        pointerEvents: 'none'
      },
      '#nprogress .bar': {
        bg: useHoverLinkColor(),
        position: 'fixed',
        zIndex: '1031',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px'
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
    Button: {
      baseStyle: {
        fontWeight: '500',
        rounded: 'xl'
      }
    },
    Text: {
      variants: {
        gradient: (props: { theme: any; fromcolor: any; tocolor: any }) => {
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

export const getTagColor = (type: string) => {
  type = type.toLowerCase();
  switch (type) {
    case 'ruby':
    case 'rails': {
      return 'red';
    }
    case 'react': {
      return 'cyan';
    }
    case 'javascript': {
      return 'yellow';
    }
    case 'typescript':
    case 'tailwindcss':
    case 'nextjs': {
      return 'blue';
    }
    case 'chakraui':
    case 'css': {
      return 'teal';
    }
  }
};

export const theme = makeTheme();
