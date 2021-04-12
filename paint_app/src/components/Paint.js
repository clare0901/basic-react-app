// https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome

import React, { useEffect, useState } from 'react';
import Header from './Header';
import Name from './Name';
import ColorPicker from './ColorPicker'
import WindowSize from './WindowSize'
import randomColor from 'randomcolor';

function Paint(){

    const [colors, setColors] = useState([]);
    const [activeColor, setActiveColor] = useState(null)
    const getColors = () => {
        const baseColor = randomColor().slice(1);
        fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
        .then( response => response.json())
        .then( data => {
            setColors(data.colors.map( color => color.hex.value))
            setActiveColor(data.colors[0].hex.value)
        })
    } 
    useEffect( getColors,[])
    
    function handleClick(){
        return(getColors())
    }

    return(
        
        <div>
            <Header color={activeColor} />
            <Name />
            <div>
                <ColorPicker 
                colors={colors}
                activeColor={activeColor}
                setActiveColor={setActiveColor}
                />
                <button className="refresh" onClick={handleClick}>
                    <img src="https://img.icons8.com/windows/32/000000/refresh.png" alt="Refresh-Icon" />
                </button>
            </div>
            <WindowSize />
        
        </div>
    )
    
}

export default Paint;