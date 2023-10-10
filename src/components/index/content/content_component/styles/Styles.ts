import styled, { StyledComponent } from "styled-components";

const Styles: StyledComponent<"section", any, {}, never> = styled.section`
  .section__center {
    width: 100%;
    max-width: 176.4rem;
    margin: 0 auto;
    column-count: 7;
    text-align: center;
    gap: 0;
    column-width: 251px;
  }

  @media screen and (min-width: 1250px) and (max-width: 1718px) {
    .section__center {
      max-width: 126rem;
      column-count: 6;
    }
  }

  @media screen and (min-width: 1010px) and (max-width: 1249px) {
    .section__center {
      max-width: 100.8rem;
      column-count: 4;
    }
  }

  @media screen and (min-width: 755px) and (max-width: 1010px) {
    .section__center {
      max-width: 75.6rem;
      column-count: 3;
    }
  }

  @media screen and (max-width: 754px) {
    .section__center {
      max-width: 50.4rem;
      column-count: 2;
      column-width: initial;
    }
  }
`;

export default Styles;
