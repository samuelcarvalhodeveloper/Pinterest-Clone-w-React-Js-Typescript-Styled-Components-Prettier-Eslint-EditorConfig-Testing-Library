import { describe, test, expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import Index from "../../pages/Index/implementation/Index";
import { HEADER_LOGO_ALT_TEXT } from "../constants/pages/index/pageElementsAltTextConstants";
import {
  CARD_CONTAINER_TEST_ID,
  CARD_RIPPLE_EFFECT_OVERLAY_TEST_ID,
  CARD_RIPPLE_MORE_OPTIONS_CONTAINER_TEST_ID,
} from "../constants/pages/index/pageElementsTestIdConstants";
import {
  CARD_RIPPLE_BLOCK_DISPLAY_WHEN_ELEMENT_IS_HOVERED,
  CARD_RIPPLE_NONE_DISPLAY_WHEN_ELEMENT_IS_NOT_HOVERED,
} from "../../constants/pages/index/elements_styles/card/cardDisplayVisibilitiesConstants";
import { FIRST_INDEX_OF_THE_ARRAY } from "../constants/firstIndexOfTheArray";

describe("Test Index Domain Behavior", () => {
  test("Test If Element Are Placed Correctly", () => {
    const { getByAltText } = render(<Index />);

    expect(getByAltText(HEADER_LOGO_ALT_TEXT)).toBeTruthy();
  });

  test("Test If Card Ripple Effect Of The First Card Is Shown Correctly", () => {
    const { getAllByTestId } = render(<Index />);

    fireEvent.mouseOver(
      getAllByTestId(CARD_CONTAINER_TEST_ID)[FIRST_INDEX_OF_THE_ARRAY],
    );

    expect(
      window.getComputedStyle(
        getAllByTestId(CARD_RIPPLE_MORE_OPTIONS_CONTAINER_TEST_ID)[
          FIRST_INDEX_OF_THE_ARRAY
        ],
      ).display,
    ).toEqual(CARD_RIPPLE_BLOCK_DISPLAY_WHEN_ELEMENT_IS_HOVERED);
    expect(
      window.getComputedStyle(
        getAllByTestId(CARD_RIPPLE_EFFECT_OVERLAY_TEST_ID)[
          FIRST_INDEX_OF_THE_ARRAY
        ],
      ).display,
    ).toEqual(CARD_RIPPLE_BLOCK_DISPLAY_WHEN_ELEMENT_IS_HOVERED);
  });

  test("Test If Card Ripple Effect Of The First Card Is Toggled Correctly", () => {
    const { getAllByTestId } = render(<Index />);

    fireEvent.mouseOver(
      getAllByTestId(CARD_CONTAINER_TEST_ID)[FIRST_INDEX_OF_THE_ARRAY],
    );
    fireEvent.mouseLeave(
      getAllByTestId(CARD_CONTAINER_TEST_ID)[FIRST_INDEX_OF_THE_ARRAY],
    );

    expect(
      window.getComputedStyle(
        getAllByTestId(CARD_RIPPLE_MORE_OPTIONS_CONTAINER_TEST_ID)[
          FIRST_INDEX_OF_THE_ARRAY
        ],
      ).display,
    ).toEqual(CARD_RIPPLE_NONE_DISPLAY_WHEN_ELEMENT_IS_NOT_HOVERED);
    expect(
      window.getComputedStyle(
        getAllByTestId(CARD_RIPPLE_EFFECT_OVERLAY_TEST_ID)[
          FIRST_INDEX_OF_THE_ARRAY
        ],
      ).display,
    ).toEqual(CARD_RIPPLE_NONE_DISPLAY_WHEN_ELEMENT_IS_NOT_HOVERED);
  });
});
