import { useEffect, useRef, useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { Component } from 'data/components/types';
import { Resizable } from 're-resizable';
import { getComponentFileUrl } from 'utils';

type IframeProps = {
  component: Component;
};

const MIN_HEIGHT = 222;

export const ResizableFrame = ({ component }: IframeProps) => {
  const ref = useRef<HTMLIFrameElement>(null);
  const { colorMode } = useColorMode();
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [exampleUrl, setExampleUrl] = useState('');

  useEffect(() => {
    setExampleUrl(getComponentFileUrl(component.id, component.filename));
  }, [component]);

  const syncHeight = () => {
    const frameHeight = ref.current?.contentWindow?.document.body.offsetHeight;

    setHeight(frameHeight);
  };

  // Reload iframe content when theme and colorMode changes
  useEffect(() => {
    ref.current?.contentWindow?.location.reload();
  }, [colorMode, component]);

  const getHeight = () => (height !== undefined && height >= MIN_HEIGHT ? height : MIN_HEIGHT);

  return (
    <Resizable
      bounds={'parent'}
      minWidth={380}
      minHeight={getHeight()}
      maxHeight={getHeight()}
      style={{
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px'
      }}
    >
      <iframe
        loading={'lazy'}
        width={'100%'}
        height={getHeight()}
        src={exampleUrl}
        ref={ref}
        onLoad={syncHeight}
      />
    </Resizable>
  );
};
