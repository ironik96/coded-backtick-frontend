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

  boardChartInfo = (board) => {
    const { boardMembers } = board;

    if (boardMembers.length === 0) return null;

    const total = boardMembers
      .map(({ points }) => points)
      .reduce((total, current) => total + current);

    const getPoints = (points) => {
      if (points !== 0) return points;
      if (total === 0) return 0.1;
      return total / 10;
    };

    const info = {
      totalpoints: total === 0 ? 1 : total,
    };

    if (boardMembers.length === 1) {
      info.firstPlacePoints = getPoints(boardMembers[0].points);
      info.firstPlaceName = boardMembers[0].userId.fname;
    }

    if (boardMembers.length === 2) {
      info.firstPlacePoints = getPoints(boardMembers[0].points);
      info.firstPlaceName = boardMembers[0].userId.fname;
      info.secondPlacePoints = getPoints(boardMembers[1].points);
      info.secondPlaceName = boardMembers[1].userId.fname;
    }

    if (boardMembers.length >= 3) {
      info.firstPlacePoints = getPoints(boardMembers[0].points);
      info.firstPlaceName = boardMembers[0].userId.fname;
      info.secondPlacePoints = getPoints(boardMembers[1].points);
      info.secondPlaceName = boardMembers[1].userId.fname;
      info.thirdPlacePoints = getPoints(boardMembers[2].points);
      info.thirdPlaceName = boardMembers[2].userId.fname;
    }

    return info;
  };
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
