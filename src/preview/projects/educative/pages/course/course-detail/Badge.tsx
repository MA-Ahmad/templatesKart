import * as React from 'react'
import { Icon, Text, HStack, useColorModeValue } from '@chakra-ui/react'

const Badge = (props) => {
  const getValues = (size) => {
    return size === 'md'
      ? { padding: 1.5, boxSize: 5, fontSize: 'sm' }
      : { padding: 1, boxSize: 3, fontSize: 'xs' }
  }

  return (
    <HStack
      p={getValues(props.size).padding}
      bg={useColorModeValue('gray.200', 'gray.700')}
      color={useColorModeValue('black', 'white')}
      rounded="md"
      spacing={1}
      m="2px"
      alignItems="center"
    >
      {props.icon && (
        <Icon
          as={props.icon}
          w={getValues(props.size).boxSize}
          h={getValues(props.size).boxSize}
        />
      )}
      <Text fontSize={getValues(props.size).fontSize} lineHeight={1}>
        {props.data}
      </Text>
    </HStack>
  )
}

export default Badge
