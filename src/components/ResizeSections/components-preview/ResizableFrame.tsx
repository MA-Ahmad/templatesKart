import { useEffect, useRef, useState, Fragment } from 'react';
import { useColorMode, useBreakpointValue } from '@chakra-ui/react';
import { Component } from 'data/components/types';
import { Resizable } from 're-resizable';
import { getComponentFileUrl } from 'utils';

type IframeProps = {
  component: Component;
};

const MIN_HEIGHT = 222;
const MIN_WIDTH = 380;

export const ResizableFrame = ({ component }: IframeProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const ref = useRef<HTMLIFrameElement>(null);
  const { colorMode } = useColorMode();
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [exampleUrl, setExampleUrl] = useState('');

  useEffect(() => {
    setExampleUrl(getComponentFileUrl(component.id, component.filename));
  }, [component]);

  const syncHeight = () => {
    setHeight(ref.current?.contentWindow?.document.body.offsetHeight);
  };

  // Reload iframe content when component and colorMode changes
  useEffect(() => {
    if (ref.current?.contentWindow?.document.body.children.length)
      ref.current?.contentWindow?.location.reload();
  }, [colorMode, component]);

  const getHeight = () => (height !== undefined && height >= MIN_HEIGHT ? height : MIN_HEIGHT);

  return (
    <Fragment>
      {isMobile && (
        <iframe
          loading="lazy"
          width="100%"
          height={getHeight()}
          src={exampleUrl}
          ref={ref}
          onLoad={syncHeight}
        />
      )}

      {!isMobile && (
        <Resizable
          bounds="parent"
          minWidth={MIN_WIDTH}
          minHeight={getHeight()}
          maxHeight={getHeight()}
          style={{
            borderBottomLeftRadius: '15px',
            borderBottomRightRadius: '15px'
          }}
        >
          <iframe
            loading="lazy"
            width="100%"
            height={getHeight()}
            src={exampleUrl}
            ref={ref}
            onLoad={syncHeight}
          />
        </Resizable>
      )}
    </Fragment>
  );
};
