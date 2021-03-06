import React from "react";
import boardMembersStore from "../../stores/boardMembersStore";
import notificationStore from "../../stores/notificationStore";

const NotificationItem = ({ notification }) => {
  const onClickAccept = () => boardMembersStore.addMember(notification);

  const onClickReject = () =>
    notificationStore.updateNotification({ ...notification, seen: true });

  return (
    <>
      <div className="flex items-center h-14">
        <p className="line-clamp-2 border-r">{notification.title}</p>
        <div className="w-4"></div>
        <AcceptButton onClickAccept={onClickAccept} />
        <div className="w-6"></div>
        <RejectButton onClickReject={onClickReject} />
      </div>
    </>
  );
};

const ICON_SIZE = 24;

const AcceptButton = ({ onClickAccept }) => {
  return (
    <button
      style={{ width: ICON_SIZE, height: ICON_SIZE }}
      onClick={onClickAccept}
      className="shrink-0"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-green"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5303 9.53033C17.8232 9.23744 17.8232 8.76256 17.5303 8.46967C17.2374 8.17678 16.7626 8.17678 16.4697 8.46967L17.5303 9.53033ZM9.99998 16L9.46965 16.5304C9.76255 16.8232 10.2374 16.8232 10.5303 16.5303L9.99998 16ZM7.53027 12.4697C7.23737 12.1768 6.7625 12.1768 6.46961 12.4697C6.17671 12.7626 6.17672 13.2374 6.46961 13.5303L7.53027 12.4697ZM16.4697 8.46967L9.46965 15.4697L10.5303 16.5303L17.5303 9.53033L16.4697 8.46967ZM6.46961 13.5303L9.46965 16.5304L10.5303 15.4697L7.53027 12.4697L6.46961 13.5303ZM20.25 12C20.25 16.5563 16.5563 20.25 12 20.25V21.75C17.3848 21.75 21.75 17.3848 21.75 12H20.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75Z"
          fill="inherit"
        />
      </svg>
    </button>
  );
};

const RejectButton = ({ onClickReject }) => {
  return (
    <button
      style={{ width: ICON_SIZE, height: ICON_SIZE }}
      onClick={onClickReject}
      className="shrink-0"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="fill-red"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5303 6.53033C14.8232 6.23744 14.8232 5.76256 14.5303 5.46967C14.2374 5.17678 13.7626 5.17678 13.4697 5.46967L14.5303 6.53033ZM5.46967 13.4697C5.17678 13.7626 5.17678 14.2374 5.46967 14.5303C5.76256 14.8232 6.23744 14.8232 6.53033 14.5303L5.46967 13.4697ZM6.53034 5.46967C6.23745 5.17678 5.76257 5.17678 5.46968 5.46967C5.17678 5.76256 5.17678 6.23744 5.46968 6.53033L6.53034 5.46967ZM13.4697 14.5303C13.7626 14.8232 14.2374 14.8232 14.5303 14.5303C14.8232 14.2374 14.8232 13.7626 14.5303 13.4697L13.4697 14.5303ZM13.4697 5.46967L5.46967 13.4697L6.53033 14.5303L14.5303 6.53033L13.4697 5.46967ZM5.46968 6.53033L13.4697 14.5303L14.5303 13.4697L6.53034 5.46967L5.46968 6.53033ZM18.25 10C18.25 14.5563 14.5563 18.25 10 18.25V19.75C15.3848 19.75 19.75 15.3848 19.75 10H18.25ZM10 18.25C5.44365 18.25 1.75 14.5563 1.75 10H0.25C0.25 15.3848 4.61522 19.75 10 19.75V18.25ZM1.75 10C1.75 5.44365 5.44365 1.75 10 1.75V0.25C4.61522 0.25 0.25 4.61522 0.25 10H1.75ZM10 1.75C14.5563 1.75 18.25 5.44365 18.25 10H19.75C19.75 4.61522 15.3848 0.25 10 0.25V1.75Z"
          fill="inherit"
        />
      </svg>
    </button>
  );
};

export default NotificationItem;
