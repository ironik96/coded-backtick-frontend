import React, { useState } from "react";
import { useDrag } from "react-dnd";
import BasicModal from "../../../components/shared/BasicModal";
import taskStore from "../../../stores/taskStore";
import AssignButton from "./AssignButton";
import ModifyTaskButton from "./ModifyTaskButton";
import TaskForm from "./TaskForm";
import { observer } from "mobx-react";
import boardStore from "../../../stores/boardStore";

function Task({ task, listLength }) {
  const [showModal, setShowModal] = useState(false);
  const [editableTask, setEditableTask] = useState(task);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const deleteTask = () => taskStore.deleteTask(task._id);

  const isDone = task.list === "done";
  const buttonDisplay = isDone ? "hidden" : "";
  const isAdmin = boardStore.userIsAdmin();

  const [, drag] = useDrag(() => ({
    type: "TASK",
    item: task,
    canDrag: () => !isDone,
  }));
  return (
    <>
      <div
        ref={drag}
        className={`rounded-lg bg-white  p-[10px] flex flex-col gap-4 items-start ${
          isAdmin && "group"
        }`}
      >
        <div className="w-full flex justify-between">
          <p className="text-theme-green group-hover:text-theme-green/70">
            Points: {task.points}
          </p>
          {isAdmin && (
            <ModifyTaskButton
              className={`group-hover:opacity-100 transition-opacity ${buttonDisplay}`}
              openModal={openModal}
              listLength={listLength}
              deleteTask={deleteTask}
            />
          )}
        </div>
        <div className="flex justify-between w-full">
          <p className="text-black group-hover:text-black/70">{task.title}</p>
          <AssignButton task={task} />
        </div>
      </div>
      <BasicModal showModal={showModal} closeModal={closeModal}>
        <TaskForm
          task={editableTask}
          setTask={setEditableTask}
          closeModal={closeModal}
        />
      </BasicModal>
    </>
  );
}
export default observer(Task);
