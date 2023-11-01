import { it, describe, expect } from "bun:test";

describe("env", () => {
  it("should be able to access correct env vars", () => {
    expect(Bun.env.FOO).toBe("test");
  });
});
