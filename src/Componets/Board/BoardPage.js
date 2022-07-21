import React from "react";
import { observer } from "mobx-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useEffect } from "react";
import BoardTab from "./BoardTabComponets/BoardTab";
import LeaderboardTab from "./LeaderBoardTab/LeaderboardTab";
import { useLocation } from "react-router-dom";
import boardStore from "../../stores/boardStore";
import Loading from "../../components/shared/Loading";
import MemberTab from "./MembersTab/MemberTab";
import CreateBoard from "../../components/CreateBoard/CreateBoard";
import ReviewTab from "./ReviewTab/ReviewTab";
import boardIcon from "../../images/blackboard.png";
import RewardTab from "./RewardTab/RewardTab"
CustomTab.tabsRole = "Tab";
function BoardPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { id } = useLocation().state;
  useEffect(() => {
    boardStore.fetchBoard(id);
    return () => boardStore.dispose();
  }, []);

  if (!boardStore.board) return <Loading />;

  const boardTitle = (
    <div className="absolute left-[20px] top-1/2 -translate-y-1/2 flex items-center gap-3 bg-light-grey px-2 py-1 rounded-xl">
      <img src={boardIcon} className="object-cover w-6 h-6" alt="board" />
      <h1 className=" text-2xl font-bold text-black ">
        {boardStore.board.title}
      </h1>
    </div>
  );

  return (
    <div className="h-full bg-theme-light-grey text-sm font-medium text-center text-gray-500  dark:text-gray-400">
      <Tabs
        selectedIndex={selectedIndex}
        onSelect={(tabIndex) => setSelectedIndex(tabIndex)}
        className="h-full"
        selectedTabPanelClassName="h-[calc(100%-52px)]"
      >
        <TabList className="h-[52px] bg-white flex justify-center relative">
          {boardTitle}
          <CustomTab>Board</CustomTab>
          <CustomTab>Leaderboard</CustomTab>
          <CustomTab>Members</CustomTab>
          <CustomTab>Reward</CustomTab>
          {boardStore.userIsAdmin() ? <CustomTab>Review</CustomTab> : <div />}
          {boardStore.userIsAdmin() && <CustomTab>Settings</CustomTab>}
        </TabList>

        <TabPanel>
          <BoardTab />
        </TabPanel>
        <TabPanel>
          <LeaderboardTab />
        </TabPanel>
        <TabPanel>
          <MemberTab />
        </TabPanel>
        <TabPanel>
        <RewardTab />
        </TabPanel>
        {boardStore.userIsAdmin() && (
          <TabPanel>
            <ReviewTab />
          </TabPanel>
        )}
        {boardStore.userIsAdmin() && (
          <TabPanel>
            <CreateBoard />
          </TabPanel>
        )}
      </Tabs>
    </div>
  );
}

function CustomTab(props) {
  const selectedStyle = props.selected
    ? "bg-theme-light-grey text-theme-blue font-bold bg-gray-50"
    : "";
  return (
    <Tab
      {...props}
      className={
        "p-4 rounded-t-lg hover:text-theme-blue hover:bg-gray-50 dark:hover:bg-theme-light-grey dark:hover:text-theme-blue" +
        selectedStyle
      }
    ></Tab>
  );
}

export default observer(BoardPage);
