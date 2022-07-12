import { observer } from "mobx-react";
import React from "react";
import boardStore from "../../../stores/boardStore";
import Task from "./Task";
import TaskList from "./TaskList";

function BoardTab() {
  const taskList = (tasks) =>
    tasks.map((task) => <Task key={task._id} task={task} />);

  const { tasks } = boardStore.board;

  return (
    <div className="w-full p-[20px] flex items-start h-full overflow-x-auto gap-5 scroll-event-div">
      <TaskList
        listTitle={"Icebox"}
        taskList={taskList(tasks.filter((task) => task.list === "icebox"))}
      />
      <TaskList
        listTitle={"Todo"}
        taskList={taskList(tasks.filter((task) => task.list === "todo"))}
      />
      <TaskList
        listTitle={"Doing"}
        taskList={taskList(tasks.filter((task) => task.list === "doing"))}
      />
      <TaskList
        listTitle={"Review"}
        taskList={taskList(tasks.filter((task) => task.list === "review"))}
      />
      <TaskList
        listTitle={"Done"}
        taskList={taskList(tasks.filter((task) => task.list === "done"))}
      />
    </div>
  );
}

export default observer(BoardTab);
