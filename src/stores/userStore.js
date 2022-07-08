import { makeAutoObservable } from "mobx";
import authStore from "./authStore";
import boardStore from "./boardStore";
import instance from "./instance";

const KEY = "user store";

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;
  userBoards = null;

  updateUserStore = async (id) => {
    if (!id) return localStorage.removeItem(KEY);

    const userInStorage = localStorage.getItem(KEY);
    if (userInStorage) return this.setFields(JSON.parse(userInStorage));

    const [response, error] = await tryCatch(() => instance.get(`/user/${id}`));
    if (error) return console.error(error.message);

    this.setFields(response.data);
  };

  getEditableBoard = (boardSlug) => {
    const board = this.userBoards.find(({ slug }) => slug === boardSlug);
    return boardStore.makeBoardEditable(board);
  };

  setFields = (userData) => {
    this.user = userData;
    this.userBoards = userData.boards;
    localStorage.setItem(KEY, JSON.stringify(userData));
  };

  addBoard = (board) => (this.userBoards = [...this.userBoards, board]);
  updateBoard = (updatedBoard) =>
    (this.userBoards = this.userBoards.map((board) =>
      board._id === updatedBoard._id ? updatedBoard : board
    ));
  deleteBoard = (boardId) =>
    (this.userBoards = this.userBoards.filter(({ _id }) => _id !== boardId));
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
