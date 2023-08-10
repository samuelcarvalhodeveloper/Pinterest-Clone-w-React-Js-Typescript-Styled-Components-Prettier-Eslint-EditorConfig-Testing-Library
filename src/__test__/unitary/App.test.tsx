import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import { HEADER_LOGO_ALT_TEXT } from "../constants/pages/index/pageElementsAltTextConstants";

describe("Test App Component Behavior", () => {
  test("Test If Index Router Was Configured Correctly", () => {
    const { getByAltText } = render(<App />, { wrapper: BrowserRouter });

    expect(getByAltText(HEADER_LOGO_ALT_TEXT)).toBeTruthy();
  });
});
