import { makeAutoObservable } from "mobx";
import instance from "./instance";
import boardStore from "./boardStore";
const URL = "/boardMembers";

class BoardMembersStore {
  constructor() {
    makeAutoObservable(this);
  }
  addMember = async (boardId, user) => {
    const [response, error] = await tryCatch(() =>
      instance.put(`${URL}/${boardId}/`, user)
    );
    console.log(boardStore.board.boardMembers.push((response.data)), "members")

    if (error) return console.error(error);
  };

  updateMember = async (member) => {
    const [response, error] = await tryCatch(() =>
    instance.put(`${URL}/member/${member._id}/`, member));
    if (error) return console.error(error);
    return response.data
  };
  
  deleteMember = async (boardId, memberId) => {
    boardStore.board.boardMembers= boardStore.board.boardMembers.filter(member => member._id != memberId)
    const [response, error] = await tryCatch(() =>
      instance.delete(`${URL}/${boardId}/${memberId}`)
    );
    if (error) return console.error(error);
  };

  getUsers = async () => {
    const [response, error] = await tryCatch(() => instance.get(`/users`));
    if (error) return console.error(error.message);
    this.users = response.data;
  };
  getMemberIdByUserId = async (userId) => {
    const [response, error] = await tryCatch(() => instance.get(`${URL}/getUserMemberId/${userId}`));
    if (error) return console.error(error.message);
    console.log("🚀 ~ file: boardMembersStore.js ~ line 44 ~ BoardMembersStore ~ getMemberIdByUserId= ~ response.data", response.data)

  return response.data;
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
