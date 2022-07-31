import React, { forwardRef } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { AiOutlineLoading } from 'react-icons/ai';
import { IconBaseProps } from 'react-icons';

export interface SpinnerProps extends IconBaseProps {
  size?: number;
  ref?: React.ForwardedRef<SpinnerType>;
}
export type SpinnerType = React.FC<SpinnerProps>;

export const Spinner: SpinnerType = (props) => {
  return <StyledSpinner {...props} />;
};

const loadingAnimation = keyframes`
  ${'0%'} {
    transform: rotateZ(0deg);
  }

  ${'100%'} {
    transform: rotateZ(1080deg);
  }
`;

export const StyledSpinner = styled(AiOutlineLoading)<SpinnerProps>`
  font-size: ${(p) => p.size};
  animation: ${loadingAnimation} 2.2s cubic-bezier(0.645, 0.35, 0.755, 1) infinite;
`;

const ForwardedSpinner = forwardRef<SpinnerType, SpinnerProps>((props, ref) => (
  <Spinner {...props} ref={ref} />
));

const name = Spinner.displayName || Spinner.name;
ForwardedSpinner.displayName = `forwardRef(${name})`;

export default ForwardedSpinner;
