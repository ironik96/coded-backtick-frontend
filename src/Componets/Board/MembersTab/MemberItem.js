import React from "react";
import deleteButton from "../../../images/deleteCross.png";
import boardMembersStore from "../../../stores/boardMembersStore";
import boardStore from "../../../stores/boardStore";
import MemberTab from "./MemberTab";
import { observer } from "mobx-react";
import Alert from "../../../components/shared/Alert";


function Memberitem({ member }) {
  const { userId: user } = member;
  const handleOnClick = (e) => {
    boardMembersStore.deleteMember(boardStore.board._id, member._id);
    Alert("Member removed succefully ", "error")
  };
  return (
    <div className=" flex place-content-center ">
      <div className=" bg-white h-[70px] rounded-lg p-2 flex justify-between  w-[70%]">
        <div className="flex items-center  space-x-10 ">
          <img
            className="rounded-[100%] w-[60px] h-[60px] object-cover relative left-[20px]"
            src={user.image}
          />
          <div className="items-center">
            <h1 className=""> {user.fname +" "+ user.lname}</h1>
            <h5 className="text-[10px]">View Profile</h5>
          </div>
        </div>
        <div className="flex items-center p-[10px] h-[100%] w-[80px] rounded-lg  place-content-center">
         { boardStore.isCreater() ?
          <button onClick={handleOnClick}>
            <img className="w-[20px]" src={deleteButton} />
          </button>
          : <div/>
}
        </div>
      </div>
    </div>
  );
}
export default observer(Memberitem);
