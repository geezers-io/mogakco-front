export type OverloadedReturnType<T> = T extends {
  (...args: unknown[]): infer R;
  (...args: unknown[]): infer R;
  (...args: unknown[]): infer R;
  (...args: unknown[]): infer R;
}
  ? R
  : T extends {
      (...args: unknown[]): infer R;
      (...args: unknown[]): infer R;
      (...args: unknown[]): infer R;
    }
  ? R
  : T extends {
      (...args: unknown[]): infer R;
      (...args: unknown[]): infer R;
    }
  ? R
  : T extends (...args: unknown[]) => infer R
  ? R
  : unknown;

export type Valueof<T extends Record<string, unknown>> = T[keyof T];
