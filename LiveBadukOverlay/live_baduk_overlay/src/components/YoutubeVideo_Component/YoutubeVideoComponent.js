import React from 'react';

const YouTubeVideo = ({ videoId }) => {

  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
    {videoId ?
      <iframe
        width="900px"
        height="700px"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >

      </iframe>
      :
      null
    }
    </div>
  );
};

export default YouTubeVideo;
