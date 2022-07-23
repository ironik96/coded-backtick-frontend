import React from "react";
import { observer } from "mobx-react";
import Card from "./Card";
import ScrollContainer from "react-indiana-drag-scroll";
import BoardChart from "./card_components/BoardChart";
import userStore from "../../stores/userStore";
import { Link } from "react-router-dom";
import creater from "../../images/crown.png";
import admin from "../../images/admin.png";
import member from "../../images/account.png";

const BoardCardList = () => {
  const cardListWidth =
    userStore.user.boards.length > 3
      ? "w-[calc(3*15rem+8rem)]"
      : "w-[calc(3*15rem+2rem)]";

  const cards = userStore.user.boards.map((board) => (
    <BoardCard key={board._id} board={board}></BoardCard>
  ));
  return (
    <ScrollContainer vertical={false} className={"card-list " + cardListWidth}>
      {cards}
    </ScrollContainer>
  );
};

function BoardCard({ board }) {
  let src;
  const role = userStore.getBoardRole(board);
  if (role === "creater") src = creater;
  if (role === "admin") src = admin;
  if (role === "member") src = member;

  return (
    <Link
      to={`/board/${board.slug}`}
      state={{
        id: board._id,
      }}
    >
      <Card
        leading={board.title}
        content={<BoardChart {...userStore.boardChartInfo(board)} />}
        trailing={<img alt={`board ${role}`} src={src} className="w-5 h-5" />}
      />
    </Link>
  );
}
export default observer(BoardCardList);
