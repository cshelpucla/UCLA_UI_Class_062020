import React, { useState } from 'react';
import styled from 'styled-components';

import Background from './Background.jsx';
import SunAndMoon from './SunAndMoon.jsx';

const App = () => {

    const [upDown, upDownSet] = useState('up');

    const handleUpClick = () => {
        upDownSet('up');
    }
    const handleDownClick = () => {
        upDownSet('down');
    }

    return (
        <AppStyled>
            <Background upDown={ upDown } />
            <SunAndMoon upDown={ upDown } />
            <img className='Up' src='/images/up.png' alt='Up' onClick={ handleUpClick } />
            <img className='Down' src='/images/down.png' alt='Down' onClick={ handleDownClick } />
        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`
    width: 800px;
    height: 600px;
    position: relative;

    margin: 50px auto;

    overflow: hidden;
    border: solid 15px teal;

    .Background { display: block; }

    .SunAndMoon {
        position: absolute;
        left: 300px;

        width: 200px;
        height: 200px;

        transition: all 1s;
        
        &.up {
            top: 50px;
        }
        &.down {
            top: 200px;
        }
    }

    .Up {
        position: absolute;
        left: 300px;
        bottom: 100px;
    }
    .Down {
        position: absolute;
        right: 300px;
        bottom: 100px;
    }
`;