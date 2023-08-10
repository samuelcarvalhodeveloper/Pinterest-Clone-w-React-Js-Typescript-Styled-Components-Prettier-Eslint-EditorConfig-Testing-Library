import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Header from "../../../../components/header/Header";
import { HEADER_LOGO_ALT_TEXT } from "../../../constants/pages/index/pageElementsAltTextConstants";

describe('Test "Header" Component Behavior', () => {
  test("Test If Elements Are Placed Correctly", () => {
    const { getByAltText } = render(<Header />);

    expect(getByAltText(HEADER_LOGO_ALT_TEXT)).toBeTruthy();
  });
});
