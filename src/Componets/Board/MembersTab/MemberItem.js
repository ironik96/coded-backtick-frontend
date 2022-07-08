import React from "react";
import { observer } from "mobx-react";
import deleteButton from "../../../images/deleteCross.png";

function Memberitem({ member }) {
  return (
    <div className=" flex container place-content-center ">
      <div className=" bg-white h-[70px] rounded-lg p-2 flex justify-between  w-[70%]">
        <div className="flex items-center  space-x-10 ">
          <img
            className="rounded-[100%] w-[60px] h-[60px] relative  left-[20px]
        "
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg"
          />
          <div className="items-center">
            <h1 className=""> {member.name}</h1>
            <h5 className="text-[10px]">View Profile</h5>
          </div>
        </div>
        <div className=" flex items-center p-[10px] h-[100%] w-[80px] rounded-lg  place-content-center">
          <img className="w-[20px]" src={deleteButton} />
        </div>
      </div>
    </div>
  );
}
export default observer(Memberitem);
