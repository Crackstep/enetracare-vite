import React from 'react';
import ReactPlayer from 'react-player';
import './Message.css';
import videoMessage from '../images/videomessage.mp4'; // Ensure this path is correct

function VideoMessages() {
  const videos = [
    { url: 'https://youtu.be/naUoYjqO8CY?si=kZCvnQjzJG8R0q6B', title: 'Message from Dr.Swati Tomar' },
    { url: "https://youtu.be/0Bkd5emfmx8?si=59Db5x7eITgEA77s", title: 'Message from Co-founder' }, // Use the imported video file
    { url: 'https://youtu.be/n_3cG9oeuNo?si=X8fw3J56R-JcluKm', title: 'Message from Team-Head' },
    // Add more video objects as needed
  ];

  return (
    <div className="min-h-screen my-8">
      <h1 className='text-[3vw] text-center text-[#017F84] mt-8 font-semibold' id='title'>Messages from Our Team</h1>
      <div className="divider divider-success text-[#017F84] p-0 m-0 h-0 px-20"></div>
      <div id='video-container' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 m-4 gap-8'>
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <h2 className='text-center text-lg font-semibold'>{video.title}</h2>
            <ReactPlayer url={video.url} controls width="100%" height="auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoMessages;
