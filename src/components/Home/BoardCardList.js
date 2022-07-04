import React from "react";
import Card from "./Card";

const BoardCardList = () => {
  const cards = [...Array(3).keys()].map((e) => <Card key={e} />);
  return <div className="card-list">{cards}</div>;
};

export default BoardCardList;
