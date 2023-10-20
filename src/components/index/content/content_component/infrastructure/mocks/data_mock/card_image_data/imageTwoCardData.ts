import { CARD_EXTERNAL_REFERENCE_DATA_IMAGE_LINK } from "../../../../../../../../constants/mocks/pages/index/card_data_value/card_images_information/cardExternalReferenceImageLinkConstants";
import { CARD_IMAGE_TITLE } from "../../../../../../../../constants/mocks/pages/index/card_data_value/card_images_information/cardImageTitleConstants";
import { CREATOR_NAME } from "../../../../../../../../constants/mocks/pages/index/card_data_value/card_images_information/imageCreatorNameConstants";
import { IMAGE_TWO_SOURCE_LINK } from "../../../../../../../../constants/mocks/pages/index/card_data_value/card_images_information/images_source_links/imageTwoSourceLinkConstant";
import { CardsData } from "../../../../../../../../types/pages/index/CardsData";

const IMAGE_TWO_CARD_DATA: CardsData = {
  creator: CREATOR_NAME,
  image: IMAGE_TWO_SOURCE_LINK,
  title: CARD_IMAGE_TITLE,
  link: CARD_EXTERNAL_REFERENCE_DATA_IMAGE_LINK,
};

export default IMAGE_TWO_CARD_DATA;
