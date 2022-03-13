import { useRef } from 'react';
import { Box, Button, useClipboard, Text, HStack } from '@chakra-ui/react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { MdContentCopy } from 'react-icons/md';
import { Component } from 'data/components/types';

type CodeSampleProps = {
  component: Component;
  nestedComponentFile?: string;
};

export const CodeSample = ({ component, nestedComponentFile }: CodeSampleProps) => {
  let code;
  if (nestedComponentFile)
    code =
      require(`!!raw-loader!preview/components/${component.id}/${component.filename}/${nestedComponentFile}`).default;
  else
    code = require(`!!raw-loader!preview/components/${component.id}/${component.filename}`).default;

  const { hasCopied, onCopy } = useClipboard(code);
  const codeRef = useRef<HTMLDivElement>(null);

  return (
    <Box fontFamily={'mono'} fontSize={'sm'} position="relative" ref={codeRef}>
      <Button size="sm" position="absolute" top={4} right={4} onClick={onCopy}>
        <HStack spacing={2}>
          <MdContentCopy />
          <Text>{hasCopied ? 'Copied!' : 'Copy'}</Text>
        </HStack>
      </Button>

      <CodeBlock text={code} language={'tsx'} theme={dracula} showLineNumbers={false} />
    </Box>
  );
};
