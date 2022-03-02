import { useEffect, useRef, useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { Resizable } from 're-resizable';
import { Project, Page, Component } from 'data/types';
import { getComponentUrl } from 'utils/getComponentUrl';

type IframeProps = {
  component?: Component;
  project: Project;
  page?: Page;
};

const MIN_HEIGHT = 222;

export const ResizableFrame = ({ component, project, page }: IframeProps) => {
  const ref = useRef<HTMLIFrameElement>(null);
  const { colorMode } = useColorMode();
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [exampleUrl, setExampleUrl] = useState('');

  useEffect(() => {
    setExampleUrl(
      component && page
        ? getComponentUrl(project.id, page?.id, component.filename)
        : project.liveLink
    );
  }, []);

  const syncHeight = () => {
    const frameHeight = ref.current?.contentWindow?.document.body.offsetHeight;

    setHeight(frameHeight);
  };

  // Reload iframe content when theme and colorMode changes
  useEffect(() => {
    component && page && ref.current?.contentWindow?.location.reload();
  }, [colorMode]);

  const getHeight = () => (height !== undefined && height >= MIN_HEIGHT ? height : MIN_HEIGHT);

  return (
    <Resizable
      bounds={'parent'}
      minWidth={380}
      minHeight={component ? getHeight() : '1000'}
      maxHeight={component ? getHeight() : '1000'}
      style={{
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px'
      }}
    >
      <iframe
        loading={'lazy'}
        width={'100%'}
        height={component ? getHeight() : '1000'}
        src={exampleUrl}
        ref={ref}
        onLoad={component && syncHeight}
      />
    </Resizable>
  );
};
