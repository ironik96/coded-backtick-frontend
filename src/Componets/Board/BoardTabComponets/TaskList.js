import React, { useState } from "react";
import BasicModal from "../../../components/shared/BasicModal";
import TaskForm from "./TaskForm";
import taskStore from "../../../stores/taskStore";

const listWithButtons = ["Icebox", "Todo"];
const TaskList = ({ listTitle, taskList }) => {
  const [showModal, setShowModal] = useState(false);
  const initialTask = taskStore.emptyTask;
  const [task, setTask] = useState(initialTask);
  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setTask(initialTask);
    setShowModal(false);
  };
  return (
    <>
      <div className="bg-theme-grey shrink-0 w-[220px] h-max rounded-3xl p-[10px] space-y-3">
        <div className="  rounded-lg bg-white object-contain  w-fit p-[5px]">
          {listTitle}: {taskList.length}
        </div>
        {taskList}
        {listWithButtons.includes(listTitle) && (
          <button
            className="w-full hover:bg-light-grey active:bg-grey active:text-white rounded-lg"
            onClick={openModal}
          >
            + add task
          </button>
        )}
      </div>
      <BasicModal showModal={showModal} closeModal={closeModal}>
        <TaskForm task={task} setTask={setTask} />
      </BasicModal>
    </>
  );
};

export default TaskList;
