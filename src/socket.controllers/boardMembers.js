import userStore from "../stores/userStore";

export const handleAddMember = (response) => {
  const currentUser = userStore.user;
  if (!currentUser) return;

  const [board, incomingUser] = response;
  if (incomingUser._id === currentUser._id) return;

  if (userHasBoard(currentUser, board))
    updateBoardMembers(currentUser, incomingUser, board);
  else console.log("false");
};

function userHasBoard(currentUser, board) {
  return currentUser.boards.some(({ _id }) => _id === board._id);
}

function updateBoardMembers(currentUser, incomingUser, board) {
  const foundBoard = currentUser.boards.find(({ _id }) => _id === board._id);
  const newMember = findBoardMemberFromUser(incomingUser, board);

  foundBoard.boardMembers = [...foundBoard.boardMembers, newMember];
  userStore.updateBoard(foundBoard);
}

function findBoardMemberFromUser(incomingUser, board) {
  return board.boardMembers.find(
    ({ userId: user }) => user._id === incomingUser._id
  );
}
