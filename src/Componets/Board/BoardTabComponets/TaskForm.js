import React from "react";
import TextInput from "../../../components/shared/TextInput";

const TaskForm = () => {
  return (
    <form className="flex flex-col gap-5">
      <h1 className="text-black self-start">New Task</h1>
      <input
        className="p-2 bg-light-grey rounded-md focus-visible:outline-none text-black"
        type="number"
        placeholder="Points"
      ></input>

      <input
        className="p-2 bg-light-grey rounded-md focus-visible:outline-none text-black"
        type="text"
        placeholder="Title"
      ></input>

      <button type="submit" className="bg-blue text-white rounded-md p-2">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
