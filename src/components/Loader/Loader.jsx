import React from 'react';
import Lottie from 'lottie-react';
import EyeAnimation from './Animation/eye.json';

function Loader() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='w-48'>
        <Lottie animationData={EyeAnimation} loop={true} />
      </div>
    </div>
  );
}

export default Loader;
