import React, { useState } from "react";
import { observer } from "mobx-react";
import BasicModal from "../../../components/shared/BasicModal";
import TaskForm from "./TaskForm";
import taskStore from "../../../stores/taskStore";
import { useDrop } from "react-dnd";

const listWithButtons = ["Icebox", "Todo"];
const TaskList = ({ listTitle, taskList }) => {
  const [showModal, setShowModal] = useState(false);
  const initialTask = { ...taskStore.emptyTask, list: listTitle };
  const [task, setTask] = useState(initialTask);
  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setTask(initialTask);
    setShowModal(false);
  };

  const handleDrop = (item) => {
    if (item.list === listTitle.toLowerCase()) return;

    // new reference to avoid mobx warning
    const updateTask = { ...item };
    updateTask.list = listTitle;
    taskStore.updateTask(updateTask);
  };

  const [, drop] = useDrop(() => ({
    accept: "TASK",
    drop: handleDrop,
  }));

  return (
    <>
      <div className="bg-theme-grey shrink-0 w-[220px] max-h-full rounded-3xl p-[10px] flex flex-col gap-3">
        <div className="rounded-lg bg-white w-fit p-[5px] h-[30px]">
          {listTitle}: {taskList.length}
        </div>
        <div
          ref={drop}
          className="task-list-wrapper space-y-3 overflow-y-auto  min-h-[50px]"
        >
          {taskList}
        </div>
        {listWithButtons.includes(listTitle) && (
          <button
            className="w-full hover:bg-light-grey active:bg-grey active:text-white rounded-lg h-[20px]"
            onClick={openModal}
          >
            + add task
          </button>
        )}
      </div>
      <BasicModal showModal={showModal} closeModal={closeModal}>
        <TaskForm task={task} setTask={setTask} closeModal={closeModal} />
      </BasicModal>
    </>
  );
};

export default observer(TaskList);
