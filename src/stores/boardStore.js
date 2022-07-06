import { makeAutoObservable, runInAction } from "mobx";
import instance from "./instance";
import userStore from "./userStore";

const URL = "/boards";

class BoardStore {
  constructor() {
    makeAutoObservable(this);
  }

  initialBoard = {
    title: "",
    description: "",
    startDate: dateToInputValue(new Date()),
    endDate: "",
  };

  createBoard = async (board, userId) => {
    const [response, error] = await tryCatch(() =>
      instance.post(URL, { ...board, userId })
    );
    if (error) return console.error(error);
    userStore.addBoard(response.data);
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

function dateToInputValue(date) {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();

  if (dd < 10) dd = "0" + dd;

  if (mm < 10) mm = "0" + mm;

  return yyyy + "-" + mm + "-" + dd;
}

export default new BoardStore();
