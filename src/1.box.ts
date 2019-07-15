/**
 * A most useful box, or also, an Identity Functor
 */

export const box = <T>(x: T) => ({
  map: <U>(fn: (x: T) => U) => box(fn(x) as ReturnType<typeof fn>),
  fold: <U>(fn: (x: T) => U) => fn(x)
});
