import { submitURL } from "../src/client/js/formHandler";

describe("Form Submission Functionality Tests", () => {
  test("Checks if the submitURL() function exists", () => {
    expect(submitURL).toBeTruthy();
  });
});