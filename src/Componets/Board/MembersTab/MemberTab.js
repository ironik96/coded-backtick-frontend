import React from "react";
import { observer } from "mobx-react";
import MemberItem from "./MemberItem";
import boardStore from "../../../stores/boardStore";
import SearchBar from "./Searchbar";
import Loading from "../../../components/shared/Loading";

function MemberTab() {
  const boardMembers = boardStore.board.boardMembers;
  if (!boardMembers) return <Loading />;

  const memberList = boardMembers.map((member) => (
    <MemberItem member={member} key={member._id} />
  ));
  return (
    <div className="bg-theme-light-grey w-screen p-[20px] space-y-4 flex-col place-content-center">
      <div className="flex justify-center">
        <SearchBar />
      </div>

      {memberList}
    </div>
  );
}
export default observer(MemberTab);
