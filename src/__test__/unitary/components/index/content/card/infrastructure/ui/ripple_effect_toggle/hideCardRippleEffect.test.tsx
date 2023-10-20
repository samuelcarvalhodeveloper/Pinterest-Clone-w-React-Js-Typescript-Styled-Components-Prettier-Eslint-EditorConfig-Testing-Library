import { describe, test, expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import {
  CARD_CONTAINER_TEST_ID,
  CARD_RIPPLE_EFFECT_OVERLAY_TEST_ID,
  CARD_RIPPLE_MORE_OPTIONS_CONTAINER_TEST_ID,
} from "../../../../../../../../constants/pages/index/pageElementsTestIdConstants";
import { CARD_RIPPLE_NONE_DISPLAY_WHEN_ELEMENT_IS_NOT_HOVERED } from "../../../../../../../../../constants/pages/index/elements_styles/card/cardDisplayVisibilitiesConstants";
import Card from "../../../../../../../../../components/index/content/card/implementation/Card";
import IMAGE_ONE_CARD_DATA from "../../../../../../../../../components/index/content/content_component/infrastructure/mocks/data_mock/card_image_data/imageOneCardData";

describe("Test Module hideCardRippleEffect Behavior", () => {
  test('Test If Method: "hideCardRippleEffect"; Turns The Card Ripple Effect Overlay And More Options Container Display To None Correctly', () => {
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
