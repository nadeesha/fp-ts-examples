import { getAnimalHabitat } from "./either";

const results = ["capybara", "salmon", "bread", "fructose", "dragon"].map(
  possibleAnimal => [possibleAnimal, getAnimalHabitat(possibleAnimal)]
);

test("results", () => {
  expect(results).toMatchInlineSnapshot(`
    Array [
      Array [
        "capybara",
        "capybara lives in WOODLAND",
      ],
      Array [
        "salmon",
        "Oh no! err: Error: possibly not animal",
      ],
      Array [
        "bread",
        "Oh no! err: Error: possibly not animal",
      ],
      Array [
        "fructose",
        "Oh no! err: Error: possibly not animal",
      ],
      Array [
        "dragon",
        "dragon lives in MOUNTAINS",
      ],
    ]
  `);
});
