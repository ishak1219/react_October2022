import React, { useState } from 'react';

function LikeDislike() {

    // how do you create state? Use 'HOOK'
    // useState is the one of many other hook
    // useState hook returns 2 values
    //const [state_name, function_name_to_change_state] = useState(default_value_for_state_name)
    // const [counter, changeCounter] = useState(8)

    const [counter, changeCounter] = useState(0)
    
    // we have just declare 3 things:
    // 1. declared the state called counter
    // 2. declared that default value in counter state is 8
    // 3. declared that function change counter can be used to change the value of counter state to new value
    const [likes, changeLikes] = useState(0)
    const [dislikes, changeDislikes] = useState(0)
    const [videoId, changeVideoId] = useState('kzHa4Os12iA')

    // const updateLike=()=>{
    //     console.log('Like cliked...')
    //     changeCounter(100)
    // }

    const updateLike=()=>{
        console.log('Like cliked...')
        changeCounter(counter + 1)
        changeLikes(likes +1)
    }

    const updateDislike=()=>{
        console.log('Dislike clicked')
        changeCounter(counter + 1)
        changeDislikes(dislikes +1)
    }

    const changeValue=(event)=>{
        console.log('obChnage fired for input field')
        // console.log(event)
        console.log(event.target.value)
        changeVideoId(event.target.value)
    }


    return ( 
        <div>
            <h1>Like Dislike</h1>
            <div>
                Total number of time like/dislike is update:{counter}
            </div>
            <div>
                <button onClick={updateLike}>Like</button>
                    {likes}
                <button onClick={updateDislike}>Dislike</button>
                    {dislikes}
            </div>
            <br />
            <div>
                Video Id:
                <input type="text" onChange={changeValue} /> &nbsp; &nbsp;
                <button>Update</button>
            </div>
            <div>
                Video ID: {videoId}
            </div>
            <div>
            <iframe width="560" height="315" 
            src={"https://www.youtube.com/embed/"+videoId}
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            </div>
            
        </div>
     );
}



// how do i capture value from input field?
// how do i update the id in frame?



export default LikeDislike;