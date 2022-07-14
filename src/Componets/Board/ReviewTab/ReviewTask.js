import React from "react";
import { observer } from "mobx-react";
import boardMembersStore from "../../../stores/boardMembersStore";
import boardStore from "../../../stores/boardStore";
import taskStore from "../../../stores/taskStore";
import Alert from "../../../components/shared/Alert";

function ReviewTask({ task }) {
    const {assignedTo} = task
   const member = boardStore.board.boardMembers.filter((member) => member._id === assignedTo)
   const { userId: user } = member[0];

   const handleOnClick = (e) => {
    // take point and add it to member  and remove to done,
    // MUST ADD TASK IN MEMBERS
     task.list = "done"
    taskStore.updateTask(task)
    member[0].points = task.points + member[0].points
    member[0].points =
    boardMembersStore.updateMember(member[0])
    Alert("Review Marked ", "success")

  };

  return (
    <div className="bg-white rounded-lg w-[250px] h-[100px]" >
<div className="flex m-3 space-x-2 ">
<img
        className="rounded-full w-[49px] h-[49px]  object-cover "
        src= "https://ichef.bbci.co.uk/news/976/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg"
        alt="avatar"
      />
      <div className="px-2 text-left" >
          <h1>{user.fname +" "+ user.lname}</h1>
    <h6 className="justify-start text-[12px]">{task.title}</h6>
    </div>
</div>
<div className=" flex place-content-end m-2 " >
        <button className="text-white bg-theme-red w-[100px] rounded-lg " onClick={handleOnClick}>Review</button>
    </div>
</div> 
  )
}
export default observer(ReviewTask);
