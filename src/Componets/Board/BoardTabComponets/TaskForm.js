import React, { useState } from "react";
import boardStore from "../../../stores/boardStore";
import taskStore from "../../../stores/taskStore";

const TaskForm = ({ task, setTask, closeModal }) => {
  const [isNew, setIsNew] = useState(taskStore.isNew(task));

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    isNew
      ? taskStore.createTask(boardStore.board._id, task)
      : taskStore.updateTask(task);
    closeModal();
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <h1 className="text-black">{isNew ? "New Task" : "Update Task"}</h1>
      <input
        className="p-2 bg-light-grey rounded-md focus-visible:outline-none text-black"
        type="number"
        name="points"
        placeholder="Points"
        value={task.points}
        onChange={handleChange}
      ></input>

      <textarea
        className="p-2 bg-light-grey rounded-md focus-visible:outline-none text-black"
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
      ></textarea>

      <button type="submit" className="bg-blue text-white rounded-md p-2">
        {isNew ? "Add" : "Update"}
      </button>
    </form>
  );
};

export default TaskForm;
