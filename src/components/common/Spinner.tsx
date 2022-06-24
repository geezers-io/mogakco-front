import { LoadingOutlined } from '@ant-design/icons';
import React, { forwardRef } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number;
  forwardedRef?: React.ForwardedRef<SpinnerType>;
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

export const StyledSpinner = styled(LoadingOutlined)<SpinnerProps>`
  font-size: ${(p) => p.size};
  animation: ${loadingAnimation} 2.2s cubic-bezier(0.645, 0.35, 0.755, 1) infinite;
`;

const ForwardedSpinner = forwardRef<SpinnerType, SpinnerProps>((props, ref) => (
  <Spinner {...props} forwardedRef={ref} />
));

const name = Spinner.displayName || Spinner.name;
ForwardedSpinner.displayName = `forwardRef(${name})`;

export default ForwardedSpinner;
