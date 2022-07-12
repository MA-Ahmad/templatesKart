import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

const VerticalDivider = (props) => {
  return (
    <Box
      borderLeft="1px solid"
      borderColor={useColorModeValue('gray.400', 'gray.600')}
      mx={5}
      height={props.height || '20px'}
      {...props}
    ></Box>
  )
}

export default VerticalDivider
