import { describe, test, expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import Card from "../../../../../../../components/index/content/card/implementation/Card";
import { CARD_IMAGE_ALT_TEXT } from "../../../../../../../constants/pages/index/elements_alt_text/card/cardImageAltText";
import IMAGE_ONE_CARD_DATA from "../../../../../../../mocks/pages/index/data_mock/card_image_data/imageOneCardData";
import {
  CARD_CONTAINER_TEST_ID,
  CARD_RIPPLE_EFFECT_OVERLAY_TEST_ID,
  CARD_RIPPLE_MORE_OPTIONS_CONTAINER_TEST_ID,
} from "../../../../../../constants/pages/index/pageElementsTestIdConstants";
import {
  CARD_RIPPLE_BLOCK_DISPLAY_WHEN_ELEMENT_IS_HOVERED,
  CARD_RIPPLE_NONE_DISPLAY_WHEN_ELEMENT_IS_NOT_HOVERED,
} from "../../../../../../../constants/pages/index/elements_styles/card/cardDisplayVisibilitiesConstants";

describe('Test "Card" Component Behavior', () => {
  test("Test If Elements Are Placed Correctly", () => {
    const { creator, image, title, link } = IMAGE_ONE_CARD_DATA;

    const { getByAltText } = render(
      <Card
        creator={creator}
        image={image}
        title={title}
        link={link}
      />,
    );

    expect(getByAltText(CARD_IMAGE_ALT_TEXT(creator))).toBeTruthy();
  });

  test("Test If Card Ripple Effect Is Shown Correctly", () => {
    const { creator, image, title, link } = IMAGE_ONE_CARD_DATA;

    const { getByTestId } = render(
      <Card
        creator={creator}
        image={image}
        title={title}
        link={link}
      />,
    );

    fireEvent.mouseOver(getByTestId(CARD_CONTAINER_TEST_ID));

    expect(
      window.getComputedStyle(
        getByTestId(CARD_RIPPLE_MORE_OPTIONS_CONTAINER_TEST_ID),
      ).display,
    ).toEqual(CARD_RIPPLE_BLOCK_DISPLAY_WHEN_ELEMENT_IS_HOVERED);
    expect(
      window.getComputedStyle(getByTestId(CARD_RIPPLE_EFFECT_OVERLAY_TEST_ID))
        .display,
    ).toEqual(CARD_RIPPLE_BLOCK_DISPLAY_WHEN_ELEMENT_IS_HOVERED);
  });

  test("Test If Card Ripple Effect Is Toggled Correctly", () => {
    const { creator, image, title, link } = IMAGE_ONE_CARD_DATA;

    const { getByTestId } = render(
      <Card
        creator={creator}
        image={image}
        title={title}
        link={link}
      />,
    );

    fireEvent.mouseOver(getByTestId(CARD_CONTAINER_TEST_ID));
    fireEvent.mouseLeave(getByTestId(CARD_CONTAINER_TEST_ID));

    expect(
      window.getComputedStyle(
        getByTestId(CARD_RIPPLE_MORE_OPTIONS_CONTAINER_TEST_ID),
      ).display,
    ).toEqual(CARD_RIPPLE_NONE_DISPLAY_WHEN_ELEMENT_IS_NOT_HOVERED);
    expect(
      window.getComputedStyle(getByTestId(CARD_RIPPLE_EFFECT_OVERLAY_TEST_ID))
        .display,
    ).toEqual(CARD_RIPPLE_NONE_DISPLAY_WHEN_ELEMENT_IS_NOT_HOVERED);
  });
});
