import { useRef } from 'react';

export function useDidMountEffect(fn: (...args: unknown[]) => unknown) {
  const didMountRef = useRef(false);

  if (!didMountRef.current) {
    didMountRef.current = true;
    fn();
  }
}
