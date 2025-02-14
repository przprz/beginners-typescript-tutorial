import { expect, it } from "vitest";

/// possible solutions:
/// - a type:
// type Components = { first: number; second: number; };
///
/// - or an interface:
interface Components {
  first: number,
  second: number,
}

export const addTwoNumbers = (params: Components) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
