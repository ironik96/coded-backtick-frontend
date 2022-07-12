import React from "react";
import { useDrag } from "react-dnd";
import ModifyTaskButton from "./ModifyTaskButton";

function Task({ task }) {
  const [, drag] = useDrag(() => ({
    type: "TASK",
    item: task,
  }));
  return (
    <div
      ref={drag}
      className="rounded-lg bg-white h-[100px] p-[10px] flex flex-col gap-4 items-start group"
    >
      <div className="w-full flex justify-between">
        <p className="text-theme-green group-hover:text-theme-green/70">
          Points: {task.points}
        </p>
        <ModifyTaskButton className="group-hover:opacity-100 transition-opacity" />
      </div>

      <p className="text-black group-hover:text-black/70">{task.title}</p>
    </div>
  );
}
export default Task;
