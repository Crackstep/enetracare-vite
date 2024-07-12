import React from 'react';
import IMAGES from '../Home/images';
import './mediad.css'
import './DisorderCustomCSS.css'

const CataractsInfo = () => {
    return (
        <div>
            {/* <div style={styles.container}>
                <header style={styles.header}>
                    <h1 style={styles.heading}>Cataracts Information</h1>
                </header>
                <section style={styles.content}>
                    <div style={styles.imageContainer}>
                        <img
                            src="https://images.medicinenet.com/images/slideshow/eye_diseases_and_cond_s4_cataracts_2.jpg"
                            alt="Cataracts"
                            style={styles.image}
                        />
                    </div>
                    <div style={styles.textContainer}>
                        <h2 style={styles.subheading}>What are Cataracts?</h2>
                        <p style={styles.paragraph}>
                            Cataracts are a clouding of the lens in the eye which leads to a decrease in vision.
                            They may affect one or both eyes. Often they develop slowly and can affect both eyes differently.
                            Symptoms may include faded colors, blurry or double vision, halos around light, trouble with bright lights,
                            and trouble seeing at night.
                        </p>
                        <p style={styles.paragraph}>
                            Cataracts are the most common cause of vision loss in people over the age of 40 and are the principal cause of blindness in the world.
                            There are more cases of cataracts worldwide than there are of glaucoma, macular degeneration, and diabetic retinopathy combined.
                        </p>
                    </div>
                </section>
                <section style={styles.article}>
                    <h2 style={styles.subheading}>Related Articles</h2>
                    <ul style={styles.ul}>
                        <li style={styles.li}><a href="https://www.example.com/article1" style={styles.a} target="_blank" rel="noopener noreferrer">Understanding Cataracts</a></li>
                        <li style={styles.li}><a href="https://www.example.com/article2" style={styles.a} target="_blank" rel="noopener noreferrer">Cataract Surgery: What to Expect</a></li>
                        <li style={styles.li}><a href="https://www.example.com/article3" style={styles.a} target="_blank" rel="noopener noreferrer">Preventing Cataracts: Tips and Advice</a></li>
                    </ul>
                </section>

                <div style={styles.doctorMessageContainer}>
                    <div style={styles.left}>
                        <div id="founder-msg">
                            <h1 className='text-5xl text-[#017f84] font-semibold'>
                                <span className='text-8xl transform scale-x-[-1] font-customFont rotate-180'>&#8220;</span>
                                Doctor's Message
                            </h1>
                            <p className='text-lg text-[#017f84] p-3 inline-block'>
                                Lorem ipsum dolor sit amet consectetur adipisicing eli
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Praesentium dicta et incidunt perspiciatis, architecto possimus dolores quae reiciendis magnam ab.
                                <span className='text-4xl font-bold font-customFont rotate-180 '>''</span>
                            </p>
                        </div>
                        <div id="founder-name" className='text-end text-xl my-3'>
                            <p>- Founder name</p>
                            <p className='italic text-sm'>Co-founder, eNetraCare</p>
                        </div>
                    </div>
                    <div className="right">
                        <img src={IMAGES.swati} alt="Doctor's Image" className='max-h-[400px] h-auto' />
                    </div>
                </div>
            </div> */}
            {/* ------------------------------------------------------------------------------------------------------------ */}
            <div className='m-10 bg-[#dff7f9] p-[20px] rounded-md shadow-md'>
                <h2 className='text-5xl py-4 text-center text-[#017f84]' id='disorder-title'>Information on Cataracts</h2>

                <div className="divider mx-40 divider-success mt-0 p-0"></div>

                <div id="disorder-sec-1" className='flex items-center justify-center px-20 gap-8 mt-8 my-4'>
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
                </div>

                <div id="disorder-sec-2" className='mx-32 py-10 text-[#017f84]'>
                    <h2 className='text-3xl py-1' id='disorder-sec-2-title'>Related Articles</h2>
                    <ul className='text-lg'>
                        <li><a href="https://www.example.com/article1" target="_blank" rel="noopener noreferrer">Understanding Cataracts</a></li>
                        <li><a href="https://www.example.com/article2" target="_blank" rel="noopener noreferrer">Cataract Surgery: What to Expect</a></li>
                        <li><a href="https://www.example.com/article3" target="_blank" rel="noopener noreferrer">Preventing Cataracts: Tips and Advice</a></li>
                    </ul>
                </div>

                <div id="disorder-sec-3" className='flex items-center justify-around px-10'>
                    <div id='disorder-sec-3-text' className='w-3/5'>
                        <div id="founder-msg">
                            <h1 className='text-5xl text-[#017f84]' id='disorder-sec-3-title'>
                                <span className='text-7xl font-customFont font-semibold'>&#8220;</span>
                                Doctor's Message
                            </h1>
                            <p className='text-lg text-[#017f84] p-3 inline-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas culpa dicta tempora similique cumque velit incidunt veniam consequatur natus temporibus est quos, voluptatum repellat, illum vitae amet asperiores maiores, ea placeat modi. Asperiores incidunt dolor eum natus quisquam libero id vel suscipit at, distinctio officia temporibus? Quia fuga animi similique! ''
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

                </div>

            </div>
        </div>
    );
};

// const styles = {
//     container: {
//         Width: '100vh',
//         margin: '20px auto',
//         fontFamily: 'Arial, sans-serif',
//         backgroundColor: '#DFF7F9',
//         padding: '20px',
//         borderRadius: '8px',
//         boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//     },
//     header: {
//         backgroundColor: '#DFF7F9',
//         color: '#0E9298',
//         padding: '10px',
//         borderRadius: '8px 8px 0 0',
//     },
//     heading: {
//         margin: '0',
//         fontSize: '1.8rem',
//     },
//     content: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'flex-start',
//         margin: '20px 0',
//         flexWrap: 'wrap',
//     },
//     imageContainer: {
//         flex: '1 1 40%',
//         padding: '10px',
//     },
//     textContainer: {
//         flex: '1 1 50%',
//         padding: '10px',
//     },
//     subheading: {
//         fontSize: '1.5rem',
//         marginBottom: '10px',
//         color: '#0E9298',
//     },
//     paragraph: {
//         lineHeight: '1.6',
//         marginBottom: '15px',
//     },
//     image: {
//         maxWidth: '100%',
//         height: 'auto',
//         borderRadius: '8px',
//         boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//     },
//     article: {
//         textAlign: 'left',
//         margin: '20px 0',
//     },
//     ul: {
//         listStyleType: 'none',
//         padding: 0,
//         margin: 0,
//     },
//     li: {
//         marginBottom: '10px',
//     },
//     a: {
//         color: '#0E9298',
//         textDecoration: 'none',
//     },
//     aHover: {
//         textDecoration: 'underline',
//     },
//     doctorMessageContainer: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//         margin: '40px 0',
//     },
//     left: {
//         width: '60%',
//         padding: '20px',
//     },
// };

export default CataractsInfo;
