import React, { useState }  from 'react'
import SourceComponent from '../Source_Component/SourceComponent'
import YouTubeVideo from '../YoutubeVideo_Component/YoutubeVideoComponent'
import TwitchVideo from '../TwitchVideo_Component/TwitchVideoComponent'
import Grid from '../DraggableGrid_Component/DraggableGridComponent'

const MainPage = () => {
    const [link, setLink] = useState();
    const [service, setService] = useState('Youtube');
    // <iframe src="https://player.twitch.tv/?channel=tangjie&parent=www.example.com" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
    return (
        <>
            <div>
                <SourceComponent setLink={setLink} setService={setService}/>
            </div>

            {service === "Youtube" ?
            <div>
                <YouTubeVideo videoId={link}/>
            </div>
           :
            <div>
                <TwitchVideo videoId={link}/>
            </div>
            }

            <Grid/>
        </>

  )
}

export default MainPage
