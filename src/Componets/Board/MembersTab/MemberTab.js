import React, {useEffect} from "react";
import { observer } from "mobx-react";
import coin from "../../../images/coin.png";
import MemberItem from "./MemberItem"
import boardMembersStore from "../../../stores/boardMembersStore";
import boardStore from "../../../stores/boardStore";
async function getUsers() {
  await boardMembersStore.getBoardMembers("62c74d1eba596f957262c517")

  boardMembersStore.users = boardMembersStore.members.map(async member=>  await boardMembersStore.getUser(member.userId))
}
function MemberTab() {
 useEffect(() => {
  getUsers()
   return () => {
boardMembersStore.members = []
   }
 },[])
 
  const members = boardMembersStore.users

  
if(!members ) return <div>loading</div>

  const memberList = members.map((member,id) => (
    <MemberItem user={member}  key= {id}/>
  ));
  return (
    <div className="bg-theme-light-grey w-screen p-[20px] space-y-4 flex-col place-content-center">
      {memberList}
  
    </div>
  );
}
export default observer(MemberTab);
