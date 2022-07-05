import React from "react";
import add from "../../../icons/plus-small.svg";

const iconSize = 100;
const AddBoard = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <img src={add} width={iconSize} height={iconSize} alt="add" />
    </div>
  );
};

export default AddBoard;
