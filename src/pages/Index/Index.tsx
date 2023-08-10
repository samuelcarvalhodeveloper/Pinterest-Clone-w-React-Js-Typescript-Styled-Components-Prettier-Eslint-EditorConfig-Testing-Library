import Header from "../../components/header/Header";
import Content from "../../components/content/Content";
import Styled from "./Styled";

function Index(): JSX.Element {
  return (
    <Styled>
      <Header />
      <div className="header__space" />
      <Content />
    </Styled>
  );
}

export default Index;
