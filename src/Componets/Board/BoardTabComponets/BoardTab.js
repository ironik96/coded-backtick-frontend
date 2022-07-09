import React from "react";
import Task from "./Task";
import TaskList from "./TaskList";

const tasks = [
  // {
  //   title: "create what every lol",
  //   point: "20",
  // },
  // {
  //   title: "create what every lol",
  //   point: "20",
  // },
  // {
  //   title: "create what every lol",
  //   point: "20",
  // },
];

function BoardTab() {
  const taskList = tasks.map((task, index) => <Task key={index} task={task} />);

  return (
    <div className="w-full p-[20px] flex h-full overflow-x-auto gap-5">
      <TaskList listTitle={"Icebox"} taskList={taskList} />
      <TaskList listTitle={"Todo"} taskList={taskList} />
      <TaskList listTitle={"Doing"} taskList={taskList} />
      <TaskList listTitle={"Review"} taskList={taskList} />
      <TaskList listTitle={"Done"} taskList={taskList} />
    </div>
  );
}

export default BoardTab;
