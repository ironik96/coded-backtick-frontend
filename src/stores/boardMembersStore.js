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

  addMember = async (notification) => {
    if (!notification) return;
    const user = { boardId: notification.boardId, userId: notification.userId };
    const [response, error] = await tryCatch(() =>
      instance.put(`${URL}/${user.boardId}/`, user)
    );
    if (error) return console.error(error);
    notificationStore.updateNotification({ ...notification, seen: true });
  };

  deleteMember = async (boardId, memberid) => {
    const [response, error] = await tryCatch(() =>
      instance.delete(`${URL}/${boardId}/${memberid}`)
    );
    if (error) return console.error(error);
  };

  sendInvite = (invited) => {
    if (!invited) return;
    const inviteTitle = `${userStore.user.fname} sent you an invite to ${boardStore.board.title} board`;

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
