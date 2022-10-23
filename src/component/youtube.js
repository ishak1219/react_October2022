import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Youtube() {

    const [allvideos, updateAllVideos] = useState([])

    useEffect(()=>{
        callYoutubeAPI()
    },[])

    const callYoutubeAPI = ()=>{
        axios.get('http://localhost:8888/get/video/all')
        .then((response)=>{
            //console.log(response)
            console.log(response.data)
            updateAllVideos(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const renderAllVideos=()=>{
        return allvideos.map((video, index)=>{
            return(
                <li key={index}>
                    {video.title}
                    <br />
                    <iframe 
                    width="360" 
                    src={"https://www.youtube.com/embed/"+video.videoid}
                    title="YouTube video player" 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                    </iframe>
                </li>
            )
        }
        )}
    


    return ( 
        <div>
            <h1>Youtube videos</h1>
            <ol>
                {renderAllVideos()}
            </ol>

        </div>
     );
}

export default Youtube;