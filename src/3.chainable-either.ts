type Func<T, U> = (num: T) => U;

export const left = <T>(x: T) => ({
  chain: <U>(f: Func<T, U>) => left(x),
  map: <U>(f: Func<T, U>) => left(x),
  fold: <U>(f: Func<T, U>, g: Func<T, U>) => f(x)
});

export const right = <T>(x: T) => ({
  chain: <U>(f: Func<T, U>) => f(x),
  map: <U>(f: Func<T, U>) => right(f(x)),
  fold: <U>(f: Func<T, U>, g: Func<T, U>) => g(x)
});

export const fromNullable = <T>(value: T | null | undefined) =>
  value === null || value === undefined ? left(null) : right(value);

export const tryCatch = f => {
  try {
    return right(f());
  } catch (e) {
    return left(e);
  }
};
