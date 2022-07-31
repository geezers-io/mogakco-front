export type IOCallback<T extends HTMLElement> = (target: T) => unknown;
export type CallbackType<T extends HTMLElement = HTMLElement> = {
  whenInit?: IOCallback<T>;
  whenIntoView?: IOCallback<T>;
  whenOutOfView?: IOCallback<T>;
};

export function observe<Element extends HTMLElement>(
  el: Element,
  callback: CallbackType<Element>,
  options: IntersectionObserverInit = {}
) {
  callback.whenInit?.(el);

  const ioCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      const target = entry.target as Element;

      if (entry.intersectionRatio > 0) {
        callback.whenIntoView?.(target);
      } else {
        callback.whenOutOfView?.(target);
      }
    });
  };
  const ioOption: IntersectionObserverInit = {
    threshold: 0.3,
    ...options,
  };

  const io = new IntersectionObserver(ioCallback, ioOption);
  io.observe(el);

  return io;
}
