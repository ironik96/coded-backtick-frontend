import { makeAutoObservable } from "mobx";
import boardStore from "./boardStore";
import instance from "./instance";
import notificationStore from "./notificationStore";
import userStore from "./userStore";

const URL = "/boardMembers";

class BoardMembersStore {
  constructor() {
    makeAutoObservable(this);
  }
  admin = null

  addMember = async (notification) => {
    if (!notification) return;

    const [response, error] = await tryCatch(() =>
      instance.put(`${URL}/add-member`, { ...notification, seen: true })
    );
    if (error) return console.error(error);
    const { board, notification: updatedNotification } = response.data;
    userStore.addBoard(board);
    notificationStore.updateNotificationLocally(updatedNotification);
  };

  updateMember = async (member) => {
    const [response, error] = await tryCatch(() =>
      instance.put(`${URL}/member/${member._id}/`, member)
    );
    if (error) return console.error(error);
    return response.data;
  };

  deleteMember = async (boardId, memberId,userId) => {
    boardStore.board.boardMembers = boardStore.board.boardMembers.filter(
      (member) => member._id != memberId
    );
    
    const [response, error] = await tryCatch(() =>
      instance.delete(`${URL}/${boardId}/${memberId}/${userId}`)
    );
    if (error) return console.error(error);
  };

  sendInvite = (invited) => {
    if (!invited) return;
    // if(boardStore.board.title)
    let inviteTitle = `${userStore.user.fname} sent you an invite to ${boardStore.board.title}`;
    if (!boardStore.board.title.toLowerCase().includes("board"))
      inviteTitle += " board";

    const invite = {
      userId: invited,
      title: inviteTitle,
      type: "invite",
      boardId: boardStore.board._id,
      senderId: userStore.user._id,
    };

    notificationStore.createNotification(invite);
  };

  getUsers = async () => {
    const [response, error] = await tryCatch(() => instance.get(`/users`));
    if (error) return console.error(error.message);
    this.users = response.data;
  };
  getByUserId = async (userId) => {
    const [response, error] = await tryCatch(() => instance.get(`/user/${userId}`));
    if (error) return console.error(error);

  this.admin = response.data
  
  };
  getMemberByUserId = (userId) => {
    return boardStore.board.boardMembers.find(
      (member) => member.userId._id === userId
    );
  };
  getMemberByMemberId = (memberId) =>
    boardStore.board.boardMembers.find(({ _id }) => _id === memberId);

  getMemberTaskList = (userId) => {
    const { _id: memberId } = this.getMemberByUserId(userId);
    return boardStore.board.tasks.filter(
      ({ assignedTo }) => memberId === assignedTo
    );
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
