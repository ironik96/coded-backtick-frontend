import { makeAutoObservable } from "mobx";
import boardStore from "./boardStore";
import instance from "./instance";

const BASE_URL = "/tasks";

class TaskStore {
  constructor() {
    makeAutoObservable(this);
  }

  tasks = [];

  emptyTask = {
    title: "",
    boardId: "",
    list: "",
    points: 0,
    assignedTo: "",
  };

  createTask = async (boardId, task) => {
    task.boardId = boardId;
    const [response, error] = await tryCatch(() =>
      instance.post(BASE_URL, task)
    );
    if (error) console.error(error.message, response.data);

    // add it locally
    boardStore.addTask(response.data);
  };

  isNew = (task) =>
    JSON.stringify({ ...task, list: "" }) === JSON.stringify(this.emptyTask);
}

async function tryCatch(promise) {
  try {
    const response = await promise();
    return [response, null];
  } catch (error) {
    return [null, error];
  }
}

export default new TaskStore();
