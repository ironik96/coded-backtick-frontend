import { makeAutoObservable } from "mobx";
import instance from "./instance";

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

  isNew = (task) => JSON.stringify(task) === JSON.stringify(this.emptyTask);
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
