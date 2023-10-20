import { RefObject } from "react";
import { CARD_RIPPLE_NONE_DISPLAY_WHEN_ELEMENT_IS_NOT_HOVERED } from "../../../../../../../constants/pages/index/elements_styles/card/cardDisplayVisibilitiesConstants";

function hideCardRippleEffect(
  cardRippleMoreOptionsRef: RefObject<HTMLElement>,
  cardRippleOverlayRef: RefObject<HTMLElement>,
): void {
  if (cardRippleMoreOptionsRef.current && cardRippleOverlayRef.current) {
    cardRippleMoreOptionsRef.current.style.display =
      CARD_RIPPLE_NONE_DISPLAY_WHEN_ELEMENT_IS_NOT_HOVERED;
    cardRippleOverlayRef.current.style.display =
      CARD_RIPPLE_NONE_DISPLAY_WHEN_ELEMENT_IS_NOT_HOVERED;
  }
}

export default hideCardRippleEffect;
