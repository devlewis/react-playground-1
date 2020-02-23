import leapYear from "./index";

it("should NOT be a leap year if divisible by 100, not 400", () => {
  const input = 1900;
  expect(leapYear(input)).toBe(false);
});

it("should not be a leap year if less than/equal to 1582", () => {
  expect(() => {
    leapYear(1580);
  }).toThrow();
});

it("should be a leap year if divisble by 400", () => {
  expect(leapYear(2000)).toBe(true);
});

it("should be a leap year if divisible by 4, not 100", () => {
  const input = 1984;
  expect(leapYear(input)).toBe(true);
});

it("should not be a leap year if NOT divisible by 4", () => {
  expect(leapYear(1983)).toBe(false);
});
