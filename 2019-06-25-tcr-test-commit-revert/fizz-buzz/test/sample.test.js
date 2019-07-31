const assert = require("assert");

const FizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz"
  if (num % 3 === 0) return "Fizz" 
  if (num % 5 === 0) return "Buzz"
  return num;
}

describe("FizzBuzz", () => {
  it("passing number should return the same number", () => {
    assert.strictEqual(1, FizzBuzz(1));
    assert.strictEqual(2, FizzBuzz(2));
    assert.strictEqual(4, FizzBuzz(4));
  });
  it("Passing number divisible by 3 should return Fizz", () => {
    assert.strictEqual("Fizz", FizzBuzz(3));
    assert.strictEqual("Fizz", FizzBuzz(6));
    assert.strictEqual("Fizz", FizzBuzz(9));

  });
  it("Passing number divisible by 5 should return Buzz", () => {
    assert.strictEqual("Buzz", FizzBuzz(5));
    assert.strictEqual("Buzz", FizzBuzz(10));
    assert.strictEqual("Buzz", FizzBuzz(25));

  });
  it("Passing number divisible by 3 and 5 should return FizzBuzz", () => {
    assert.strictEqual("FizzBuzz", FizzBuzz(15));
    assert.strictEqual("FizzBuzz", FizzBuzz(30));
    assert.strictEqual("FizzBuzz", FizzBuzz(45));
  });
});
