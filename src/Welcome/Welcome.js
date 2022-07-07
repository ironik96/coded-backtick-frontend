import WelcomeImage from './../images/cuate.png';
import Arrow from './../images/Arrow.png'
function Welcome() {
  return (
 <main className='flex justify-around text-left p-5'>
  <div className='relative grid content-center'>
  <img alt='welcome' className='absolute h-40 w-64 right-10 top-10' src={Arrow} />
    <p className='text-4xl w-72 font-bold'>Learn, Gain, Compete, repeat.</p>
    <p className='text-2xl w-72 font-light'>join boards to compete for exclusive board prizes</p>
  </div>
  <div className='pt-20 flex items-stretch'>
  <img alt='welcome' className='h-96 w-auto' src={WelcomeImage} />
  </div>
 </main>
  );
}

export default Welcome;
