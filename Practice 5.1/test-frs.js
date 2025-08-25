import { describe, it, expect } from '@jest/globals';
import { revStr } from "./func-reverse-str.js";

describe("tests for revStr function", () => {
  it("should reverse string", () => expect(revStr("futball")).toBe("llabtuf"));
});
