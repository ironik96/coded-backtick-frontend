import React from 'react'
import { observer } from "mobx-react";
import Task from './Task';

function BoardTab () {
  const tasks = [
    {
      "title" : "create what every lol",
      "point" : "20"
    },
    {
      "title" : "create what every lol",
      "point" : "20"
    },
    {
      "title" : "create what every lol",
      "point" : "20"
    },
  ]
  const taskList = tasks.map( task =>
    (
      <Task task = {task}/>
    )
    
  )
  


  return (
    <div className='bg-theme-light-grey w-screen p-[20px] flex space-x-10 place-content-center'>
      <div className='container bg-theme-grey w-[300px] h-[500px] rounded-lg p-[10px] space-y-3'>
        <div className='  rounded-lg bg-white object-contain  w-fit p-[5px]'>ICEBOX : {tasks.length}</div>
   {taskList}
      </div>
      <div className='container bg-theme-grey w-[300px] h-[500px] rounded-lg p-[10px] space-y-3'>
        <div className='  rounded-lg bg-white object-contain  w-fit p-[5px]'>Doing : {tasks.length}</div>
   {taskList}
      </div>
      <div className='container bg-theme-grey w-[300px] h-[500px] rounded-lg p-[10px] space-y-3'>
        <div className='  rounded-lg bg-white object-contain  w-fit p-[5px]'>Review : {tasks.length}</div>
   {taskList}
      </div>
      <div className='container bg-theme-grey w-[300px] h-[500px] rounded-lg p-[10px] space-y-3'>
        <div className='  rounded-lg bg-white object-contain  w-fit p-[5px]'>Done : {tasks.length}</div>
   {taskList}
      </div>
    </div>


  )
}
export default observer(BoardTab);

