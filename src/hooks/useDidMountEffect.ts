import { useRef } from 'react';

export function useDidMountEffect(fn: (...args: unknown[]) => unknown) {
  const didMountRef = useRef(false);
  console.log('au');

  if (!didMountRef.current) {
    console.log(didMountRef.current);
    didMountRef.current = true;
    fn();
  }
}
