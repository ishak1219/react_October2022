// root component can made so many child compnent
import React from 'react';
import AddYotube from '../component/addyoutube';
import Employee from '../component/employee';
import Header from '../component/header';
import LikeDislike from '../component/likedislike';
import Rainbow from '../component/rainbow'
import Youtube from '../component/youtube';



function RootComponent() {
    return ( 
        <div>
            <h1>My Root Component</h1>
            <Header company='IBM' years='80'></Header>
            <Header company='Airasia' years='21'></Header>
            <Header company='Google' years='26'></Header>
            <Header company='OBB' years='4'></Header>
            <Rainbow></Rainbow>
            <LikeDislike></LikeDislike>
            <Employee></Employee>
            <Youtube></Youtube>
            <AddYotube></AddYotube>
        </div>

     );
}

export default RootComponent;