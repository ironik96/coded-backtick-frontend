import React from "react";
import { observer } from "mobx-react";
import Card from "./Card";
import ScrollContainer from "react-indiana-drag-scroll";
import BoardChart from "./card_components/BoardChart";
import userStore from "../../stores/userStore";

const BoardCardList = () => {
  const { boards } = userStore.user;
  const cards = boards.map((board) => (
    <Card key={board.slug} leading={board.title} content={<BoardChart />} />
  ));
  return (
    <ScrollContainer vertical={false} className="card-list">
      {cards}
    </ScrollContainer>
  );
};

export default observer(BoardCardList);
