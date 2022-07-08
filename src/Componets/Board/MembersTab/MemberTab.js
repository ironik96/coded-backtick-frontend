import React from "react";
import { observer } from "mobx-react";
import coin from "../../../images/coin.png";
import MemberItem from "./MemberItem"
function MemberTab() {
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
    <MemberItem member={member} />
  ));
  return (
    <div className="bg-theme-light-grey w-screen p-[20px] space-y-4  place-content-center">
      {memberList}
  
    </div>
  );
}
export default observer(MemberTab);
