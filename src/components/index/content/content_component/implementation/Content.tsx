import { useState } from "react";
import Card from "../../card/implementation/Card";
import Styles from "../styles/Styles";

import getIndexOfFullSetOfCardsMock from "../../../../../mocks/pages/index/function_mock/get_index_of_card/implementation/getIndexOfCardsMock";
import IMAGE_ONE_CARD_DATA from "../../../../../mocks/pages/index/data_mock/card_image_data/imageOneCardData";
import IMAGE_TWO_CARD_DATA from "../../../../../mocks/pages/index/data_mock/card_image_data/imageTwoCardData";

function Content(): JSX.Element {
  const [cardElementsIndexArray] = useState<Array<number>>(
    getIndexOfFullSetOfCardsMock(),
  );

  return (
    <Styles>
      <div className="section__center">
        <Card
          creator={IMAGE_ONE_CARD_DATA.creator}
          image={IMAGE_ONE_CARD_DATA.image}
          title={IMAGE_ONE_CARD_DATA.title}
          link={IMAGE_ONE_CARD_DATA.link}
        />
        {cardElementsIndexArray.map((item) => (
          <Card
            creator={IMAGE_TWO_CARD_DATA.creator}
            image={IMAGE_TWO_CARD_DATA.image}
            title={IMAGE_TWO_CARD_DATA.title}
            link={IMAGE_TWO_CARD_DATA.link}
            key={item}
          />
        ))}
      </div>
    </Styles>
  );
}

export default Content;
