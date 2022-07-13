import React from "react";
import { observer } from "mobx-react";
import coin from "../../../images/coin.png";
import RankAvatar from "./RankAvatar";

function RankLeaderboard({ member }) {
  const { userId: user } = member;
  return (
    <div className="flex justify-center">
      <div className="bg-white h-[70px] rounded-lg px-6 py-2 flex items-center gap-4  w-[70%]">
        <RankAvatar
          rank={member.rank}
          image="https://ichef.bbci.co.uk/news/976/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg" //{user.image}
          alt="profile"
        />
        <h1>{user.fname + " " + user.lname}</h1>
        <div className=" flex items-center p-[10px] h-[100%] w-[70px] rounded-lg bg-theme-light-grey place-content-center ml-auto">
          <span>{member.points}</span>
          <img src={coin} className="w-[20px]" />
        </div>
      </div>
    </div>
  );
}
export default observer(RankLeaderboard);
