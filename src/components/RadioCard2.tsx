import React from 'react';
import { Box, useRadio, UseRadioProps, useColorModeValue } from '@chakra-ui/react';

type RadioCardProps = {
  children: React.ReactNode;
} & UseRadioProps;

const RadioCard2: React.VFC<RadioCardProps> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        // borderWidth="1px"
        borderRadius="md"
        border="none"
        _checked={{
          bg: useColorModeValue('white', 'whiteAlpha.300'),
          color: useColorModeValue('black', 'white'),
          borderRadius: 'md',
          boxShadow: 'md'
        }}
        // _focus={{
        //   boxShadow: 'outline'
        // }}
        p={2}
      >
        {props.children}
      </Box>
    </Box>
  );
};
export default RadioCard2;
