import { useRef } from "react";
import OutSideAppSharingIcon from "../../../../../assets/imgs/pages/index/ui_icons/cards/OutSideAppSharingIcon.svg";
import CardMoreOptionsIcon from "../../../../../assets/imgs/pages/index/ui_icons/cards/CardMoreOptionsIcon.svg";
import RedirectLinkArrowIcon from "../../../../../assets/imgs/pages/index/ui_icons/cards/RedirectLinkArrowIcon.svg";
import Styles from "../styles/Styles";
import { CARD_IMAGE_ALT_TEXT } from "../../../../../constants/pages/index/elements_alt_text/card/cardImageAltText";
import { CardsData } from "../../../../../types/pages/index/CardsData";
import {
  CARD_CONTAINER_TEST_ID,
  CARD_RIPPLE_EFFECT_OVERLAY_TEST_ID,
  CARD_RIPPLE_MORE_OPTIONS_CONTAINER_TEST_ID,
} from "../../../../../__test__/constants/pages/index/pageElementsTestIdConstants";
import showCardRippleEffect from "../infrastructure/ui/ripple_effect_toggle/showCardRippleEffect";
import hideCardRippleEffect from "../infrastructure/ui/ripple_effect_toggle/hideCardRippleEffect";

function Card(props: CardsData): JSX.Element {
  const { creator, image, title, link } = props;

  const cardRippleMoreOptionsRef = useRef<HTMLDivElement>(null);
  const cardRippleOverlayRef = useRef<HTMLDivElement>(null);

  return (
    <Styles>
      <div
        className="article__content"
        data-testid={CARD_CONTAINER_TEST_ID}
        onMouseEnter={() => {
          showCardRippleEffect(cardRippleMoreOptionsRef, cardRippleOverlayRef);
        }}
        onMouseLeave={() => {
          hideCardRippleEffect(cardRippleMoreOptionsRef, cardRippleOverlayRef);
        }}>
        <div
          className="article__option"
          data-testid={CARD_RIPPLE_MORE_OPTIONS_CONTAINER_TEST_ID}
          ref={cardRippleMoreOptionsRef}>
          <a
            href="#"
            className="article__save">
            Save
          </a>
          <div className="article__more">
            <a
              href={link}
              className="article__shortcut article__shortcut--link"
              target="_blank"
              rel="noreferrer">
              <img
                src={RedirectLinkArrowIcon}
                alt="article redirect"
                className="article__action article__action--off"
              />
              <p className="article__truncate">{link}</p>
            </a>
            <button
              type="button"
              className="article__shortcut">
              <img
                src={OutSideAppSharingIcon}
                alt="Share image"
                className="article__action"
              />
            </button>
            <button
              type="button"
              className="article__shortcut">
              <img
                src={CardMoreOptionsIcon}
                alt="Option action"
                className="article__action"
              />
            </button>
          </div>
        </div>
        <div
          data-testid={CARD_RIPPLE_EFFECT_OVERLAY_TEST_ID}
          className="article__backdrop"
          ref={cardRippleOverlayRef}
        />
        <img
          src={image}
          alt={CARD_IMAGE_ALT_TEXT(creator)}
          className="article__image"
        />
      </div>
      <div className="article__info">
        <a
          href="#"
          className="article__title">
          <h3 className="article__title__element">{title}</h3>
        </a>
        <a
          href="#"
          className="article__creator">
          <div className="article__creator__img" />
          <h2 className="article__creator__name">{creator}</h2>
        </a>
      </div>
    </Styles>
  );
}

export default Card;
