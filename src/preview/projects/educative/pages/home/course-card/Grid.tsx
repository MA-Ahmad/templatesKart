import * as React from 'react'
import { SimpleGrid } from '@chakra-ui/react'

const CourseGrid = (props) => {
  const columns = React.useMemo(() => {
    const count = React.Children.toArray(props.children).filter(
      React.isValidElement
    ).length
    return {
      base: Math.min(1, count),
      md: Math.min(2, count),
      lg: Math.min(3, count),
      xl: Math.min(4, count),
    }
  }, [props.children])
  return (
    <SimpleGrid
      columns={columns}
      columnGap={{
        base: 4,
        md: 6,
      }}
      rowGap={{
        base: 8,
        md: 10,
      }}
      {...props}
      display={{ base: 'grid', md: 'flex' }}
      justifyContent="center"
      flexWrap="wrap"
    />
  )
}

export default CourseGrid
