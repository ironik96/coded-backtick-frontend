import React from "react";
import boardStore from "../../stores/boardStore";
import TextInput from "../shared/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userStore from "../../stores/userStore";
import { useParams } from "react-router-dom";
import Alert from "../shared/Alerts/Alert";
import BasicModal from "../shared/BasicModal";
import AlertWithButton from "../shared/Alerts/AlertWithButton";
import DropdownList from "../shared/DropdownList";
const CreateBoard = () => {
  const { boardSlug } = useParams();
  const isNew = boardSlug === "new";
  const initialBoard = isNew
    ? boardStore.emptyBoard
    : userStore.getEditableBoard(boardSlug);
  const [board, setBoard] = useState(initialBoard);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setBoard({ ...board, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isNew) {
      await boardStore.createBoard(board, userStore.user._id);
      navigate("/dashboard", { replace: true });
    } else {
      await boardStore.updateBoard(board, userStore.user._id);
      setBoard(userStore.getEditableBoard(boardSlug));
      Alert("Board updated successfully", "success");
    }
  };

  const handleDelete = async () => {
    AlertWithButton(
      `Delete ${board.title}`,
      "warning",
      null,
      null,
      async () => {
        await boardStore.deleteBoard(board._id);
        navigate("/dashboard", { replace: true });
      }
    );
  };

  const showDelete = !isNew && boardStore.userIsCreater();

  return (
    <form
      className="bg-light-grey h-full w-full flex flex-col justify-center gap-6 text-black"
      onSubmit={handleSubmit}
    >
      <div className="bg-white w-8/12 mx-auto p-12 h-5/6 overflow-y-auto rounded-3xl flex flex-col justify-center gap-5">
        <h1 className="font-bold text-3xl">{isNew ? "Create board" : ""}</h1>
        <TextInput
          handleChange={handleChange}
          placeholder={"Title*"}
          name={"title"}
          value={board.title}
        />
        <TextInput
          handleChange={handleChange}
          placeholder={"Description"}
          name={"description"}
          value={board.description}
        />
        <div className="flex gap-6">
          <TextInput
            handleChange={handleChange}
            placeholder={"Start date"}
            name={"startDate"}
            value={board.startDate}
            type={"date"}
            twClass="grow"
          />

          <TextInput
            handleChange={handleChange}
            placeholder={"End date"}
            name={"endDate"}
            value={board.endDate}
            type={"date"}
            twClass="grow"
          />
        </div>

        {!isNew ? (
          <DropdownList
            label="Board Status"
            options={[
              { label: "Active", value: "Active" },
              { label: "Closed", value: "Closed" },
            ]}
            name="boardStatus"
            value={board.boardStatus}
            onChange={handleChange}
          />
        ) : (
          <div />
        )}
        <div className="flex justify-end gap-2">
          {showDelete && (
            <button
              type="button"
              className="bg-red text-white font-bold py-2 px-20 rounded focus:outline-none"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
          <button
            type="submit"
            className="bg-green text-white font-bold py-2 px-20 rounded focus:outline-none"
          >
            {isNew ? "Create" : "Update"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateBoard;
