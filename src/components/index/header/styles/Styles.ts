import styled, { StyledComponent } from "styled-components";

const Styles: StyledComponent<"header", any, {}, never> = styled.header`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  .header__center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1.8rem 1.5rem 2.8rem;
    width: 100%;

    .header__navigation {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4.8rem;

      .header__logo {
        height: 100%;
        flex: 0 0 4.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        transition: background-color 150ms ease-in-out,
          transform 150ms ease-in-out;

        .header__icon {
          width: 2.4rem;
          height: 2.4rem;
        }
      }

      .header__logo:hover {
        background-color: rgba(0, 0, 0, 0.06);
      }

      .header__logo:active {
        background-color: rgba(0, 0, 0, 0.1);
        transform: scale(0.9);
      }

      .header__link {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        padding: 1.3rem 1.5rem;
        border-radius: 3rem;
        text-decoration: none;
        color: rgb(17, 17, 17);
        gap: 1rem;

        .header__home {
          width: 1.2rem;
        }
      }

      .header__link--clicked {
        background: rgb(17, 17, 17);
        color: white;
      }

      .header__link--toggle {
        display: none;
      }
    }

    .header__option {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;

      .header__searchbar {
        height: 4.8rem;
        width: 100%;
        background: #e9e9e9;
        border: none;
        border-radius: 3rem;
        display: flex;
        align-items: center;
        padding: 0 2rem;
        margin: 0 1rem;

        .header__label {
          width: 1.6rem;
          height: 1.6rem;

          .header__search {
            width: 100%;
            color: #767676;
          }
        }

        .header__input {
          width: 100%;
          height: 100%;
          border: none;
          background: none;
          padding: 0 1rem;
        }

        .header__input::placeholder {
          color: #333333;
          font-weight: 400;
        }
      }

      .header__searchbar--toggle {
        display: flex;
      }

      .header__shortcut {
        flex: 0 0 4.8rem;
        height: 4.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 50%;
        background: none;

        .header__shortcut__icon {
          height: 2.4rem;
        }
      }

      .header__shortcut--toggle {
        display: none;
      }

      .header__link--initial {
        display: flex;
      }

      .header__shortcut:hover {
        background: rgba(0, 0, 0, 0.1);
      }

      .header__profile {
        flex: 0 0 4.8rem;
        height: 4.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        .header__photo {
          width: 2.4rem;
          height: 2.4rem;
          background: #ffbd00;
          border-radius: 50%;
        }
      }

      .header__profile:hover {
        background: rgba(0, 0, 0, 0.1);
      }

      .header__settings {
        flex: 0 0 2.4rem;
        height: 2.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: none;
        background: none;
        transition: transform 150ms ease-in-out,
          background-color 150ms ease-in-out;

        .header__dropdown {
          width: 1.2rem;
        }
      }

      .header__settings:hover {
        background-color: rgba(0, 0, 0, 0.06);
      }

      .header__settings:active {
        background-color: rgba(0, 0, 0, 0.1);
        transform: scale(0.8);
      }
    }
  }

  @media screen and (max-width: 850px) {
    .header__center {
      justify-content: space-between;

      .header__navigation {
        .header__link--toggle {
          display: flex;
        }

        .header__link--initial {
          display: none;
        }
      }

      .header__option {
        width: initial;

        .header__shortcut--toggle {
          display: flex;
        }

        .header__searchbar--toggle {
          display: none;
        }
      }
    }
  }
`;

export default Styles;
