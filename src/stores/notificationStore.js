import { makeAutoObservable } from "mobx";
import instance from "./instance";
import userStore from "./userStore";

const BASE_URL = "/notifications";

class NotificationStore {
  constructor() {
    makeAutoObservable(this);
  }

  notifications = [];

  fetchNotifications = async (id) => {
    if (!id) return;
    const [response, error] = await tryCatch(() =>
      instance.get(`${BASE_URL}/${id}`)
    );
    if (error) return console.error(error, response.data);
    this.setNotifications(response.data);
  };

  createNotification = async (notification) => {
    if (!notification) return;
    const [response, error] = await tryCatch(() =>
      instance.post(BASE_URL, notification)
    );
    if (error) return console.error(error, response.data);
  };

  updateNotification = async (notification) => {
    if (!notification) return;
    const [response, error] = await tryCatch(() =>
      instance.put(BASE_URL, notification)
    );
    if (error) return console.error(error, response.data);
    this.updateNotificationLocally(response.data);
  };

  setNotifications = (notifications) =>
    (this.notifications = [...notifications]);

  handleNotificationSocket = (notification) => {
    if (!userStore.user) return;
    if (notification.userId === userStore.user._id)
      this.addNotification(notification);
  };

  updateNotificationLocally = (notification) =>
    (this.notifications = this.notifications.map((not) =>
      not._id === notification._id ? notification : not
    ));

  unseenNotifications = (notifications) =>
    notifications.filter(({ seen }) => !seen);

  hasUnseenNotifications = (notifications) =>
    this.unseenNotifications(notifications).length > 0;

  addNotification = (notification) => {
    this.notifications = [...this.notifications, notification];
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

export default new NotificationStore();
