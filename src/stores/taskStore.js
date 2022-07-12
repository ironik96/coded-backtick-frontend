import { makeAutoObservable } from "mobx";
import boardStore from "./boardStore";
import instance from "./instance";

const BASE_URL = "/tasks";

class TaskStore {
  constructor() {
    makeAutoObservable(this);
  }

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
    if (error) return console.error(error.message, response.data);

    // add it locally
    boardStore.addTask(response.data);
  };

  updateTask = async (task) => {
    const [response, error] = await tryCatch(() =>
      instance.put(BASE_URL, task)
    );
    if (error) return console.error(error.message, response.data);

    // update it locally
    boardStore.updateTask(response.data);
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
