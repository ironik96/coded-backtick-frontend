import { makeAutoObservable } from "mobx";
import instance from "./instance";
import userStore from "./userStore";

const BASE_URL = "/boards";
class BoardStore {
  constructor() {
    makeAutoObservable(this);
  }

  board;

  fetchBoard = async (id) => {
    const [response, error] = await tryCatch(() =>
      instance.get(`${BASE_URL}/${id}`)
    );
    if (error) return console.error(error.message, response.data);
    this.board = response.data;
  };

  emptyBoard = {
    title: "",
    description: "",
    startDate: dateToInputValue(new Date()),
    endDate: dateToInputValue(new Date(), 7),
  };

  createBoard = async (board, userId) => {
    this.makeBoardDatesISO(board);

    const [response, error] = await tryCatch(() =>
      instance.post(BASE_URL, { ...board, userId })
    );
    if (error) return console.error(error);
    userStore.addBoard(response.data);
  };

  updateBoard = async (board) => {
    this.makeBoardDatesISO(board);

    const [response, error] = await tryCatch(() =>
      instance.put(BASE_URL, board)
    );
    if (error) return console.error(error);
    userStore.updateBoard(response.data);
  };

  makeBoardEditable = (board) => {
    board.startDate = dateToInputValue(new Date(board.startDate));
    board.endDate = dateToInputValue(new Date(board.endDate));
    return board;
  };

  makeBoardDatesISO = (board) => {
    board.startDate = new Date(board.startDate).toISOString();
    board.endDate = new Date(board.endDate).toISOString();
    return board;
  };

  // addTask=(task)=>{
  //   this.board = {this.}
  // }
}

async function tryCatch(promise) {
  try {
    const response = await promise();
    return [response, null];
  } catch (error) {
    return [null, error];
  }
}

function dateToInputValue(date, days) {
  if (days) date.setDate(date.getDate() + days);

  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();

  if (dd < 10) dd = "0" + dd;

  if (mm < 10) mm = "0" + mm;

  return yyyy + "-" + mm + "-" + dd;
}

export default new BoardStore();
