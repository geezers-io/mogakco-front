import React, { RefObject } from 'react';
import { observe } from 'utils/dom';
import { animationStyles, getAnimationCallback, AnimationOptions } from 'hoc/withAnimaiton/helpers';
import { cx } from '@emotion/css';
import { StyledComponent } from '@emotion/styled';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

export function withAnimation<
  StyledProps extends Record<string, unknown> = {},
  Tag extends keyof JSX.IntrinsicElements = 'div',
  StyledComp extends StyledComponent<StyledProps, JSX.IntrinsicElements[Tag]> = StyledComponent<
    StyledProps,
    JSX.IntrinsicElements[Tag]
  >
>(
  animationName: keyof typeof animationStyles,
  WrappedComponent: StyledComp,
  animationOptions: AnimationOptions = {},
  ioOptions?: IntersectionObserverInit
) {
  const animationClassName = animationStyles[animationName](animationOptions);
  const callback = getAnimationCallback();

  return class extends React.Component<StyledProps & JSX.IntrinsicElements[Tag]> {
    private componentRef: RefObject<HTMLElement>;
    private io: IntersectionObserver | null = null;

    constructor(props: StyledProps & JSX.IntrinsicElements[Tag]) {
      super(props);

      this.componentRef = React.createRef<HTMLElement>();
    }

    componentDidMount() {
      if (!this.componentRef.current) return;

      this.io = observe(this.componentRef.current, callback, ioOptions);
    }

    componentWillUnmount() {
      if (!this.componentRef.current) return;

      this.io?.unobserve(this.componentRef.current);
    }

    render() {
      const className = cx(this.props.className, animationClassName);
      return (
        <WrappedComponent
          {...(this.props as EmotionJSX.LibraryManagedAttributes<
            StyledComp,
            StyledProps & JSX.IntrinsicElements[Tag]
          >)}
          ref={this.componentRef}
          className={className}
        />
      );
    }
  };
}
