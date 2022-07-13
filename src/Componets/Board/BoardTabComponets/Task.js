import React, { useState } from "react";
import { useDrag } from "react-dnd";
import BasicModal from "../../../components/shared/BasicModal";
import taskStore from "../../../stores/taskStore";
import ModifyTaskButton from "./ModifyTaskButton";
import TaskForm from "./TaskForm";

function Task({ task, listLength }) {
  const [showModal, setShowModal] = useState(false);
  const [editableTask, setEditableTask] = useState(task);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const deleteTask = () => taskStore.deleteTask(task._id);

  const [, drag] = useDrag(() => ({
    type: "TASK",
    item: task,
  }));
  return (
    <>
      <div
        ref={drag}
        className="rounded-lg bg-white  p-[10px] flex flex-col gap-4 items-start group"
      >
        <div className="w-full flex justify-between">
          <p className="text-theme-green group-hover:text-theme-green/70">
            Points: {task.points}
          </p>
          <ModifyTaskButton
            className="group-hover:opacity-100 transition-opacity"
            openModal={openModal}
            listLength={listLength}
            deleteTask={deleteTask}
          />
        </div>

        <p className="text-black group-hover:text-black/70">{task.title}</p>
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
export default Task;
