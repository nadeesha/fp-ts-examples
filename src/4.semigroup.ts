type Func<T, U> = (num: T) => U;

const createSemigroup = <T>(createConcat: (inner: T) => Func<T, T>) => {
  const semigroup = (x: T) => ({
    x,
    concat: (y: T) => semigroup(createConcat(x)(y)),
    inspect: () => `semi(${x})`
  });

  return semigroup;
};

export const sum = createSemigroup((inner: number) => x => inner + x);

export const all = createSemigroup((inner: boolean) => x => inner && x);

export const first = createSemigroup((inner: any) => x => inner);
