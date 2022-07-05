import profile from './../images/jose.webp';
import coin from './../images/coin.png';
// import authStore from "../stores/authStore";
import { observer } from 'mobx-react';
function Profile() {
  return (
 <main>
  <div className='flex justify-around'>
  <div className='relative grid content-center gap-3 w-9/12 h-56 rounded-[20px] bg-yellow'>
    <div className='w-full flex justify-between'>
      <img alt='profile' className='absolute h-36 left-6 bottom-[-25px] bg-white rounded-[100px] ml-5 w-36 object-fill' src={profile} />
      <h1 className='absolute left-52 bottom-5 text-[27px] font-bold text-white' >Joseph Mourinho</h1>
        <div className='absolute right-6 top-5 py-2 px-4 h-10 rounded-[70px] bg-white text-coingray'>
            <div className='flex justify-between'>
              <h1 className=' mr-1 '>300</h1>
              <img alt='profile' className='bg-white rounded-[100px] w-[25px]  h-[25px]' src={coin} />
            </div>
        </div>
    </div>
  </div>
  </div>
  <div className='flex justify-around m-10'>
  <div className='relative grid content-center w-9/12  rounded-[20px]'>
    <div className='w-full flex pt-5 justify-between'>
      <div className="flex" >
        <div className='pr-5'>
          <button className='border-b-2'>Created</button>
        </div>
        <div className='pr-5'>
         <button className=''>Shared</button>
        </div>
      </div>
      <div>
        <button className='bg-green text-white font-light py-1 px-5 rounded-[10px]' >Edit profile</button>
      </div>
    </div>
    <div className='flex justify-around w-auto mt-3 h-full overflow-hidden rounded-[20px] bg-softgray'>
  <div className='relative grid gap-3 w-full mt-4 h-56 '>
    <div className='w-full flex-wrap flex justify-start'>
      {/* itme one  */}
      <div className='grid bg-white ml-4 w-56 h-28 justify-items-center text-xs rounded-[10px]'>
        <h1 className='bg-lightgreen text-green h-8 w-[95%] pt-2 font- m-2 text-center rounded-[10px]'>FullStack Board</h1>
        <p className=''>Extra feature for those who like to experience more </p>
        <button className=' text-viewgray relative bottom-1 left-20'>view</button>
      </div>
      {/* itme two  */}
      <div className='grid bg-white ml-4 w-56 h-28 justify-items-center text-xs rounded-[10px]'>
        <h1 className='bg-lightgreen text-green h-8 w-[95%] pt-2 font- m-2 text-center rounded-[10px]'>FullStack Board</h1>
        <p className=''>Extra feature for those who like to experience more </p>
        <button className=' text-viewgray relative bottom-1 left-20'>view</button>
      </div>

    </div>
  </div>
  </div>
  </div>
  </div>
 </main>
  );
}

export default observer(Profile);
