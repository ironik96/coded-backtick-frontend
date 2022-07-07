import BoardCardList from "./BoardCardList";
import "./home.css";
import StaticCardList from "./StaticCardList";

const Home = () => {
  return (
    <div className="wrapper">
      <StaticCardList />
      <BoardCardList />
    </div>
  );
};

export default Home;
