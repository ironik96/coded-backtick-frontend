import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import coin from "../../../images/coin.png";
import MemberItem from "./MemberItem";
import boardMembersStore from "../../../stores/boardMembersStore";
import boardStore from "../../../stores/boardStore";

const boardMembersList = ["62c9c64a45d1aa300d7bca6f"];
function MemberTab() {
  const [members, setMembers] = useState(null);

  useEffect(() => {
    (async () => {
      await boardMembersStore.fetchMembers(boardMembersList);
      setMembers(boardMembersStore.members);
    })();

    return () => {
      boardMembersStore.members = null;
    };
  }, []);

  if (!members) return <div>loading</div>;

  const memberList = members.map((member, id) => (
    <MemberItem member={member} key={id} />
  ));
  return (
    <div className="bg-theme-light-grey w-screen p-[20px] space-y-4 flex-col place-content-center">
      {memberList}
    </div>
  );
}
export default observer(MemberTab);
