import React from "react";
import { observer } from "mobx-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import BoardTab from "./BoardTabComponets/BoardTab";
import LeaderboardTab from "./LeadBoard/LeaderboardTab";

CustomTab.tabsRole = "Tab";
function BoardPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="h-full bg-theme-light-grey text-sm font-medium text-center text-gray-500  dark:text-gray-400">
      <Tabs
        selectedIndex={selectedIndex}
        onSelect={(tabIndex) => setSelectedIndex(tabIndex)}
        className="h-full"
      >
        <TabList className="bg-white h-[52px]">
          <CustomTab>Board</CustomTab>
          <CustomTab>Leaderboard</CustomTab>
          <CustomTab>Members</CustomTab>
          <CustomTab>Reward</CustomTab>
          <CustomTab>Review</CustomTab>
        </TabList>

        <TabPanel className="h-[calc(100%-52px)]">
          <BoardTab />
        </TabPanel>
        <TabPanel>
          <LeaderboardTab />
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
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
        "inline-block p-4 rounded-t-lg hover:text-theme-blue hover:bg-gray-50 dark:hover:bg-theme-light-grey dark:hover:text-theme-blue" +
        selectedStyle
      }
    ></Tab>
  );
}

export default observer(BoardPage);
