import React from "react";
import { observer } from "mobx-react";
import RankLeaderboard from "./RankLeaderboard";
import boardStore from "../../../stores/boardStore";
import Loading from "../../../components/shared/Loading";

function LeaderboardTab() {
  const boardMembers = boardStore.board.boardMembers;

  if (!boardMembers) return <Loading />;

  let sortedmember = boardMembers.slice().sort((firstmember, secondmember) => {
    return secondmember.points - firstmember.points;
  });
  sortedmember.forEach((member, i) => {
    member.rank = i + 1;
  });

  const memberList = sortedmember.map((member) => (
    <RankLeaderboard member={member} key={member._id} />
  ));

  return (
    <div className="w-screen p-[20px] space-y-4 flex-col place-content-center h-full overflow-y-auto">
      {memberList}
    </div>
  );
}
export default observer(LeaderboardTab);
