import React from "react";
import { observer } from "mobx-react";
import boardStore from "../../../stores/boardStore";
import { AddRewardPrompt } from "./AddRewardPrompt";
import { RewardItem } from "./RewardItem";

function RewardTab() {
  return (
    <div className="w-screen p-[20px] space-y-4 flex-col place-content-center">
      <div className="w-full flex-wrap gap-1 mt-4 flex justify-start ">
        <RewardItem />
        <RewardItem />
        <RewardItem />
        {boardStore.userIsAdmin() && <AddRewardPrompt />}
      </div>
    </div>
  );
}

export default observer(RewardTab);
