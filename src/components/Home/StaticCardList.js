import React from "react";
import Card from "./Card";
import AddBoard from "./card_components/AddBoard";
import DateIcon from "./card_components/DateIcon";
import TodayDate from "./card_components/TodayDate";
import Wallet from "./card_components/Wallet";

const StaticCardList = () => {
  const clickCreate = () => {
    console.log("create board");
  };
  const clickSpend = () => {
    console.log("click spend");
  };

  return (
    <div className="card-list">
      <Card
        leading="Create New Board"
        content={<AddBoard />}
        onClick={clickCreate}
      />
      <Card
        leading="Today Date"
        trailing={<DateIcon />}
        content={<TodayDate />}
      />
      <Card leading="Your Tokens" content={<Wallet onClick={clickSpend} />} />
    </div>
  );
};

export default StaticCardList;
