import React from 'react'
import { observer } from "mobx-react";

function Task ({task}) {
    console.log("task is here ", task)
  return (
    
    <div >
        <div className='  rounded-lg bg-white object-contain h-[100px] text-left p-[10px] space-y-2'>
          <h3 className='text-theme-green font-bold'>Point:{task.point}</h3>
          <h3 className='text-black font-bold'>{task.title}</h3>
  
      </div>
    </div>


  )
}
export default observer(Task);

