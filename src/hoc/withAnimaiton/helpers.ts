import { CSSProperties } from 'react';
import { CallbackType } from 'utils/dom';
import { css } from '@emotion/css';

export type AnimationType = 'fadeIn';
export type AnimationOptions = {
  transition?: number;
  origin?: 'left' | 'right' | 'top' | 'bottom';
  originHowFarAway?: CSSProperties['width'];
  delay?: number;
};
export type ObserverCallback = CallbackType;
export type EmotionClassName = string;

export const ACTIVE_CLASSNAME = 'animation-active';

export const getAnimationCallback = (): ObserverCallback => ({
  whenIntoView: (target) => target.classList.add(ACTIVE_CLASSNAME),
});

export const animationStyles: Record<
  AnimationType,
  (options: AnimationOptions) => EmotionClassName
> = {
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
