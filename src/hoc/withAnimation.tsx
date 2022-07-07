import React, { ComponentType, CSSProperties, PropsWithRef, RefObject } from 'react';
import { CallbackType, observe } from 'utils/dom';
import { css } from '@emotion/css';
import { omit } from 'lodash';

export type AnimationType = 'fadeIn';
export type AnimationOptions = {
  transition?: number;
  origin?: 'left' | 'right' | 'top' | 'bottom';
  originHowFarAway?: CSSProperties['width'];
  delay?: number;
};
export type ObserverCallback = CallbackType;
export type EmotionClassName = string;

const ACTIVE_CLASSNAME = 'animation-active';

const animationStyles: Record<AnimationType, (options: AnimationOptions) => EmotionClassName> = {
  fadeIn: ({ transition = 1, origin, originHowFarAway = '100px', delay = 0 }) => css`
    position: relative;
    ${origin && `${origin}: -${originHowFarAway};`}
    opacity: 0;
    will-change: opacity ${origin && `, ${origin}`};
    transition: opacity ${transition}s${origin && `, ${origin} ${transition}s`};
    transition-delay: ${delay}s;

    &.${ACTIVE_CLASSNAME} {
      ${origin && `${origin}: 0;`};
      opacity: 1;
    }
  `,
};

const getAnimationCallback = (classname: EmotionClassName): ObserverCallback => ({
  whenInit: (target) => target.classList.add(classname),
  whenIntoView: (target) => target.classList.add(ACTIVE_CLASSNAME),
});

export function withFadeIn<Props extends PropsWithRef<unknown>>(
  Comp: ComponentType<Props>,
  animationOptions: AnimationOptions = {},
  ioOptions: IntersectionObserverInit = {}
) {
  const styles = animationStyles.fadeIn(animationOptions);
  const callback = getAnimationCallback(styles);

  return withAnimation(Comp, callback, ioOptions);
}

export function withAnimation<Props extends PropsWithRef<unknown>>(
  WrappedComponent: ComponentType<Props>,
  callback: ObserverCallback,
  ioOptions: IntersectionObserverInit
) {
  return class extends React.Component<Props> {
    private componentRef: RefObject<HTMLElement>;
    private io: IntersectionObserver | null = null;

    constructor(props: Props) {
      super(props);

      this.componentRef = React.createRef<HTMLElement>();
    }

    componentDidMount() {
      if (!this.componentRef.current) return;

      this.io = observe(this.componentRef.current, omit(callback, 'whenUnObserve'), ioOptions);
    }

    componentWillUnmount() {
      if (!this.componentRef.current) return;

      this.io?.unobserve(this.componentRef.current);
    }

    render() {
      return <WrappedComponent {...this.props} ref={this.componentRef} />;
    }
  };
}
