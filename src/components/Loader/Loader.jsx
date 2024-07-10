import React from 'react';
import Lottie from 'lottie-react';
import EyeAnimation from './Animation/eye.json';

function Loader() {
  return (
    <div className='flex justify-center items-center lg:mt-[15rem] md:mt-[10rem]'>
      <div className='w-48'>
        <Lottie animationData={EyeAnimation} loop={true} />
      </div>
    </div>
  );
}

export default Loader;
