import React from "react";
import Card from "./Card";

const StaticCardList = () => {
  return (
    <div className="card-list">
      <Card
        leading={<div>Create New Board</div>}
        content={<button>+</button>}
      />
    </div>
  );
};

export default StaticCardList;
