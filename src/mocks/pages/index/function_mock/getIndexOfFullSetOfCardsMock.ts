import { FIRST_CARD_INDEX_NUMBER } from "../../../../constants/mocks/pages/index/cardGeneration/generation_iterations_index_numbers/firstCardIndexNumber";
import { NUMBER_OF_HOW_MANY_CARDS_DATA_THE_COLLECTION_MUST_HAVE } from "../../../../constants/mocks/pages/index/cardGeneration/generation_iterations_index_numbers/numberOfHomeManyCardsDataTheCollectionMustHave";

function getIndexOfFullSetOfCardsMock(): Array<number> {
  const cardElementsIndexArrayMock: Array<number> = [];

  for (
    let i = FIRST_CARD_INDEX_NUMBER;
    i < NUMBER_OF_HOW_MANY_CARDS_DATA_THE_COLLECTION_MUST_HAVE;
    i++
  ) {
    cardElementsIndexArrayMock.push(i);
  }

  return cardElementsIndexArrayMock;
}

export default getIndexOfFullSetOfCardsMock;
