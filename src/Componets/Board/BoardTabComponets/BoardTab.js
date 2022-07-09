import React, { useState } from "react";
import { observer } from "mobx-react";
import Task from "./Task";
import BasicModal from "../../../components/shared/BasicModal";
import TaskForm from "./TaskForm";

const tasks = [
  {
    title: "create what every lol",
    point: "20",
  },
  {
    title: "create what every lol",
    point: "20",
  },
  {
    title: "create what every lol",
    point: "20",
  },
];

function BoardTab() {
  const taskList = tasks.map((task, index) => <Task key={index} task={task} />);

  return (
    <div className="w-full p-[20px] flex h-full overflow-x-auto gap-5">
      <BoardList listTitle={"Icebox"} taskList={taskList} />
      <BoardList listTitle={"Todo"} taskList={taskList} />
      <BoardList listTitle={"Doing"} taskList={taskList} />
      <BoardList listTitle={"Review"} taskList={taskList} />
      <BoardList listTitle={"Done"} taskList={taskList} />
    </div>
  );
}

const listWithButtons = ["Icebox", "Todo"];
const BoardList = ({ listTitle, taskList }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <div className="bg-theme-grey shrink-0 w-[220px] h-max rounded-3xl p-[10px] space-y-3">
        <div className="  rounded-lg bg-white object-contain  w-fit p-[5px]">
          {listTitle}: {tasks.length}
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
      <BasicModal
        showModal={showModal}
        closeModal={closeModal}
        content={<TaskForm />}
      />
    </>
  );
};
export default observer(BoardTab);
