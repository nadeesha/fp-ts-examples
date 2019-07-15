export const left = <T>(x: T) => ({
  map: () => left(x),
  fold: <U>(f: (x: T) => U, g: unknown) => f(x)
});

export const right = <T>(x: T) => ({
  map: <U>(f: (x: T) => U) => right(f(x)),
  fold: <U>(f: unknown, g: (x: T) => U) => g(x)
});

export const fromNullable = <T>(value: T | null | undefined) =>
  value === null || value === undefined ? left(null) : right(value);
