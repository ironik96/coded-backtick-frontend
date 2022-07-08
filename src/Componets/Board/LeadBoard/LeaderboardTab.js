import React from "react";
import { observer } from "mobx-react";
import coin from "../../../images/coin.png";
import RankLeaderboard from "./LeaderboardMember";

function LeaderboardTab() {
  const members = [
    {
      name: "Bodour Alrashidi",
      point: "20",
      rank: 1,
    },
    {
      name: "Bodour Alrashidi",
      point: "20",
      rank: 1,
    },
    {
      name: "Bodour Alrashidi",
      point: "20",
      rank: 1,
    },
  ];
  const memberList = members.map((member) => (
    <RankLeaderboard member={member} />
  ));

  return (
    <div className="bg-theme-light-grey w-screen p-[20px] space-y-4  flex place-content-center">
      {memberList}
  
    </div>
  );
}
export default observer(LeaderboardTab);
