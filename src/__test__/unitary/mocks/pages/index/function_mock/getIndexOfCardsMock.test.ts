import { describe, test, expect } from "@jest/globals";
import getIndexOfFullSetOfCardsMock from "../../../../../../mocks/pages/index/function_mock/get_index_of_card/implementation/getIndexOfCardsMock";
import { NUMBER_OF_HOW_MANY_CARDS_DATA_THE_COLLECTION_MUST_HAVE } from "../../../../../../constants/mocks/pages/index/cardGeneration/generation_iterations_index_numbers/numberOfHomeManyCardsDataTheCollectionMustHave";

describe("Test getIndexOfCardsMock Module Behavior", () => {
  test('Test If Function: "getIndexOfCardsMock()"; Generates And Return An Array With A Full Collection Of Card Mock Data Correctly', () => {
    expect(getIndexOfFullSetOfCardsMock().length).toEqual(
      NUMBER_OF_HOW_MANY_CARDS_DATA_THE_COLLECTION_MUST_HAVE,
    );
  });
});