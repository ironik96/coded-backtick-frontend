import { makeAutoObservable } from "mobx";
import boardStore from "./boardStore";
import instance from "./instance";

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;

  updateUserStore = async (id) => {
    if (!id) return;
    const [response, error] = await tryCatch(() => instance.get(`/user/${id}`));
    if (error) return console.error(error.message, response.data);

    this.setUser(response.data);
  };
  
  
  getEditableBoard = (boardSlug) => {
    const board = this.user.boards.find(({ slug }) => slug === boardSlug);
    return boardStore.makeBoardEditable(board);
  };

  setUser = (userData) => (this.user = userData);

  addBoard = (board) => (this.user.boards = [...this.user.boards, board]);

  updateBoard = (updatedBoard) =>
    (this.user.boards = this.user.boards.map((board) =>
      board._id === updatedBoard._id ? updatedBoard : board
    ));

  deleteBoard = (boardId) =>
    (this.user.boards = this.user.boards.filter(({ _id }) => _id !== boardId));
}

async function tryCatch(promise) {
  try {
    const response = await promise();
    return [response, null];
  } catch (error) {
    return [null, error];
  }
}

export default new UserStore();
