import { box } from "./box";
import { identity } from "./util";

test("1", () => {
  expect(
    box(1)
      .map(i => i + 1)
      .map(i => i.toString())
      .fold(identity)
  ).toMatchInlineSnapshot(`"2"`);
});

test("2", () => {
  expect(
    box(1)
      .map(i => i + 1)
      .map(i => i.toString())
      .map(s => s.concat("capybara"))
      .fold(identity)
  ).toMatchInlineSnapshot(`"2capybara"`);
});
