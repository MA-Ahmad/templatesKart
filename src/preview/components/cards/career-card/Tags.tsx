import React from 'react';
import { Flex, FlexProps, Tag as ChakraTag, TagProps as ChakraTagProps } from '@chakra-ui/react';

export interface TagProps extends ChakraTagProps {
  name: string;
  interactive?: boolean;
}

export const Tag: React.FC<TagProps> = ({ name, ...props }) => {
  const propsOverride = {
    size: 'sm',
    verticalAlign: 'middle'
  };

  return (
    <ChakraTag {...props} {...propsOverride}>
      {name}
    </ChakraTag>
  );
};

export interface TagsProps extends FlexProps {
  interactive?: boolean;
  tags?: string[];
  tagProps?: Partial<TagProps>;
}

const Tags: React.FC<TagsProps> = ({ tags, tagProps = {}, ...props }) => {
  if (!tags || tags.length === 0) {
    return null;
  }
  return (
    <Flex alignItems="center" flexWrap="wrap" m="-2px" {...props}>
      {tags.map((tag) => (
        <Tag key={tag} name={tag} m="2px" {...tagProps} />
      ))}
    </Flex>
  );
};

export default Tags;
