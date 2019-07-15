export const identity = <T>(x: T) => x;
export const noop = () => {};

export const testUtils = {
  fail: () => expect(true).toBe(false)
};
