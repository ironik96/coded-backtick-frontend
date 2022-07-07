import React from 'react'
import { observer } from "mobx-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from 'react';
import BoardTab from './BoardTabComponets/BoardTab';
import LeaderboardTab from './LeadBoard/LeaderboardTab';

function BoardPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className= "bg-white" >
<div className= "flex flex-wrap text-sm font-medium text-center text-gray-500  dark:text-gray-400">
 <Tabs 
        selectedIndex={selectedIndex}
        onSelect={tabIndex => setSelectedIndex(tabIndex)}
      >
        <TabList>
          <Tab className="inline-block p-4 rounded-t-lg hover:text-theme-blue hover:bg-gray-50 dark:hover:bg-theme-light-grey dark:hover:text-theme-blue focus:bg-theme-light-grey focus:text-theme-blue focus:font-bold" >Board</Tab>
          <Tab tabIndex='0' className="inline-block p-4 rounded-t-lg hover:text-theme-blue hover:bg-gray-50 dark:hover:bg-theme-light-grey dark:hover:text-theme-blue focus:bg-theme-light-grey focus:text-theme-blue focus:font-bold" >Leaderboard</Tab>
          <Tab className="inline-block p-4 rounded-t-lg hover:text-theme-blue hover:bg-gray-50 dark:hover:bg-theme-light-grey dark:hover:text-theme-blue focus:bg-theme-light-grey focus:text-theme-blue focus:font-bold" >Members </Tab>
          <Tab className="inline-block p-4 rounded-t-lg hover:text-theme-blue hover:bg-gray-50 dark:hover:bg-theme-light-grey dark:hover:text-theme-blue focus:bg-theme-light-grey focus:text-theme-blue focus:font-bold" >Reward</Tab>
          <Tab className="inline-block p-4 rounded-t-lg hover:text-theme-blue hover:bg-gray-50 dark:hover:bg-theme-light-grey dark:hover:text-theme-blue focus:bg-theme-light-grey focus:text-theme-blue focus:font-bold" >Review </Tab>
        </TabList>

        <TabPanel ><BoardTab/></TabPanel>
       <TabPanel ><LeaderboardTab/></TabPanel>
       <TabPanel ></TabPanel>
       <TabPanel ></TabPanel>
       <TabPanel ></TabPanel>
      </Tabs>
      </div>
    </div>
  );
}

export default observer(BoardPage);
