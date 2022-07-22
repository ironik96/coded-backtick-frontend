import React, { useState } from "react";
import logo from "../../icons/Logo.svg";
import lazy from "../../images/lazy.png";
import { Link } from "react-router-dom";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import notificationStore from "../../stores/notificationStore";
import NotificationItem from "./NotificationItem";
import userStore from "../../stores/userStore";

const logoSize = 48;
const iconSize = 36;
const Navbar = () => {
  const trailing = authStore.user ? <ProfileTrailing /> : <AuthTrailing />;

  return (
    <nav className="w-full h-full flex bg-white items-center p-4 justify-between">
      <Link to={"/"} className="flex gap-3 items-center">
        <img src={logo} width={logoSize} height={logoSize} alt="logo" />
        <div className="text-3xl font-bold">Backtick</div>
      </Link>
      {trailing}
    </nav>
  );
};

const ProfileTrailing = observer(() => {
  const { notifications } = notificationStore;
  const [showNotifications, setShowNotifications] = useState(false);
  const [ping, setPing] = useState(true);

  const showPing =
    ping && notificationStore.hasUnseenNotifications(notifications);

  const onClickBell = () => {
    if (ping) setPing(false);
    setShowNotifications(!showNotifications);
  };

  let notificationList;

  if (notificationStore.hasUnseenNotifications(notifications))
    notificationList = notificationStore
      .unseenNotifications(notifications)
      .map((notification) => (
        <NotificationItem key={notification._id} notification={notification} />
      ));
  else
    notificationList = (
      <div className="text-grey text-center">no new notifications</div>
    );

  return (
    <div className="flex gap-3 items-center">
      <div className="relative">
        <svg
          className="fill-black hover:fill-blue cursor-pointer"
          onClick={onClickBell}
          width={iconSize}
          height={iconSize}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.5936 29.3436L21.1239 29.8739L20.5936 29.3436ZM19.1742 30.292L18.8872 29.5991L19.1742 30.292ZM15.8258 30.292L15.5388 30.9849L15.8258 30.292ZM14.4064 29.3436L13.8761 29.8739L14.4064 29.3436ZM13.458 27.9242L12.7651 28.2113L13.458 27.9242ZM13.875 24.7917C13.875 24.3775 13.5392 24.0417 13.125 24.0417C12.7108 24.0417 12.375 24.3775 12.375 24.7917H13.875ZM22.625 24.7917C22.625 24.3775 22.2892 24.0417 21.875 24.0417C21.4608 24.0417 21.125 24.3775 21.125 24.7917H22.625ZM29.1667 24.7917V25.5417C29.4155 25.5417 29.6482 25.4182 29.7877 25.2121C29.9272 25.0061 29.9555 24.7442 29.863 24.5131L29.1667 24.7917ZM5.83334 24.7917L5.16252 24.4563C5.04628 24.6887 5.0587 24.9649 5.19536 25.186C5.33201 25.4071 5.57341 25.5417 5.83334 25.5417V24.7917ZM21.125 26.25C21.125 26.726 21.0312 27.1974 20.8491 27.6372L22.2349 28.2113C22.4924 27.5895 22.625 26.923 22.625 26.25H21.125ZM20.8491 27.6372C20.6669 28.077 20.3999 28.4767 20.0633 28.8133L21.1239 29.8739C21.5998 29.398 21.9773 28.833 22.2349 28.2113L20.8491 27.6372ZM20.0633 28.8133C19.7267 29.1499 19.327 29.4169 18.8872 29.5991L19.4613 30.9849C20.0831 30.7273 20.648 30.3498 21.1239 29.8739L20.0633 28.8133ZM18.8872 29.5991C18.4474 29.7812 17.9761 29.875 17.5 29.875V31.375C18.173 31.375 18.8395 31.2424 19.4613 30.9849L18.8872 29.5991ZM17.5 29.875C17.024 29.875 16.5526 29.7812 16.1128 29.5991L15.5388 30.9849C16.1606 31.2424 16.827 31.375 17.5 31.375V29.875ZM16.1128 29.5991C15.673 29.4169 15.2734 29.1499 14.9367 28.8133L13.8761 29.8739C14.352 30.3498 14.917 30.7273 15.5388 30.9849L16.1128 29.5991ZM14.9367 28.8133C14.6001 28.4767 14.3331 28.077 14.1509 27.6372L12.7651 28.2113C13.0227 28.833 13.4002 29.398 13.8761 29.8739L14.9367 28.8133ZM14.1509 27.6372C13.9688 27.1974 13.875 26.726 13.875 26.25H12.375C12.375 26.923 12.5076 27.5895 12.7651 28.2113L14.1509 27.6372ZM13.875 26.25V24.7917H12.375V26.25H13.875ZM22.625 26.25V24.7917H21.125V26.25H22.625ZM25.5 13.125C25.5 15.4347 26.261 18.4454 26.9915 20.8195C27.3607 22.0193 27.7295 23.0797 28.0061 23.8403C28.1445 24.2208 28.2599 24.5268 28.3411 24.7384C28.3817 24.8442 28.4137 24.9264 28.4357 24.9825C28.4467 25.0106 28.4552 25.0321 28.461 25.0469C28.4639 25.0542 28.4662 25.0599 28.4677 25.0638C28.4685 25.0657 28.4691 25.0672 28.4696 25.0683C28.4698 25.0689 28.4699 25.0693 28.4701 25.0696C28.4701 25.0698 28.4702 25.0699 28.4702 25.07C28.4703 25.0701 28.4703 25.0702 29.1667 24.7917C29.863 24.5131 29.8631 24.5132 29.8631 24.5132C29.863 24.5131 29.863 24.5131 29.863 24.5131C29.863 24.5129 29.8629 24.5127 29.8627 24.5124C29.8625 24.5117 29.862 24.5105 29.8614 24.509C29.8601 24.5058 29.8582 24.501 29.8556 24.4944C29.8504 24.4812 29.8425 24.4613 29.8321 24.4349C29.8114 24.3821 29.7808 24.3034 29.7416 24.2012C29.6632 23.9969 29.5509 23.6991 29.4158 23.3277C29.1455 22.5843 28.7852 21.5484 28.4252 20.3784C27.6973 18.0129 27 15.1903 27 13.125H25.5ZM5.83334 24.7917C6.50416 25.1271 6.50424 25.1269 6.50433 25.1267C6.50437 25.1267 6.50447 25.1265 6.50456 25.1263C6.50474 25.1259 6.50496 25.1255 6.50522 25.125C6.50575 25.1239 6.50646 25.1225 6.50733 25.1207C6.50909 25.1172 6.51154 25.1122 6.51465 25.1059C6.52089 25.0932 6.5298 25.075 6.54122 25.0514C6.56405 25.0042 6.59689 24.9355 6.63831 24.8468C6.72113 24.6693 6.83833 24.4114 6.97843 24.0845C7.25847 23.4311 7.63087 22.5 8.00319 21.383C8.74483 19.1581 9.50001 16.1551 9.50001 13.125H8.00001C8.00001 15.9282 7.29685 18.7586 6.58016 20.9087C6.22332 21.9792 5.86655 22.871 5.59971 23.4936C5.46637 23.8047 5.35571 24.0481 5.27903 24.2125C5.2407 24.2946 5.21087 24.3569 5.19098 24.3981C5.18103 24.4186 5.17357 24.4339 5.16877 24.4436C5.16637 24.4485 5.16463 24.452 5.16358 24.4541C5.16306 24.4552 5.16271 24.4559 5.16253 24.4562C5.16244 24.4564 5.16239 24.4565 5.16239 24.4565C5.16239 24.4565 5.16243 24.4565 5.16242 24.4565C5.16247 24.4564 5.16252 24.4563 5.83334 24.7917ZM29.1667 24.0417H5.83334V25.5417H29.1667V24.0417ZM17.5 3.625C12.32 3.625 8.00001 7.94495 8.00001 13.125H9.50001C9.50001 8.77338 13.1484 5.125 17.5 5.125V3.625ZM27 13.125C27 7.94495 22.6801 3.625 17.5 3.625V5.125C21.8516 5.125 25.5 8.77338 25.5 13.125H27Z" />
        </svg>
        <div style={{ display: showPing ? "block" : "none" }}>
          <span className="absolute w-2 h-2 rounded-full bg-red top-0 right-0 animate-ping"></span>
          <span className="absolute w-2 h-2 rounded-full bg-red top-0 right-0"></span>
        </div>
        <div
          style={{
            opacity: showNotifications ? 1 : 0,
            visibility: showNotifications ? "visible" : "hidden",
          }}
          className="absolute transition-opacity duration-300 top-[calc(100%+1rem)] w-64 -right-[36px] bg-white p-2 rounded-md shadow text-sm flex flex-col z-20 gap-3"
        >
          {notificationList}
        </div>
      </div>

      <Link to={"/Profile"}>
        <img
          style={{ width: iconSize, height: iconSize }}
          className="rounded-full hover:outline hover:outline-blue cursor-pointer"
          src={userStore.user?.image ? userStore.user?.image : lazy}
          alt="avatar"
        />
      </Link>
    </div>
  );
});

const AuthTrailing = () => {
  return (
    <div className="flex justify-end gap-4">
      <Link
        to={`/Login`}
        className="bg-transparent text-darkGray font-light py-2 px-4 m-auto "
      >
        LOGIN
      </Link>
      <div className="border-l border-indigo-600"></div>
      <Link
        to={`/Register`}
        className="bg-blue text-white font-light py-2 px-4 rounded m-auto"
      >
        REGISTER
      </Link>
    </div>
  );
};

export default observer(Navbar);
