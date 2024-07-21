import React from 'react';
import IMAGES from '../Home/images';
import { motion } from 'framer-motion';
import './mediad.css'
import './DisorderCustomCSS.css'

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const CataractsInfo = () => {
    return (
        <div className='m-8 bg-[#dff7f9] p-[20px] rounded-md shadow-md' id='disorder-container'>
            <motion.h2 
                className='text-5xl py-4 text-center text-[#017f84]' 
                id='disorder-title'
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
            >
                Information on Cataracts
            </motion.h2>

            <div className="divider mx-40 divider-success mt-0 p-0"></div>

            <motion.div 
                id="disorder-sec-1" 
                className='flex items-center justify-center px-20 gap-8 mt-8 my-4'
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
            >
                <div id="disorder-sec-1-img">
                    <img
                        src="https://images.medicinenet.com/images/slideshow/eye_diseases_and_cond_s4_cataracts_2.jpg"
                        alt="Cataracts"
                        className='max-h-72 rounded-md'
                    />
                </div>
                <div id="disorder-sec-1-text" className='w-3/5 flex flex-col justify-center text-[#017f84]'>
                    <h2 className='text-3xl mb-2' id='disorder-sec-1-title'>What is Cataract?</h2>
                    <p className='text-lg'>
                        Cataracts are a clouding of the lens in the eye which leads to a decrease in vision.
                        They may affect one or both eyes. Often they develop slowly and can affect both eyes differently.
                        Symptoms may include faded colors, blurry or double vision, halos around light, trouble with bright lights,
                        and trouble seeing at night. <br />
                        Cataracts are the most common cause of vision loss in people over the age of 40 and are the principal cause of blindness in the world.
                        There are more cases of cataracts worldwide than there are of glaucoma, macular degeneration, and diabetic retinopathy combined.
                    </p>
                </div>
            </motion.div>

            <motion.div 
                id="disorder-sec-2" 
                className='mx-32 py-10 text-[#017f84]'
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
            >
                <h2 className='text-3xl py-1' id='disorder-sec-2-title'>Related Articles</h2>
                <ul className='text-lg'>
                    <li><a href="https://www.example.com/article1" target="_blank" rel="noopener noreferrer">Understanding Cataracts</a></li>
                    <li><a href="https://www.example.com/article2" target="_blank" rel="noopener noreferrer">Cataract Surgery: What to Expect</a></li>
                    <li><a href="https://www.example.com/article3" target="_blank" rel="noopener noreferrer">Preventing Cataracts: Tips and Advice</a></li>
                </ul>
            </motion.div>

            <motion.div 
                id="disorder-sec-3" 
                className='flex items-center justify-around px-10'
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
            >
                <div id='disorder-sec-3-text' className='w-3/5'>
                    <div id="founder-msg">
                        <h1 className='text-5xl text-[#017f84]' id='disorder-sec-3-title'>
                            <span className='text-7xl font-customFont font-semibold'>&#8220;</span>
                            Doctor's Message
                        </h1>
                        <p className='text-lg text-[#017f84] p-3 inline-block'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas culpa dicta tempora similique cumque velit incidunt veniam consequatur natus temporibus est quos, voluptatum repellat, illum vitae amet asperiores maiores, ea placeat modi. Asperiores incidunt dolor eum natus quisquam libero id vel suscipit at, distinctio officia temporibus? Quia fuga animi similique! ''
                        </p>
                    </div>
                    <div id="founder-name" className='text-end text-xl my-3'>
                        <p>- Founder name</p>
                        <p className='italic text-sm'>Co-founder, eNetraCare</p>
                    </div>
                </div>
                <div id='disorder-sec-3-img'>
                    <img src={IMAGES.swati} alt="Doctor's Image" className='max-h-[400px] h-auto' />
                </div>
            </motion.div>
        </div>
    );
};

export default CataractsInfo;
