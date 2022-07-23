import { RefObject, useEffect } from 'react';
import { CallbackType, observe } from 'utils/dom';

export function useIntersectionObserver<Element extends HTMLElement>(
  ref: RefObject<Element>,
  callback: CallbackType<Element>,
  options: IntersectionObserverInit = {}
) {
  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const io = observe(el, callback, options);

    return () => {
      io.unobserve(el);
    };
  }, [callback, options, ref]);
}
