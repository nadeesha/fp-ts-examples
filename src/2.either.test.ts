import { fromNullable } from "./2.either";
import { identity } from "./util";

export const animalHabitat: {
  [key: string]: string;
} = {
  capybara: "woodland",
  rabbit: "woodland",
  tuna: "sea",
  dragon: "mountains"
};

export const getAnimalHabitat = (animal: string) =>
  fromNullable(animalHabitat[animal])
    .map(habitat => habitat.toLocaleUpperCase())
    .map(habitat => `${animal} lives in ${habitat}`)
    .fold(err => `Oh no! err: ${err}`, identity);

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
        "Oh no! err: null",
      ],
      Array [
        "bread",
        "Oh no! err: null",
      ],
      Array [
        "fructose",
        "Oh no! err: null",
      ],
      Array [
        "dragon",
        "dragon lives in MOUNTAINS",
      ],
    ]
  `);
});
