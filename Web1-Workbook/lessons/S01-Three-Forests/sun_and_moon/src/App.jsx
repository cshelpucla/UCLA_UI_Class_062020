// Create component

import React, { useState } from 'react'
import SunAndMoon from './SunAndMoon.jsx';
import Trinity from './Trinity.jsx';
import ButtonUp from './ButtonUp.jsx';
import ButtonDown from './ButtonDown.jsx';

const App = () => {

    const [whichImage, whichImageSet] = useState("/images/moon.png")

    const handleDown = () => {
        whichImageSet("/images/sun.png")
    }

    const handleUp = () => {
        whichImageSet("/images/moon.png")
    }


    return ( <div>
        App has changed
        <SunAndMoon whichImage={ whichImage }/>
        <ButtonUp onClick={ handleUp }/>
        <ButtonDown onClick={ handleDown }/>
        <Trinity />
    </div>);
}

export default App;