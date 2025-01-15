import { validateURL } from "../src/client/js/urlChecker";

describe("URL Checker Functionality Tests", () => {
  test("Checks if the isValidURL() function is defined", () => {
    expect(validateURL).toBeTruthy();
  });
});