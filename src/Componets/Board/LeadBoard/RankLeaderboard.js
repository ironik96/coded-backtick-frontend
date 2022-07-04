import React from 'react'
import { observer } from "mobx-react";
import  coin  from '../../../images/coin.png'

function RankLeaderboard ({member}) {

  return (
 <div className='place-content-center'> 
     <div className='  container  bg-white h-[70px] rounded-full p-2 flex  justify-between'>
        <div className='flex items-center  space-x-10 '>
        <div className='winner-tag2 bg-theme-yellow flex  items-center'>
     <div className=' relative left-[10px]  text-white font-bold'>{member.rank}</div>
        <img className='rounded-[100%] w-[60px] h-[60px] relative  left-[20px]
        ' src='https://ichef.bbci.co.uk/news/976/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg'/>
        </div>
        <h1  className=''> {member.name}</h1>
        </div>

        <div className=' flex items-center p-[10px] h-[100%] w-[80px] rounded-full bg-theme-light-grey place-content-center'>
            <span>{member.point}</span>
            <img src={coin} />
        
        
        </div>
  
     
     
     </div>
     </div>
     



  )
}
export default observer( RankLeaderboard 
);

