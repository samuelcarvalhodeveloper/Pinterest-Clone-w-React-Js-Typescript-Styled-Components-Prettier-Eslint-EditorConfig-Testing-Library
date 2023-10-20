import { RefObject } from "react";
import { CARD_RIPPLE_BLOCK_DISPLAY_WHEN_ELEMENT_IS_HOVERED } from "../../../../../../../constants/pages/index/elements_styles/card/cardDisplayVisibilitiesConstants";

function showCardRippleEffect(
  cardRippleMoreOptionsRef: RefObject<HTMLElement>,
  cardRippleOverlayRef: RefObject<HTMLElement>,
): void {
  if (
    cardRippleMoreOptionsRef.current !== null &&
    cardRippleOverlayRef.current !== null
  ) {
    cardRippleMoreOptionsRef.current.style.display =
      CARD_RIPPLE_BLOCK_DISPLAY_WHEN_ELEMENT_IS_HOVERED;
    cardRippleOverlayRef.current.style.display =
      CARD_RIPPLE_BLOCK_DISPLAY_WHEN_ELEMENT_IS_HOVERED;
  }
}

export default showCardRippleEffect;
