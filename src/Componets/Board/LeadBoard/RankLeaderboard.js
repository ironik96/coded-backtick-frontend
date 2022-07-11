import React from "react";
import { observer } from "mobx-react";
import coin from "../../../images/coin.png";
import RankAvatar from "./RankAvatar";

function RankLeaderboard({ member }) {
  return (
    <div className="place-content-center flex">
      <div className="container bg-white h-[70px] rounded-full px-6 py-2 flex items-center gap-4">
        <RankAvatar
          rank={member.rank}
          image="https://ichef.bbci.co.uk/news/976/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg"
        />
        <h1>{member.name}</h1>
        <div className=" flex items-center p-[10px] h-[100%] w-[80px] rounded-full bg-theme-light-grey place-content-center ml-auto">
          <span>{member.point}</span>
          <img src={coin} />
        </div>
      </div>
    </div>
  );
}
export default observer(RankLeaderboard);