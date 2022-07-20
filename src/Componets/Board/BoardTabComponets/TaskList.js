import React, { useState } from "react";
import { observer } from "mobx-react";
import BasicModal from "../../../components/shared/BasicModal";
import TaskForm from "./TaskForm";
import taskStore from "../../../stores/taskStore";
import { useDrop } from "react-dnd";
import userStore from "../../../stores/userStore";
import boardStore from "../../../stores/boardStore";
import boardMembersStore from "../../../stores/boardMembersStore";

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

  const isDone = listTitle.toLowerCase() === "done";

  const showAddTask =
    listWithButtons.includes(listTitle) && boardStore.userIsAdmin();

  const handleDrop = (item) => {
    if (item.list === listTitle.toLowerCase()) return;

    const moveTask = { _id: item._id };
    moveTask.list = listTitle;
    // if (moveTask.list === "review" || moveTask.list === "doing") {
    //   const member = boardMembersStore.getMemberByUserId(userStore.user._id);
    //   moveTask = { _id: item._id, assignedTo: member._id };
    //   console.log(
    //     "🚀 ~ file: TaskList.js ~ line 28 ~ handleDrop ~ moveTask",
    //     moveTask
    //   );
    // }
    taskStore.updateTask(moveTask);
  };

  const [, drop] = useDrop(() => ({
    accept: "TASK",
    drop: handleDrop,
    canDrop: () => !isDone,
  }));

  const listStyle = isDone ? { opacity: 0.5 } : {};

  return (
    <>
      <div
        style={listStyle}
        className="bg-theme-grey shrink-0 w-[220px] max-h-full rounded-3xl p-[10px] flex flex-col gap-3"
      >
        <div className="rounded-lg bg-white w-fit p-[5px] h-[30px]">
          {listTitle}: {taskList.length}
        </div>
        <div
          ref={drop}
          className="task-list-wrapper space-y-3 overflow-y-auto  min-h-[50px]"
        >
          {taskList}
        </div>
        {showAddTask && (
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
