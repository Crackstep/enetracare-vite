import React from 'react';
import './Tips.css'; // Ensure you create this CSS file for styling
// import News from '../News/News'

const EyeTips = () => {
  return (
    <div className='eye-tips-wrapper'>
      <div className='hero-image-container'>
        <img src="https://images.unsplash.com/photo-1486768801215-35f4fdd73abc?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGV5ZSUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D" alt="Eye Care" className='hero-image' />
        <div className='hero-text'>
          <h1 id='eye-tips-title'>Eye Care Tips</h1>
          <p className='hero-subtitle'>Keep your eyes healthy and comfortable with these essential tips.</p>
        </div>
      </div>
      <div className='eye-tips-container'>
        <div className='tips-content'>
          <img src="https://images.unsplash.com/photo-1614590196476-0c361eb55a91?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGV5ZSUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D" alt="Eye Care" className='eye-tips-img' />
          <div className='tips-info'>
            <h2>Top Tips for Healthy Eyes</h2>
            <ul className='tips-list'>
              <li><i className='icon-eye-exam'></i>Get regular eye exams to detect any issues early.</li>
              <li><i className='icon-diet'></i>Maintain a balanced diet rich in vitamins A, C, and E.</li>
              <li><i className='icon-sunglasses'></i>Wear sunglasses to protect your eyes from UV rays.</li>
              <li><i className='icon-screen-break'></i>Take breaks during screen time to reduce eye strain.</li>
              <li><i className='icon-lighting'></i>Ensure proper lighting while reading or working.</li>
              <li><i className='icon-water'></i>Stay hydrated to maintain eye moisture.</li>
              <li><i className='icon-hygiene'></i>Practice good hygiene, especially if you wear contact lenses.</li>
            </ul>
          </div>
        </div>
        {/* <div className='articles-container'>
          <h2>Popular Journal Articles</h2>
          <div className='articles'>
            <article className='article-item'>
              <h3>Exploring the role of the ocular surface in the lung-eye axis:...</h3>
              <p>References and abstracts from MEDLINE/PubMed (National Library of Medicine)</p>
              <a href="https://pubmed.ncbi.nlm.nih.gov/38768774/" target="_blank" rel="noopener noreferrer">Read more</a>
            </article>
            <article className='article-item'>
              <h3>Fostering the unleashing potential of nanocarriers-mediated delivery of ocular therapeutics</h3>
              <p>References and abstracts from MEDLINE/PubMed (National Library of Medicine)</p>
              <a href="https://pubmed.ncbi.nlm.nih.gov/38703931/" target="_blank" rel="noopener noreferrer">Read more</a>
            </article>
            <article className='article-item'>
              <h3>Differential Impact of 0.01% and 0.05% Atropine Eyedrops on Ocular Surface...</h3>
              <p>References and abstracts from MEDLINE/PubMed (National Library of Medicine)</p>
              <a href="https://pubmed.ncbi.nlm.nih.gov/38625083/" target="_blank" rel="noopener noreferrer">Read more</a>
            </article>
            <a href="https://www.nei.nih.gov/learn-about-eye-health/nei-for-kids/healthy-vision-tips" target='_blank' className='see-more'>See more articles</a>
          </div>
        </div> */}
      </div>
      {/* <div><News/></div> */}
    </div>
  );
};

export default EyeTips;
