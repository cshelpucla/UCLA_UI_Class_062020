import React from 'react';

const Background = ({ upDown }) => {

    const imageSrc = (upDown === 'up') ? '/images/bg-moon.jpg' : '/images/bg-sun.jpg';

    return (
        <img className='Background' src={ imageSrc } alt="Background"/>
    );
}

export default Background;