import { describe, test, expect } from "@jest/globals";
import { NUMBER_OF_HOW_MANY_CARDS_DATA_THE_COLLECTION_MUST_HAVE } from "../../../../../../../../../../../constants/mocks/pages/index/cardGeneration/generation_iterations_index_numbers/numberOfHomeManyCardsDataTheCollectionMustHave";
import getIndexOfCardsMock from "../../../../../../../../../../../components/index/content/content_component/infrastructure/mocks/function_mock/get_index_of_card/implementation/getIndexOfCardsMock";

describe("Test getIndexOfCardsMock Module Behavior", () => {
  test('Test If Function: "getIndexOfCardsMock()"; Generates And Return An Array With A Full Collection Of Card Mock Data Correctly', () => {
    expect(getIndexOfCardsMock().length).toEqual(
      NUMBER_OF_HOW_MANY_CARDS_DATA_THE_COLLECTION_MUST_HAVE,
    );
  });
});
