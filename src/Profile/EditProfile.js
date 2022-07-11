import profile from './../images/jose.webp';
import coin from './../images/coin.png';
// import authStore from "../stores/authStore";
import { observer } from 'mobx-react';
import Logout  from './../Login/SignoutButton'
import TextInput from './../components/shared/TextInput'
function Profile() {
  return (
 <main>
  <div className='flex justify-around'>
  <div className='relative grid content-center gap-3 w-9/12 h-56 rounded-[20px] bg-yellow'>
    <Logout/>
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
    <div className='flex justify-around w-auto mt-3 h-full p-10 overflow-hidden rounded-[20px] bg-softgray'>
  <div className='relative grid gap-3 w-full mt-4 h-56 '>
    <div className='w-full flex-wrap flex justify-start'>
    <TextInput
          placeholder={"Bio"}
          name={"Bio"}
          inputClass="bg-white w-96"
        />
        <TextInput
          placeholder={"Email"}
          name={"email"}
          inputClass="bg-white w-96"
        />
        <TextInput
          placeholder={"Birthday"}
          name={"Birthday"}
          inputClass="bg-white w-96"
        />
    </div>
  </div>
  <div className='relative grid gap-3 w-full mt-4 h-56 '>
    <div className='w-full flex-wrap flex justify-start'>
    <TextInput
          placeholder={"Wallet Token"}
          name={"Wallet"}
          inputClass="bg-white w-96"
        />
    </div>
  </div>
  </div>
  </div>
  </div>
 </main>
  );
}

export default observer(Profile);