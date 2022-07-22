import { observer } from "mobx-react";
import React from "react";
import boardStore from "../../../stores/boardStore";
import { AddRewardPrompt } from "./AddRewardPrompt";
import { RewardItem } from "./RewardItem";

function RewardTab() {
  const isAdmin = boardStore.userIsAdmin();
  let rewardList = boardStore.board.rewards.map((reward) => (
    <RewardItem key={reward._id} reward={reward} />
  ));

  if (rewardList.length === 0 && !isAdmin)
    rewardList = <div className="w-full text-center">No Rewards Available</div>;
  return (
    <div className="w-screen p-[20px] space-y-4 flex-col place-content-center">
      <div className="w-full flex-wrap gap-1 mt-4 flex justify-start ">
        {rewardList}
        {isAdmin && <AddRewardPrompt />}
      </div>
    </div>
  );
}

export default observer(RewardTab);
