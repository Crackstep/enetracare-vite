import React from 'react';
import Lottie from 'lottie-react';
import EyeAnimation from './Animation/eye.json';

function Loader({style}) {
  return (
    <div className={`flex justify-center items-center ${style}`}>
      <div className='w-48'>
        <Lottie animationData={EyeAnimation} loop={true} />
      </div>
    </div>
  );
}

export default Loader;
