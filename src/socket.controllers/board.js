import boardStore from "../stores/boardStore";

export const handleBoardAddMember = (newMember) => {
  if (!boardStore.board) return;
  if (boardStore.board._id !== newMember.boardId) return;
  if (boardStore.boardMemberExists(newMember)) return;
  boardStore.addBoardMember(newMember);
};
