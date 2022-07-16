import React, { useRef, useState, useEffect } from "react";

const ModifyTaskButton = ({ className, openModal, listLength, deleteTask }) => {
  const buttonRef = useRef();

  const [btnPosition, setBtnPosition] = useState();
  const [showOptions, setShowOptions] = useState(false);
  const btnState = showOptions ? " z-20 opacity-100" : " opacity-0";

  useEffect(() => {
    window.addEventListener("resize", getPosition);
    document
      .querySelector("div.scroll-event-div")
      .addEventListener("scroll", handleScrollX);
    document
      .querySelector("div.task-list-wrapper")
      .addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("resize", getPosition);
      document.removeEventListener("scroll", handleScrollX);
      document.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  useEffect(() => {
    getPosition();
  }, [listLength]);

  const openOptions = () => setShowOptions(true);
  const closeOptions = () => setShowOptions(false);

  function getPosition(left = 0, top = 0) {
    if (!buttonRef.current) return;
    setBtnPosition({
      x: buttonRef.current.offsetLeft - left,
      y: buttonRef.current.offsetTop + buttonRef.current.clientHeight - top,
    });
  }

  function handleScrollX(e) {
    getPosition(e.target.scrollLeft);
  }
  function handleScrollY(e) {
    getPosition(0, e.target.scrollTop);
  }

  return (
    <div className={className + btnState}>
      <button ref={buttonRef} onClick={openOptions}>
        <div className="flex gap-[2px] bg-light-grey p-2 rounded-sm">
          <div className="rounded-full w-1 h-1 bg-grey"></div>
          <div className="rounded-full w-1 h-1 bg-grey"></div>
          <div className="rounded-full w-1 h-1 bg-grey"></div>
        </div>
      </button>
      <TaskOptionsList
        btnPosition={btnPosition}
        showOptions={showOptions}
        closeOptions={closeOptions}
        openModal={openModal}
        deleteTask={deleteTask}
      />
    </div>
  );
};

const TaskOptionsList = ({
  btnPosition,
  showOptions,
  closeOptions,
  openModal,
  deleteTask,
}) => {
  if (!btnPosition) return <div></div>;
  const state = showOptions ? "" : "hidden";

  const onClickEdit = () => {
    closeOptions();
    openModal();
  };

  return (
    <div
      className={`${state} absolute bg-black/20 inset-0 z-10`}
      onClick={closeOptions}
    >
      <div
        style={{
          position: "absolute",
          left: `${btnPosition.x}px`,
          top: `${btnPosition.y}px`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-48 text-black bg-white border border-gray-200 rounded-lg ">
          <EditButton onClickEdit={onClickEdit} />
          <DeleteButton onClickDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
};

const EditButton = ({ onClickEdit }) => {
  return (
    <button
      onClick={onClickEdit}
      type="button"
      className="relative inline-flex gap-2 items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 20H3.25C3.25 20.4142 3.58579 20.75 4 20.75V20ZM4 16L3.46967 15.4697C3.32902 15.6103 3.25 15.8011 3.25 16H4ZM17 3L17.5303 2.46967C17.2374 2.17678 16.7626 2.17678 16.4697 2.46967L17 3ZM21 7L21.5303 7.53033C21.8232 7.23744 21.8232 6.76256 21.5303 6.46967L21 7ZM8 20V20.75C8.19891 20.75 8.38968 20.671 8.53033 20.5303L8 20ZM4.75 20V16H3.25V20H4.75ZM16.4697 3.53033L20.4697 7.53033L21.5303 6.46967L17.5303 2.46967L16.4697 3.53033ZM8 19.25H4V20.75H8V19.25ZM20.4697 6.46967L17.4697 9.46967L18.5303 10.5303L21.5303 7.53033L20.4697 6.46967ZM17.4697 9.46967L7.46967 19.4697L8.53033 20.5303L18.5303 10.5303L17.4697 9.46967ZM4.53033 16.5303L14.5303 6.53033L13.4697 5.46967L3.46967 15.4697L4.53033 16.5303ZM14.5303 6.53033L17.5303 3.53033L16.4697 2.46967L13.4697 5.46967L14.5303 6.53033ZM18.5303 9.46967L14.5303 5.46967L13.4697 6.53033L17.4697 10.5303L18.5303 9.46967Z"
          fill="#2A2A2A"
        />
      </svg>
      Edit
    </button>
  );
};

const DeleteButton = ({ onClickDelete }) => {
  return (
    <button
      onClick={onClickDelete}
      type="button"
      className="relative inline-flex gap-2 items-center w-full text-red px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.75 10C10.75 9.58579 10.4142 9.25 10 9.25C9.58579 9.25 9.25 9.58579 9.25 10H10.75ZM9.25 16C9.25 16.4142 9.58579 16.75 10 16.75C10.4142 16.75 10.75 16.4142 10.75 16H9.25ZM14.75 10C14.75 9.58579 14.4142 9.25 14 9.25C13.5858 9.25 13.25 9.58579 13.25 10H14.75ZM13.25 16C13.25 16.4142 13.5858 16.75 14 16.75C14.4142 16.75 14.75 16.4142 14.75 16H13.25ZM18.75 6C18.75 5.58579 18.4142 5.25 18 5.25C17.5858 5.25 17.25 5.58579 17.25 6H18.75ZM6.75 6C6.75 5.58579 6.41421 5.25 6 5.25C5.58579 5.25 5.25 5.58579 5.25 6H6.75ZM4 5.25C3.58579 5.25 3.25 5.58579 3.25 6C3.25 6.41421 3.58579 6.75 4 6.75V5.25ZM20 6.75C20.4142 6.75 20.75 6.41421 20.75 6C20.75 5.58579 20.4142 5.25 20 5.25V6.75ZM14.25 6C14.25 6.41421 14.5858 6.75 15 6.75C15.4142 6.75 15.75 6.41421 15.75 6H14.25ZM8.25 6C8.25 6.41421 8.58579 6.75 9 6.75C9.41421 6.75 9.75 6.41421 9.75 6H8.25ZM9.25 10V16H10.75V10H9.25ZM13.25 10V16H14.75V10H13.25ZM17.25 6V18H18.75V6H17.25ZM16 19.25H8V20.75H16V19.25ZM6.75 18V6H5.25V18H6.75ZM8 19.25C7.30964 19.25 6.75 18.6904 6.75 18H5.25C5.25 19.5188 6.48122 20.75 8 20.75V19.25ZM17.25 18C17.25 18.6904 16.6904 19.25 16 19.25V20.75C17.5188 20.75 18.75 19.5188 18.75 18H17.25ZM4 6.75H20V5.25H4V6.75ZM15.75 6V5H14.25V6H15.75ZM13 2.25H11V3.75H13V2.25ZM8.25 5V6H9.75V5H8.25ZM11 2.25C9.48122 2.25 8.25 3.48122 8.25 5H9.75C9.75 4.30964 10.3096 3.75 11 3.75V2.25ZM15.75 5C15.75 3.48122 14.5188 2.25 13 2.25V3.75C13.6904 3.75 14.25 4.30964 14.25 5H15.75Z"
          fill="#DF6D45"
        />
      </svg>
      Delete
    </button>
  );
};

export default ModifyTaskButton;
