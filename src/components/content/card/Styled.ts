import styled, { StyledComponent } from "styled-components";

const Styled: StyledComponent<"article", any, {}, never> = styled.article`
  display: block;
  width: 100%;
  max-width: 25.2rem;
  overflow: hidden;
  display: flex;
  flex-flow: column wrap;
  padding: 0 0.8rem 1.6rem 0.8rem;

  .article__content {
    position: relative;

    .article__backdrop {
      display: none;
      position: absolute;
      z-index: 0;
      width: 100%;
      height: calc(100% - 0.4rem);
      border-radius: 2rem;
      cursor: zoom-in;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .article__image {
      width: 100%;
      height: 100%;
      border-radius: 2rem;
    }

    .article__option {
      display: none;

      .article__save {
        background: rgb(230, 0, 35);
        text-decoration: none;
        color: white;
        padding: 1.3rem 1.6rem;
        z-index: 1;
        display: inline-block;
        border-radius: 3rem;
        position: absolute;
        right: 1.2rem;
        top: 1.2rem;
        font-weight: 600;
      }

      .article__save:hover {
        background: #ad081b;
      }

      .article__more {
        position: absolute;
        bottom: 1.5rem;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        gap: 1rem;
        z-index: 100;
        width: 100%;

        .article__shortcut {
          background: rgba(255, 255, 255, 0.8);
          padding: 0.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 3rem;
          gap: 1.5rem;
          width: 3.3rem;
          height: 3.3rem;
          border: none;
          cursor: pointer;
          z-index: 100;
          transition: background-color 150ms ease-in-out;
          text-decoration: none;

          .article__truncate {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            position: relative;
            left: -0.3rem;
            text-decoration: none;
            font-weight: 600;
            color: #111111;
          }

          .article__action {
            width: 1.6rem;
          }

          .article__action--off {
            width: 0.9rem;
            position: relative;
            left: 0.5rem;
            top: 0.2rem;
          }
        }

        .article__shortcut--link {
          width: 100%;
          max-width: 132px;
        }

        .article__shortcut:hover {
          background-color: rgba(255, 255, 255, 1);
        }
      }
    }
  }

  .article__info {
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    width: 100%;
    gap: 0.5rem;
    padding: 0 1rem;

    .article__title {
      align-self: flex-start;
      font-size: 1.4rem;
      text-decoration: none;

      .article__title__element {
        font-size: 1.4rem;
        color: #111111;
        font-weight: 600;
      }
    }

    .article__creator {
      display: flex;
      align-self: flex-start;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5rem;
      text-decoration: none;

      .article__creator__img {
        width: 3.2rem;
        height: 3.2rem;
        background: #ffbd00;
        border-radius: 50%;
      }

      .article__creator__name {
        font-size: 1.4rem;
        font-weight: 400;
        color: #111111;
      }
    }
  }
`;

export default Styled;
