import React from "react";
import rewardStore from "../../../stores/rewardStore";

const RewardForm = ({ reward, setReward, closeModal }) => {
  const isNew = true;

  const handleChange = (event) => {
    setReward({
      ...reward,
      [event.target.name]: event.target.valueAsNumber,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    rewardStore.addReward(reward);
    closeModal();
  };
  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <h1 className="text-black">{isNew ? "New Reward" : "Update Reward"}</h1>
      <input
        className="p-2 bg-light-grey rounded-md focus-visible:outline-none text-black"
        type="number"
        name="cryptoAmount"
        placeholder="Backtick Crypto Amount"
        pattern="\d"
        value={reward.cryptoAmount}
        onChange={handleChange}
      ></input>

      <input
        className="p-2 bg-light-grey rounded-md focus-visible:outline-none text-black"
        type="number"
        name="price"
        placeholder="Price in Points"
        pattern="\d"
        value={reward.price}
        onChange={handleChange}
      ></input>

      <input
        className="p-2 bg-light-grey rounded-md focus-visible:outline-none text-black"
        type="number"
        name="qty"
        placeholder="Quantity"
        pattern="\d"
        value={reward.qty}
        onChange={handleChange}
      ></input>

      <button type="submit" className="bg-blue text-white rounded-md p-2">
        {isNew ? "Add" : "Update"}
      </button>
    </form>
  );
};

export default RewardForm;
