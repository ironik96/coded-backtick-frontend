import boardStore from "../stores/boardStore";

export const handleBoardAddMember = (newMember) => {
  if (!boardStore.board) return;
  if (boardStore.board._id !== newMember.boardId) return;
  if (boardStore.boardMemberExists(newMember)) return;
  boardStore.addBoardMember(newMember);
};

const taskActions = {
  new: addTask,
  update: updateTask,
  delete: deleteTask,
  done: updateMemberPoints,
};
export const handleBoardTask = (response) => {
  if (!boardStore.board) return;
  const { type } = response;

  taskActions[type](response);
};

function addTask(response) {
  const { newTask } = response;
  if (boardStore.board._id === newTask.boardId) boardStore.addTask(newTask);
}

function updateTask(response) {
  const { updatedTask } = response;
  if (boardStore.board._id === updatedTask.boardId)
    boardStore.updateTask(updatedTask);
}

function deleteTask(response) {
  const { taskId, boardId } = response;
  if (boardStore.board._id === boardId) boardStore.deleteTask(taskId);
}

function updateMemberPoints(response) {
  const { updatedMember } = response;
  if (boardStore.board._id === updatedMember.boardId)
    boardStore.updateBoardMember(updatedMember);
}
