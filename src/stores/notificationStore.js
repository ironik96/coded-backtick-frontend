import { makeAutoObservable } from "mobx";
import instance from "./instance";

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

  setNotifications = (notifications) =>
    (this.notifications = [...notifications]);

  hasNotifications = () => this.notifications.length > 0;
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
