import { makeAutoObservable, runInAction } from "mobx";
import instance from "./instance";

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;

  fetchUser = async (id) => {
    const [response, error] = await tryCatch(() => instance.get(`/user/${id}`));
    if (error) return console.error(error.message);
    runInAction(() => (this.user = response.data));
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
