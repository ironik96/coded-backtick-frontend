import React from "react";
import boardStore from "../../stores/boardStore";
import TextInput from "../shared/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBoard = () => {
  const [board, setBoard] = useState(boardStore.initialBoard);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setBoard({ ...board, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(board);
    navigate("/dashboard", { replace: true });
  };

  return (
    <form
      className="bg-light-grey h-full w-full flex flex-col justify-center  gap-6"
      onSubmit={handleSubmit}
    >
      <div className="bg-white w-8/12 mx-auto p-12 h-5/6 overflow-y-auto rounded-3xl flex flex-col gap-5">
        <h1 className="font-bold text-3xl">Create board</h1>
        <TextInput
          handleChange={handleChange}
          placeholder={"Title"}
          name={"title"}
          value={board.title}
        />
        <TextInput
          handleChange={handleChange}
          placeholder={"Description"}
          name={"description"}
          value={board.description}
        />
        <TextInput
          handleChange={handleChange}
          placeholder={"Start date"}
          name={"startDate"}
          value={board.startDate}
          type={"date"}
        />
        <TextInput
          handleChange={handleChange}
          placeholder={"End date"}
          name={"endDate"}
          value={board.endDate}
          type={"date"}
        />
        <button
          type="submit"
          className="bg-blue text-white font-bold py-2 px-20 rounded self-end focus:outline-none"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateBoard;
