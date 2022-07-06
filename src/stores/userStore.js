import { makeAutoObservable } from "mobx";
import boardStore from "./boardStore";
import instance from "./instance";

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;
  userBoards = null;

  fetchUser = async (id) => {
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
  };

  addBoard = (board) => (this.userBoards = [...this.userBoards, board]);
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
