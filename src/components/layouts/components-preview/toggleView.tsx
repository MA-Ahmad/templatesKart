import * as React from 'react';
import { Stack, Tooltip, Flex, useColorModeValue } from '@chakra-ui/react';
import { useLinkColor } from 'preview/projects/my-website/pages/theme';
import { LargeIcon, SmallIcon } from './icons';

interface ToggleViewProps {
  viewTypeId: Number;
  setViewTypeId: React.Dispatch<React.SetStateAction<number>>;
}

const viewTypes = [
  { id: 1, icon: <LargeIcon />, label: 'Blocks' },
  { id: 2, icon: <SmallIcon />, label: 'List' }
];

const ToggleView = ({ viewTypeId, setViewTypeId }: ToggleViewProps) => {
  const linkColor = useLinkColor();

  return (
    <Stack px={{ base: 0, sm: 10 }} direction="row" w="100%" justifyContent="flex-end">
      {viewTypes.map((type) => (
        <Tooltip key={type.id} hasArrow label={type.label} placement="top">
          <Flex
            p={3}
            w={10}
            alignItems="center"
            bg={viewTypeId === type.id ? linkColor : useColorModeValue('#a0aebf', '#4a5567')}
            lineHeight={1}
            rounded="md"
            onClick={() => setViewTypeId(type.id)}
            cursor="pointer"
          >
            {type.icon}
          </Flex>
        </Tooltip>
      ))}
    </Stack>
  );
};

export default ToggleView;
