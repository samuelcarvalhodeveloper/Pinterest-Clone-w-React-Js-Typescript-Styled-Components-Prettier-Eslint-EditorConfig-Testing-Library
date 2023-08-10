import { useEffect, useState } from "react";
import Card from "./card/Card";
import Styled from "./Styled";

import getIndexOfFullSetOfCardsMock from "../../mocks/pages/index/function_mock/getIndexOfFullSetOfCardsMock";
import IMAGE_ONE_CARD_DATA from "../../mocks/pages/index/data_mock/card_image_data/imageOneCardData";
import IMAGE_TWO_CARD_DATA from "../../mocks/pages/index/data_mock/card_image_data/imageTwoCardData";

function Content(): JSX.Element {
  const [cardElementsIndexArray] = useState<Array<number>>(
    getIndexOfFullSetOfCardsMock(),
  );

  useEffect(() => {}, []);

  return (
    <Styled>
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
    </Styled>
  );
}

export default Content;
