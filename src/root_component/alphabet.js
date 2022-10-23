import React from 'react';

function Alphabet(props) {
    return ( 
        <span style={
            {frontSize:'53px',
            color:props.color,
            backgroundColor:'lightblue',
            margin: '2px',
            border:'1px solid black',
            borderRadius:'5px',
            padding: '5px'
            }
             }>
            {props.children}
        </span>
     );
}

export default Alphabet;