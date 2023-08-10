import { describe, test, expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import Content from "../../../../../components/content/Content";
import { CARD_IMAGE_ALT_TEXT } from "../../../../../constants/pages/index/elements_alt_text/card/cardImageAltText";
import IMAGE_ONE_CARD_DATA from "../../../../../mocks/pages/index/data_mock/card_image_data/imageOneCardData";
import {
  CARD_CONTAINER_TEST_ID,
  CARD_RIPPLE_EFFECT_OVERLAY_TEST_ID,
  CARD_RIPPLE_MORE_OPTIONS_CONTAINER_TEST_ID,
} from "../../../../constants/pages/index/pageElementsTestIdConstants";
import { FIRST_INDEX_OF_THE_ARRAY } from "../../../../constants/firstIndexOfTheArray";
import {
  CARD_RIPPLE_BLOCK_DISPLAY_WHEN_ELEMENT_IS_HOVERED,
  CARD_RIPPLE_NONE_DISPLAY_WHEN_ELEMENT_IS_NOT_HOVERED,
} from "../../../../../constants/pages/index/elements_styles/card/cardDisplayVisibilitiesConstants";

describe('Test "Content" Component Behavior', () => {
  test("Test If Elements Are Placed Correctly", () => {
    const { creator } = IMAGE_ONE_CARD_DATA;

    const { findByAltText } = render(<Content />);

    expect(findByAltText(CARD_IMAGE_ALT_TEXT(creator))).toBeTruthy();
  });

  test("Test If Card Ripple Effect Of The First Card Is Shown Correctly", () => {
    const { getAllByTestId } = render(<Content />);

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
    const { getAllByTestId } = render(<Content />);

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
