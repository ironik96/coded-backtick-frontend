import boardStore from "./boardStore";
import instance from "./instance";

const BASE_URL = "/rewards";

class RewardStore {
  /** Reward Schema
   * title
   * cryptoAmount
   * price
   * qty
   * boardId
   * image
   */
  newCryptoReward = (boardId) => ({
    cryptoAmount: "",
    price: "",
    qty: "",
    boardId,
  });

  addReward = async (reward) => {
    if (this.isNew(reward)) return;
    const [response, error] = await tryCatch(() =>
      instance.post(BASE_URL, reward)
    );
    if (error) return console.error(error.message);
    boardStore.board.rewards = [...boardStore.board.rewards, response.data];
  };

  isNew = (reward) =>
    reward.cryptoAmount === "" && reward.price === "" && reward.qty === "";
}

async function tryCatch(promise) {
  try {
    const response = await promise();
    return [response, null];
  } catch (error) {
    return [null, error];
  }
}

export default new RewardStore();
