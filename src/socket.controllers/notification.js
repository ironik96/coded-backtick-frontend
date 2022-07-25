import notificationStore from "../stores/notificationStore";
import userStore from "../stores/userStore";

export const handleNotificationSocket = (notification) => {
  if (!userStore.user) return;
  if (notification.userId === userStore.user._id)
    notificationStore.addNotification(notification);
};
