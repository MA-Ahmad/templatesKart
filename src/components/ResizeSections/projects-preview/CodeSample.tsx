import { useRef } from 'react';
import { Box, Button, useClipboard, Text, HStack } from '@chakra-ui/react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { MdContentCopy } from 'react-icons/md';
import { Project, Page, Component } from 'data/projects/types';

type CodeSampleProps = {
  component?: Component;
  nestedComponentFile?: string;
  project: Project;
  page?: Page;
};

export const CodeSample = ({ project, page, component, nestedComponentFile }: CodeSampleProps) => {
  let code, code_path;

  // Single file code
  if (page && component) {
    code_path = require(`!!raw-loader!preview/projects/${project.id}/pages/${page.id}/${component.filename}`);
  }
  // Multiple files code
  if (component && nestedComponentFile) {
    code_path = require(`!!raw-loader!preview/projects/${project.id}/pages/${page?.id}/${component?.filename}/${nestedComponentFile}`);
  }
  code = code_path ? code_path.default : '';

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
