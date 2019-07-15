import { sum, all, first } from "./4.semigroup";

test("sum", () => {
  expect(
    sum(1)
      .concat(2)
      .concat(3)
      .inspect()
  ).toMatchInlineSnapshot(`"semi(6)"`);
});

test("all", () => {
  expect(
    all(true)
      .concat(true)
      .concat(true)
      .inspect()
  ).toMatchInlineSnapshot(`"semi(true)"`);
});

test("first", () => {
  expect(
    first("foo")
      .concat("bar")
      .concat("never be")
      .inspect()
  ).toMatchInlineSnapshot(`"semi(foo)"`);
});
