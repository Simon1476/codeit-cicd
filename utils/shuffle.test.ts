import shuffle from "./shuffle"; // shuffle 함수의 경로를 맞게 설정하세요

describe("shuffle", () => {
  test("should shuffle the array and return a new array", () => {
    const input = [1, 2, 3, 4];
    const result = shuffle(input);

    // 배열의 길이가 같아야 한다
    expect(result.length).toBe(input.length);

    // 배열의 모든 요소가 원본 배열에 있어야 한다
    expect(result.sort()).toEqual(input.sort());

    // 결과가 원본 배열과 동일하지 않을 가능성을 체크 (단일 테스트 케이스이므로 100% 확률은 아님)
    expect(result).not.toEqual(input);
  });

  test("should return an empty array when input is an empty array", () => {
    const result = shuffle([]);
    expect(result).toEqual([]);
  });

  test("should return the same single-element array when input has only one element", () => {
    const input = [42];
    const result = shuffle(input);
    expect(result).toEqual(input);
  });

  test("should handle arrays with all identical elements", () => {
    const input = [1, 1, 1, 1];
    const result = shuffle(input);
    expect(result).toEqual(input); // 모든 요소가 동일하므로 결과가 원본과 같아야 함
  });

  test("should not modify the original array", () => {
    const input = [1, 2, 3, 4];
    const originalInput = [...input]; // 원본 배열의 복사본을 만들어 둡니다
    shuffle(input);
    expect(input).toEqual(originalInput); // 원본 배열이 변하지 않아야 합니다
  });
});
