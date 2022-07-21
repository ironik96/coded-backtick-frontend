import { observer } from "mobx-react";
import React, { useState } from "react";
import boardMembersStore from "../../../stores/boardMembersStore";
import boardStore from "../../../stores/boardStore";
import taskStore from "../../../stores/taskStore";
import userStore from "../../../stores/userStore";

const AssignButton = ({ task }) => {
  const [styles, setStyles] = useState({
    tooltip: { opacity: 0 },
    icon: { fill: "#869199" },
  });
  const currentMember = boardMembersStore.getMemberByUserId(userStore.user._id);
  const assignedMember = boardMembersStore.getMemberByMemberId(task.assignedTo);
  const assignedImage = assignedMember?.userId.image;
  const assignedName = `${assignedMember?.userId.fname} ${assignedMember?.userId.lname}`;
  const isAssigned = !!task.assignedTo;
  const isAdmin = boardStore.userIsAdmin();
  const assignedToCurrentUser = currentMember?._id === task.assignedTo;
  const isDone = task.list === "done";

  const onClickAssign = () =>
    taskStore.updateTask({ _id: task._id, assignedTo: currentMember._id });

  const onClickUnassign = () =>
    taskStore.updateTask({ _id: task._id, assignedTo: null });

  let tooltipTitle = "Assign Me";
  let tooltipDisplay = "block";
  if (isAssigned && (isAdmin || assignedToCurrentUser))
    tooltipTitle = "Unassign";
  else if (isAssigned) tooltipDisplay = "none";

  return (
    <div className="relative self-end">
      <Placeholder
        isAssigned={isAssigned}
        isAdmin={isAdmin}
        assignedToCurrentUser={assignedToCurrentUser}
        image={assignedImage}
        name={assignedName}
        onClickAssign={onClickAssign}
        onClickUnassign={onClickUnassign}
        setStyles={setStyles}
        styles={styles}
        isDone={isDone}
      />
      <div
        style={{ ...styles.tooltip, display: tooltipDisplay }}
        className="absolute h-max w-max rounded-xl bg-light-grey text-theme-dark-grey transition-opacity py-1 px-2 
        top-full -left-1 text-xs -translate-x-full -translate-y-full"
      >
        {tooltipTitle}
      </div>
    </div>
  );
};

const Placeholder = ({
  isAssigned,
  isAdmin,
  isDone,
  assignedToCurrentUser,
  image,
  name,
  onClickAssign,
  onClickUnassign,
  setStyles,
  styles,
}) => {
  const onEnter = () =>
    setStyles({ tooltip: { opacity: 1 }, icon: { fill: "white" } });
  const onLeave = () =>
    setStyles({ tooltip: { opacity: 0 }, icon: { fill: "#869199" } });

  const imgTag = (
    <img
      title={name}
      className="rounded-full w-[24px] h-[24px] inline"
      src={image}
      alt=""
    />
  );

  if (isDone) return { imgTag };

  if (isAssigned && (isAdmin || assignedToCurrentUser))
    return (
      <button
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={onClickUnassign}
      >
        {imgTag}
      </button>
    );
  if (isAssigned) return { imgTag };
  if (isAdmin) return <div></div>;

  return (
    <button
      className="rounded-full w-[24px] h-[24px] border-2 border-dashed border-grey hover:border-solid hover:bg-grey flex justify-center items-center"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClickAssign}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.icon}
      >
        <path
          d="M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7H12.75ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM7 11.25C6.58579 11.25 6.25 11.5858 6.25 12C6.25 12.4142 6.58579 12.75 7 12.75V11.25ZM17 12.75C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25V12.75ZM11.25 7V17H12.75V7H11.25ZM7 12.75H17V11.25H7V12.75Z"
          fill="inherit"
        />
      </svg>
    </button>
  );
};

export default observer(AssignButton);
