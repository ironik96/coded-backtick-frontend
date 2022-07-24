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
    points: "",
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

  deleteTask = async (id) => {
    const [response, error] = await tryCatch(() =>
      instance.delete(`${BASE_URL}/${id}`)
    );
    if (error) return console.error(error.message, response.data);

    // delete it locally
    boardStore.deleteTask(id);
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
