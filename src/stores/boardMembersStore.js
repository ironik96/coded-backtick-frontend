import { makeAutoObservable } from "mobx";
import instance from "./instance";
import userStore from "./userStore";

const URL = "/boardMembers";

class BoardMembersStore {
  constructor() {
    makeAutoObservable(this);
  }
  members = []
  users = [] 
  getBoardMembers = async (boardId) => {
    const [response, error] = await tryCatch(() =>
    instance.get(`${URL}/${boardId}`))
    if (error) return console.error(error);
    let membersId = response.data
    membersId.map(member => {this.getMember(member)})
    console.log(this.members,"membersss")
  }
  getMember = async (memberId) => {
    const [response, error] = await tryCatch(() =>
    instance.get(`${URL}/member/${memberId}`))
    if (error) return console.error(error);
  this.members.push(response.data)
  
}
getUser = async (id) => {
  const [response, error] = await tryCatch(() => instance.get(`${URL}/user/${id}`));
  if (error) return console.error(error.message);
return response.data
}
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
