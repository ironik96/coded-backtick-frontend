import React from "react";
import { observer } from "mobx-react";
import boardMembersStore from "../../../stores/boardMembersStore";
import boardStore from "../../../stores/boardStore";
import taskStore from "../../../stores/taskStore";
import Alert from "../../../components/shared/Alerts/Alert";

function ReviewTask({ task }) {
  const { assignedTo } = task;
  if (!assignedTo) return <div></div>;
  let member = boardStore.board.boardMembers.filter(
    (member) => member._id === assignedTo
  );
  const { userId: user } = member[0];
  member = member[0];

  const handleOnClick = (e) => {
    // take point and add it to member  and remove to done
    // MUST ADD TASK IN MEMBERS
    task.list = "done";
    taskStore.updateTask(task);
    member.points = task.points + member.points;
    boardMembersStore.updateMember(member);
    Alert("Review Marked ", "success");
  };
  return (
    <div className="bg-white rounded-lg w-[250px] h-[100px]">
      <div className="flex m-3 space-x-2">
        <img
          className="rounded-full w-[49px] h-[49px]  object-cover"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg"
          alt="avatar"
        />
        <div className="px-2 text-left">
          <h1 className="justify-start text-[20px]">{task.title}</h1>
          <h6>{user.fname + " " + user.lname}</h6>
        </div>
      </div>
      <div className="flex place-content-end m-2">
        <button
          className="text-white bg-theme-green w-[100px] rounded-lg"
          onClick={handleOnClick}
        >
          Mark Done
        </button>
      </div>
    </div>
  );
}
export default observer(ReviewTask);
