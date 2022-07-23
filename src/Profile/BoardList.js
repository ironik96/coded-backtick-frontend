import { observer } from "mobx-react";
import { BoardItem } from "./BoardItem";
import userStore from "./../stores/userStore";

const BoardList = ({ showCreated }) => {
  let boards = userStore.user.boards;
  const userId = userStore.user._id;
  if (showCreated)
    boards = boards.filter(({ createdBy }) => createdBy === userId);
  if (!showCreated)
    boards = boards.filter(({ createdBy }) => createdBy !== userId);
  const boardItems = boards.map((board) => (
    <BoardItem key={board._id} board={board} />
  ));

  return (
    <div className="flex justify-around w-auto h-5/6  rounded-[20px] bg-softgray">
      <div className="w-full h-full flex-wrap flex justify-start items-start gap-2 pl-12 py-2 overflow-y-auto board-items-wrapper">
        {boardItems}
      </div>
    </div>
  );
};

export default observer(BoardList);
