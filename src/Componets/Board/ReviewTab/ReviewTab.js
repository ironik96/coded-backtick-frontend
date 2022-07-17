import React from "react";
import { observer } from "mobx-react";

import boardStore from "../../../stores/boardStore";

import ReviewTask from "./ReviewTask";
function ReviewTab() {
    let { tasks } = boardStore.board;
    tasks= tasks.filter((task) => task.list === "review")
    const taskList =  tasks.map((task) => <ReviewTask key={task._id} task={task} />)

  return (
    <div className="bg-theme-light-grey w-screen p-[20px] space-y-4 flex-col place-content-center">
      <div className="flex justify-center">
        {taskList}
</div>
</div>
  );
}
export default observer(ReviewTab);
