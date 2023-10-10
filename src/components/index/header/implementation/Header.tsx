import Styles from "../styles/Styles";
import PinterestLogo from "../../../../assets/imgs/pages/index/ui_icons/header/PinterestLogo.svg";
import CreateSectionDropdownIcon from "../../../../assets/imgs/pages/index/ui_icons/header/CreateSectionDropdownIcon.svg";
import SearchMagnifierIcon from "../../../../assets/imgs/pages/index/ui_icons/header/SearchMagnifierIcon.svg";
import NotificationBellIcon from "../../../../assets/imgs/pages/index/ui_icons/header/NotificationBellIcon.svg";
import DirectMessagesBalloonIcon from "../../../../assets/imgs/pages/index/ui_icons/header/DirectMessagesBalloonIcon.svg";
import ProfileDropdownIcon from "../../../../assets/imgs/pages/index/ui_icons/header/ProfileDropdownIcon.svg";

function Header(): JSX.Element {
  return (
    <Styles>
      <div className="header__center">
        <div className="header__navigation">
          <a
            href="#"
            className="header__logo">
            <img
              src={PinterestLogo}
              alt="Pinterest Logo"
              className="header__icon"
            />
          </a>
          <a
            href="#"
            className="header__link header__link--clicked header__link--initial">
            Home
          </a>
          <a
            href="#"
            className="header__link header__link--initial">
            Today
          </a>
          <a
            href="#"
            className="header__link header__link--initial">
            Create
            <img
              src={CreateSectionDropdownIcon}
              alt="Home dropdown"
              className="header__home"
            />
          </a>
          <a
            href="#"
            className="header__link header__link--toggle">
            Home
            <img
              src={CreateSectionDropdownIcon}
              alt="Home dropdown"
              className="header__home"
            />
          </a>
        </div>
        <div className="header__option">
          <div className="header__searchbar header__searchbar--toggle">
            <div className="header__label">
              <img
                src={SearchMagnifierIcon}
                alt="Search label"
                className="header__search"
              />
            </div>
            <input
              type="text"
              className="header__input"
              placeholder="Search"
            />
          </div>
          <button
            type="button"
            className="header__shortcut header__shortcut--toggle">
            <img
              src={SearchMagnifierIcon}
              className="header__shortcut__icon"
            />
          </button>
          <button
            type="button"
            className="header__shortcut">
            <img
              src={NotificationBellIcon}
              className="header__shortcut__icon"
            />
          </button>
          <button
            type="button"
            className="header__shortcut">
            <img
              src={DirectMessagesBalloonIcon}
              className="header__shortcut__icon"
            />
          </button>
          <a
            href="#"
            className="header__profile">
            <div className="header__photo" />
          </a>
          <button
            className="header__settings"
            type="button">
            <img
              src={ProfileDropdownIcon}
              alt="settings"
              className="header__dropdown"
            />
          </button>
        </div>
      </div>
    </Styles>
  );
}

export default Header;
