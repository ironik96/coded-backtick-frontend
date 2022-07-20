import React, { useState } from "react";
import deleteButton from "../../../images/deleteCross.png";
import boardMembersStore from "../../../stores/boardMembersStore";
import boardStore from "../../../stores/boardStore";
import { observer } from "mobx-react";
import Alert from "../../../components/shared/Alert";
import BasicModal from "../../../components/shared/BasicModal";

function Memberitem({ member }) {
  const { userId: user } = member;
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleOnClick = async (e) => {
    boardMembersStore.deleteMember(
      boardStore.board._id,
      member._id,
      member.userId._id
    );
    closeModal();
    Alert("Removed successfully ", "success");
  };
  return (
    <>
      <div className=" flex place-content-center ">
        <div className=" bg-white h-[70px] rounded-lg p-2 flex justify-between  w-[70%]">
          <div className="flex items-center  space-x-10 ">
            <img
              className="rounded-[100%] w-[60px] h-[60px] object-cover relative left-[20px]"
              src={user.image}
            />
            <div className="items-center">
              <h1 className=""> {user.fname + " " + user.lname}</h1>
              <h5 className="text-[10px]">View Profile</h5>
            </div>
          </div>
          <div className="flex items-center p-[10px] h-[100%] w-[80px] rounded-lg  place-content-center">
            {boardStore.userIsCreater() ? (
              <button onClick={openModal}>
                <img className="w-[20px]" src={deleteButton} />
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
      <BasicModal closeModal={closeModal} showModal={showModal}>
        <div className="h-40 min-w-[12rem] flex flex-col justify-around">
          <h1 className="text-lg self-start text-black">
            {`Remove ${user.fname} from board ?`}
          </h1>
          <div className="flex justify-end gap-2 self-center">
            <button
              onClick={closeModal}
              className="bg-blue px-2 py-1 rounded-md text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleOnClick}
              className="bg-red px-2 py-1 rounded-md text-white"
            >
              Remove
            </button>
          </div>
        </div>
      </BasicModal>
    </>
  );
}
export default observer(Memberitem);
