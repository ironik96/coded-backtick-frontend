import React from "react";
import Card from "./Card";
import ScrollContainer from "react-indiana-drag-scroll";
import BoardChart from "./card_components/BoardChart";

const BoardCardList = () => {
  const cards = [...Array(9).keys()].map((e) => (
    <Card key={e} leading={"Project Name"} content={<BoardChart />} />
  ));
  return (
    <ScrollContainer vertical={false} className="card-list">
      {cards}
    </ScrollContainer>
  );
};

export default BoardCardList;
