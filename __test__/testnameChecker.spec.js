import { verifyName } from "../src/client/js/nameChecker";

describe("Name Checker Feature Tests", () => {
  test("Verifies that the verifyName() function is available", () => {
    expect(verifyName).toBeTruthy();
  });
});