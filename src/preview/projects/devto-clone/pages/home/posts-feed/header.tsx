import { Box, Heading, Spacer, Button, HStack } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const HeaderBtn = styled(Button)`
  position: relative;
  padding: 0.4rem 0.5rem;
  font-weight: normal;
  border-radius: 4px;

  &:hover {
    color: #3b49df;

    &::after {
      width: 100%;
    }
  }

  &:focus {
    box-shadow: none;
  }

  ${(props) =>
    props.isCurrent &&
    css`
      font-weight: 500;

      &::after {
        transition: width 0.2s ease;
        position: absolute;
        bottom: 0;
        margin: auto;
        content: '';
        height: 3px;
        width: 70%;
        background-color: #3b49df;
      }
    `}
`;

const timeperiods = ['Feed', 'Week', 'Month', 'Year', 'Latest'];

const Header = () => {
  return (
    <Box as="header" p={3}>
      <HStack spacing=".6rem">
        <Heading fontSize="1.25rem">Posts</Heading>
        <Spacer />
        {timeperiods.map((item, index) => {
          return (
            <HeaderBtn key={index} isCurrent={index === 0} fontSize={{ base: 'sm', sm: 'md' }}>
              {item}
            </HeaderBtn>
          );
        })}
      </HStack>
    </Box>
  );
};

export default Header;
