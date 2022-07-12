import { makeAutoObservable } from "mobx";
import instance from "./instance";

const URL = "/boardMembers";

class BoardMembersStore {
  constructor() {
    makeAutoObservable(this);
  }

  setMembers = (members) => {
    this.members = [...members];
  };

  addMember = async (boardId, user) => {
    const [response, error] = await tryCatch(() =>
      instance.put(`${URL}/${boardId}/`, user)
    );
    if (error) return console.error(error);
  };

  deleteMember = async (boardId, memberid) => {
    const [response, error] = await tryCatch(() =>
      instance.delete(`${URL}/${boardId}/${memberid}`)
    );
    if (error) return console.error(error);
  };

  getUsers = async () => {
    const [response, error] = await tryCatch(() => instance.get(`/users`));
    if (error) return console.error(error.message);
    this.users = response.data;
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

export default new BoardMembersStore();
