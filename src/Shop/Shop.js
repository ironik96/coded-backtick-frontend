import { observer } from 'mobx-react';
// import userStore from "../stores/userStore";
import coin from './../images/stack-coins.webp';
// import { Link } from "react-router-dom";
// import { useState } from "react";
function Shop() {
  // const user = userStore.user
  return (
 <main>
  <div className='flex justify-around m-10'>
  <div className='relative grid content-center w-9/12  rounded-[20px]'>
    <div className='w-full flex pt-5 justify-between'>
      <div className="flex" >
        <div className='pr-5'>
          <button className='border-b-2'>Shop</button>
        </div>
      </div>
    </div>
    {/* <h1>Buy BackTick Crypto</h1> */}
    <div className='flex justify-around w-auto mt-3 h-screen rounded-[20px] bg-softgray'>
     <div className='relative grid gap-3 w-full mt-4 h-56 '>
    <div className='w-full flex-wrap flex justify-start'>
      {/* itme one  */}
      <div className='relative grid bg-white ml-4 w-56 h-64 justify-items-center text-xs rounded-[10px]'>
      <h1 className='text-gray h-8 w-[95%] pt-2 m-2 text-center rounded-[10px]'>10,000BT</h1>
        <img alt='coins' className='pt-1 w-24 m-2 ' src={coin} />
        <p className='pl-4 wrap'>Extra feature for those who like to experience more </p>
        <h1 className='bg-lightgreen text-green h-8 w-[95%] pt-2 m-2 text-center rounded-[10px]'>Buy</h1>
      </div>
      {/* itme two  */}
      <div className='relative grid bg-white ml-4 w-56 h-64 justify-items-center text-xs rounded-[10px]'>
      <h1 className='text-gray h-8 w-[95%] pt-2 m-2 text-center rounded-[10px]'>15,000BT</h1>
        <img alt='coins' className='pt-1 w-24 m-2 ' src={coin} />
        <p className='pl-4 wrap'>Extra feature for those who like to experience more </p>
        <h1 className='bg-lightgreen text-green h-8 w-[95%] pt-2 m-2 text-center rounded-[10px]'>Buy</h1>
      </div>
      {/* itme two  */}
      <div className='relative grid bg-white ml-4 w-56 h-64 justify-items-center text-xs rounded-[10px]'>
            <h1 className='text-gray h-8 w-[95%] pt-2 m-2 text-center rounded-[10px]'>20,000BT</h1>
              <img alt='coins' className='pt-1 w-24 m-2 ' src={coin} />
              <p className='pl-4 wrap'>Extra feature for those who like to experience more </p>
              <h1 className='bg-lightgreen text-green h-8 w-[95%] pt-2 m-2 text-center rounded-[10px]'>Buy</h1>
            </div>
      {/* itme two  */}
      <div className='relative grid bg-white ml-4 w-56 h-64 justify-items-center text-xs rounded-[10px]'>
      <h1 className='text-gray h-8 w-[95%] pt-2 m-2 text-center rounded-[10px]'>25,000BT</h1>
        <img alt='coins' className='pt-1 w-24 m-2 ' src={coin} />
        <p className='pl-4 wrap'>Extra feature for those who like to experience more </p>
        <h1 className='bg-lightgreen text-green h-8 w-[95%] pt-2 m-2 text-center rounded-[10px]'>Buy</h1>
      </div>
      {/* itme two  */}
      <div className='relative grid bg-white ml-4 mt-4 w-56 h-64 justify-items-center text-xs rounded-[10px]'>
      <h1 className='text-gray h-8 w-[95%] pt-2 m-2 text-center rounded-[10px]'>30,000BT</h1>
        <img alt='coins' className='pt-1 w-24 m-2 ' src={coin} />
        <p className='pl-4 wrap'>Extra feature for those who like to experience more </p>
        <h1 className='bg-lightgreen text-green h-8 w-[95%] pt-2 m-2 text-center rounded-[10px]'>Buy</h1>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
 </main>
  );
}

export default observer(Shop);
