import axios from 'axios';
import React, { useState } from 'react';

function AddYotube() {

    const [title, updateTitle] = useState('')
    const [videoid, updateVideoid] = useState('')
    const [Likes, updateLikes] = useState(0)
    const [Dislikes, updateDislike] = useState(0)


    const captureTitle=(event)=>{
        updateTitle(event.target.value)
    }

    const captureVideoId=(event)=>{
        updateVideoid(event.target.value)
    }

    const addVideo=()=>{
        let newVideo={
            "title" : title,
            "videoid" : videoid,
            "likes" : Likes,
            "dislikes" : Dislikes
          }
          console.log(newVideo)
          axios.post('http://localhost:8888/video/add', newVideo)
          .then((response)=>{
            console.log(response)
          })
          .catch((error)=>{
            console.log(error)
          })
    }

    
    return ( 
        <div>
            <h1>Add New Youtube Video</h1>
            <div>
                <div>
                <label>Title:   </label>
                <input type="text" onChange={captureTitle}/>
                <br /><br />
                </div>
                <div>
                <label>Video id:    </label>
                <input type="text" onChange={captureVideoId} />
                <br /><br />
                </div>
                <div>
                <label>Likes:   </label>
                <input type="number" readOnly={true} />
                <br /><br />
                </div>
                <div>
                <label>Dislikes:   </label>
                <input type="number" readOnly={true} />
                <br /><br />
                </div>
                <div>
                    <button onClick={addVideo}>Add</button>
                </div>
               
            </div>
        </div>
     );
}

export default AddYotube;