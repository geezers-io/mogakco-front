import React, { FC, useCallback } from 'react';

import styled from '@emotion/styled';
import { media } from 'styles';
import { FaChevronUp } from 'react-icons/fa';

const ScrollTop: FC = () => {
  const handleWrapperClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Wrapper onClick={handleWrapperClick}>
      <ChevronUp />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  z-index: 5000;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  opacity: 0;
  visibility: hidden;

  ${media.lg} {
    opacity: initial;
    visibility: initial;
  }

  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;

export const ChevronUp = styled(FaChevronUp)`
  font-size: 1.66rem;
  color: ${({ theme }) => theme.primary_color_yellow};
`;

export default ScrollTop;
