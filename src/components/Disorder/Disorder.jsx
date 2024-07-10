import React from 'react';
import IMAGES from '../Home/images';
import './mediad.css'

const CataractsInfo = () => {
    return (
        <div style={styles.container}>
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

            {/* Doctor's Message Section */}
            <div style={styles.doctorMessageContainer}>
                <div style={styles.left}>
                    <div id="founder-msg">
                        <h1 className='text-5xl text-green-900 font-semibold'>
                            <span className='text-8xl transform scale-x-[-1] font-customFont rotate-180'>''</span>
                            Doctor's 
                        </h1>
                        <p className='text-lg text-green-800 p-3 inline-block'>
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
                    {/* Replace with your doctor's image */}
                    <img src={IMAGES.swati} alt="Doctor's Image" className='max-h-[400px] h-auto' />
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        Width: '100vh',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#DFF7F9',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    header: {
        backgroundColor: '#DFF7F9',
        color: '#0E9298',
        padding: '10px',
        borderRadius: '8px 8px 0 0',
    },
    heading: {
        margin: '0',
        fontSize: '1.8rem',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: '20px 0',
        flexWrap: 'wrap',
    },
    imageContainer: {
        flex: '1 1 40%',
        padding: '10px',
    },
    textContainer: {
        flex: '1 1 50%',
        padding: '10px',
    },
    subheading: {
        fontSize: '1.5rem',
        marginBottom: '10px',
        color: '#0E9298',
    },
    paragraph: {
        lineHeight: '1.6',
        marginBottom: '15px',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    article: {
        textAlign: 'left',
        margin: '20px 0',
    },
    ul: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    },
    li: {
        marginBottom: '10px',
    },
    a: {
        color: '#0E9298',
        textDecoration: 'none',
    },
    aHover: {
        textDecoration: 'underline',
    },
    doctorMessageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '40px 0',
    },
    left: {
        width: '60%',
        padding: '20px',
    },
};

export default CataractsInfo;
