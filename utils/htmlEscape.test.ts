import { escape, unescape } from "./htmlEscape";

describe("escape", () => {
  it("특수 문자를 HTML 엔터티로 변환합니다.", () => {
    expect(escape("fred, barney, & pebbles")).toBe(
      "fred, barney, &amp; pebbles"
    );
    expect(escape("<div>Hello</div>")).toBe("&lt;div&gt;Hello&lt;/div&gt;");
    expect(escape('Hello "world"')).toBe("Hello &quot;world&quot;");
    expect(escape("It's a test")).toBe("It&#39;s a test");
  });

  it("HTML 엔터티로 변환할 문자가 없는 경우 원래 문자열을 반환합니다.", () => {
    expect(escape("Hello World")).toBe("Hello World");
    expect(escape("1234567890")).toBe("1234567890");
  });

  it("빈 문자열을 처리합니다.", () => {
    expect(escape("")).toBe("");
  });
});

describe("unescape", () => {
  it("HTML 엔터티를 특수 문자로 변환합니다.", () => {
    expect(unescape("fred, barney, &amp; pebbles")).toBe(
      "fred, barney, & pebbles"
    );
    expect(unescape("&lt;div&gt;Hello&lt;/div&gt;")).toBe("<div>Hello</div>");
    expect(unescape("Hello &quot;world&quot;")).toBe('Hello "world"');
    expect(unescape("It&#39;s a test")).toBe("It's a test");
  });

  it("특수 문자로 변환할 HTML 엔터티가 없는 경우 원래 문자열을 반환합니다.", () => {
    expect(unescape("Hello World")).toBe("Hello World");
    expect(unescape("1234567890")).toBe("1234567890");
  });

  it("빈 문자열을 처리합니다.", () => {
    expect(unescape("")).toBe("");
  });
});
