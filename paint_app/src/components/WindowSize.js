import React, { useEffect, useState } from 'react';
import '../App.css'

function WindowSize(){

    const [ [windowWidth, windowHeight], setWindowSize ] = useState([window.innerWidth,window.innerHeight])
    const [visible, setVisible] = useState(false);

    
    useEffect( () => {

        let timeOutId

        function handleResize(){
            setWindowSize([window.innerWidth,window.innerHeight])
            setVisible(true)
            clearTimeout(timeOutId)
            timeOutId = setTimeout( () => setVisible(false),500 )
        }

        window.addEventListener("resize",handleResize)
        return () => window.removeEventListener("resize",handleResize)
    }, [])

    return(
        <div className={`${visible ? '' : 'hidden'}`}>
            {windowWidth} x {windowHeight} 
           
        </div>
    )
}

export default WindowSize