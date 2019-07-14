import { box } from "./box";
import { identity } from "./util";

test("add", () => {
  expect(
    box(1)
      .map(i => i + 1)
      .map(i => i.toString())
      .fold(identity)
  ).toMatchInlineSnapshot(`"2"`);
});

test("string concat", () => {
  expect(
    box(1)
      .map(i => i + 1)
      .map(i => i.toString())
      .map(s => s.concat("capybara"))
      .fold(identity)
  ).toMatchInlineSnapshot(`"2capybara"`);
});

test("closure", () => {
  expect(
    box("I")
      .map(s => [s, "am capybara"].join(" "))
      .map(ourString =>
        box(ourString.length)
          .map(length => `has a length of ${length}!`)
          .map(lengthDeclaration => [ourString, lengthDeclaration].join(": "))
      )
      .fold(identity)
  ).toMatchInlineSnapshot(`
    Object {
      "fold": [Function],
      "map": [Function],
    }
  `);
});

test("closure fully folded", () => {
  expect(
    box("I")
      .map(s => [s, "am capybara"].join(" "))
      .map(ourString =>
        box(ourString.length)
          .map(length => `has a length of ${length}!`)
          .map(lengthDeclaration => [ourString, lengthDeclaration].join(": "))
          .fold(identity)
      )
      .fold(identity)
  ).toMatchInlineSnapshot(`"I am capybara: has a length of 13!"`);
});
