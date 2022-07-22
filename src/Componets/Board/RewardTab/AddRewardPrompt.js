import React, { useState } from "react";
import BasicModal from "../../../components/shared/BasicModal";
import RewardForm from "./RewardForm";
import rewardStore from "../../../stores/rewardStore";
import boardStore from "../../../stores/boardStore";

export function AddRewardPrompt() {
  const [reward, setReward] = useState(
    rewardStore.newCryptoReward(boardStore.board._id)
  );
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = async () => {
    setShowModal(false);
    setReward(rewardStore.newCryptoReward(boardStore.board._id));
  };
  return (
    <>
      <button
        className="flex justify-center items-center bg-transparent border-2 border-dashed border-grey w-[calc(14rem-4px)] h-[calc(16rem-4px)] text-xs rounded-[10px]"
        onClick={openModal}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-grey"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7H12.75ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM7 11.25C6.58579 11.25 6.25 11.5858 6.25 12C6.25 12.4142 6.58579 12.75 7 12.75V11.25ZM17 12.75C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25V12.75ZM11.25 7V17H12.75V7H11.25ZM7 12.75H17V11.25H7V12.75Z"
            fill="inherit"
          />
        </svg>
        Add Reward
      </button>
      <BasicModal showModal={showModal} closeModal={closeModal}>
        <RewardForm
          closeModal={closeModal}
          reward={reward}
          setReward={setReward}
        />
      </BasicModal>
    </>
  );
}
