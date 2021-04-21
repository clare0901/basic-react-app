import React from 'react';
import '../App.css';

function Screen(props){
    // console.log(props)
    return(
        <div className="screen" >
           <span className="value">{props.number}</span>
        </div>
    )
}

export default Screen;