import React, { useState } from 'react';

const SunAndMoon = ({ upDown }) => {
    const [imageSrc, imageSrcSet] = useState('/images/moon.png');

    const handleOver = () => {
        imageSrcSet('/images/sun.png');
    }
    const handleOut = () => {
        imageSrcSet('/images/moon.png');
    }

    const theClassName = `SunAndMoon ${upDown}`;

    return (
        <img 
            className={ theClassName } 
            src={ imageSrc } 
            alt='The Sun and Moon'

            onMouseOver={ handleOver }
            onMouseOut={ handleOut }
        />
    );
}

export default SunAndMoon;