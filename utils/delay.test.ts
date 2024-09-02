import delay from "./delay";

describe("delay", () => {
  const args = ["Simon"];

  it("should call the function with provided arguments after specified delay", (done) => {
    function callback(...receivedArgs: any[]) {
      try {
        expect(receivedArgs[0]).toBe("Simon");
        done();
      } catch (error) {
        done(error);
      }
    }

    delay(callback, 1000, ...args);
  });

  it("should execute asynchronously", (done) => {
    let called = false;

    function callback() {
      called = true;
      try {
        expect(called).toBe(true);
        done();
      } catch (error) {
        done(error);
      }
    }

    delay(callback, 100);
    expect(called).toBe(false);
  });

  // it("should throw a TypeError when func is not a function", (done) => {
  //   try {
  //     delay(null as any, 1000); // 함수가 아닌 값을 전달하여 호출
  //   } catch (error) {
  //     expect(error).toBeInstanceOf(TypeError); // TypeError가 발생해야 함
  //     expect(error.message).toBe("Expected a function");
  //     done(); // 예외가 발생했을 때 done 호출
  //   }
  // });
});
