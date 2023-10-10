import Header from "../../../components/index/header/implementation/Header";
import Content from "../../../components/index/content/content_component/implementation/Content";
import Styles from "../styles/Styles";

function Index(): JSX.Element {
  return (
    <Styles>
      <Header />
      <div className="header__space" />
      <Content />
    </Styles>
  );
}

export default Index;
