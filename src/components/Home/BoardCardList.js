import React from "react";
import { observer } from "mobx-react";
import Card from "./Card";
import ScrollContainer from "react-indiana-drag-scroll";
import BoardChart from "./card_components/BoardChart";
import userStore from "../../stores/userStore";
import { Link } from "react-router-dom";

const BoardCardList = () => {
  const cardListWidth =
    userStore.user.boards.length > 3
      ? "w-[calc(3*15rem+8rem)]"
      : "w-[calc(3*15rem+2rem)]";
  const cards = userStore.user.boards.map((board) => (
    <Link key={board._id} to={`/board/${board.slug}`} state={{ id: board._id }}>
      <Card leading={board.title} content={<BoardChart />} />
    </Link>
  ));
  return (
    <ScrollContainer vertical={false} className={"card-list " + cardListWidth}>
      {cards}
    </ScrollContainer>
  );
};

export default observer(BoardCardList);
