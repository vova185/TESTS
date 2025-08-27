
import { validate } from "./remove-vowels.js";

describe("tests for validate function", () => {
  it("removes vowels from an English string", () => expect(validate("Hello world")).toBe("Hll wrld"));
  it("removes vowels from a Russian string", () => expect(validate("Второй юнит-тест")).toBe("Втрй нт-тст"));
  it("removes vowels from string with numbers, spaces, and special characters", () => expect(validate("789$ AFRIKA!<> Зайчик-?")).toBe("789$ FRK!<> Зйчк-?"));
});
