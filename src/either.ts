import { identity } from "./util";

export const left = <T>(x: T) => ({
  map: () => left(x),
  fold: <U>(f: (x: T) => U, g: unknown) => f(x)
});

export const right = <T>(x: T) => ({
  map: <U>(f: (x: T) => U) => right(f(x)),
  fold: <U>(f: unknown, g: (x: T) => U) => g(x)
});

export const animalHabitat: {
  [key: string]: string;
} = {
  capybara: "woodland",
  rabbit: "woodland",
  tuna: "sea",
  dragon: "mountains"
};

export const fromNullable = <T>(value: T | null | undefined) =>
  value === null || value === undefined
    ? left(new Error("possibly not animal"))
    : right(value);

export const getAnimalHabitat = (animal: string) =>
  fromNullable(animalHabitat[animal])
    .map(habitat => habitat.toLocaleUpperCase())
    .map(habitat => `${animal} lives in ${habitat}`)
    .fold(err => `Oh no! err: ${err}`, identity);
