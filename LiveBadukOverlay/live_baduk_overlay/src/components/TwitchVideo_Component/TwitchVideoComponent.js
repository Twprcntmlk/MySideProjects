import React from 'react';

const TwitchVideo = ({videoId}) => {
    const videoUrl = `https://player.twitch.tv/?channel=${videoId}&parent=localhost`;
    console.log(videoId)
    return (
        <div>
        { videoId ?
        <iframe
        src={videoUrl}
        height={378}
        width={620}
        allowFullScreen={true}
        title="Twitch LiveStream player"/>
        :
        null
        }
        </div>
        );
    };

export default TwitchVideo;
