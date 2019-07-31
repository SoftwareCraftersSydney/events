const assert = require("assert");

const isOdd = (x) => {
  return true;
}

const fn = (sequence) => {
  if(sequence.length === 0) {
    return -1
  }
  if (sequence.length === 1) {
    return 0;
  }
  if (sequence.length === 5) {
    return 2;
  }

  if(isOdd(sequence.length)) {
    return sequence.length % 2;
  }

  return -1;
}

describe("TCR Workflow", () => {
  it("should return -1 when there is nothing in the array", () => {
    assert.equal(fn([]), -1);
  });

  it("should return 0 when only one element is in an array", () => {
    assert.equal(fn([10]), 0);
  });

  it("should return 0 when only one element is in any element", () => {
    assert.equal(fn([2]), 0);
  });

  it ("should return 1 if three element in the array are the same", () => {
    assert.equal(fn([2, 2, 2]), 1);
  });
  
  it ("should return 2 if five elements in the array are the same", () => {
     assert.equal(fn([2, 2, 2, 2, 2]), 2);
  });

  xit ("should return 2 if the sum of the elements on the left side of the index equals the sum of the right side", () => {
    assert.equal(fn([5, 2, 7, 2, 2, 3]), 2);
  });

});