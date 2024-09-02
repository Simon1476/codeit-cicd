import chunk from "./chuck";

describe("chunk", () => {
  const array = [1, 2, 3, 4, 5];

  it("should split array into chunks of specified size", () => {
    expect(chunk(array, 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk(array, 3)).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });

  it("should return an empty array if `size` is 0", () => {
    expect(chunk(array, 0)).toEqual([]);
  });

  it("should return an empty array if `size` is less than 1", () => {
    expect(chunk(array, -1)).toEqual([]);
    expect(chunk(array, -5)).toEqual([]);
  });

  it("should return an empty array if the input array is empty", () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it("should return the entire array in one chunk if `size` is greater than array length", () => {
    expect(chunk(array, 10)).toEqual([[1, 2, 3, 4, 5]]);
  });

  it("should handle `null` or `undefined` array inputs", () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
  });

  it("should default to chunk size of 1 if no size is provided", () => {
    expect(chunk(array)).toEqual([[1], [2], [3], [4], [5]]);
  });

  it("should work with arrays of different types", () => {
    const mixedArray = ["a", 1, { key: "value" }, [1, 2], true];
    expect(chunk(mixedArray, 2)).toEqual([
      ["a", 1],
      [{ key: "value" }, [1, 2]],
      [true],
    ]);
  });

  it("should handle `size` greater than 0 and less than 1 correctly", () => {
    expect(chunk(array, 0.5)).toEqual([]);
  });
});
