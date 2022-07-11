import React from "react";

function Task({ task }) {
  return (
    <div className="rounded-lg bg-white h-[100px] p-[10px] flex flex-col gap-4 items-start">
      <p className="text-theme-green">Points: {task.points}</p>
      <p className="text-black">{task.title}</p>
    </div>
  );
}
export default Task;
