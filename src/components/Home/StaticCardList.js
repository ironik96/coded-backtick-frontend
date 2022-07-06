import React from "react";
import Card from "./Card";
import AddBoard from "./card_components/AddBoard";
import DateIcon from "./card_components/DateIcon";
import TodayDate from "./card_components/TodayDate";
import Wallet from "./card_components/Wallet";
import { Link } from "react-router-dom";

const StaticCardList = () => {
  return (
    <div className="card-list">
      <Link to={"/board/new"}>
        <Card leading="Create New Board" content={<AddBoard />} />
      </Link>
      <Card
        leading="Today Date"
        trailing={<DateIcon />}
        content={<TodayDate />}
      />
      <Card leading="Your Tokens" content={<Wallet />} />
    </div>
  );
};

export default StaticCardList;
