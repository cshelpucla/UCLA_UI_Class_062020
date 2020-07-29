import React, { useState } from 'react'
import styled from 'styled-components'


const Home = () => {
    return (
        <HomeStyled>
            <h3>Home Page</h3>
            <p>State at ceiling lay on arms while you're using the keyboard so this human feeds me.</p>
            <p>I am a kitty cat, sup, feed me, no cares in the world</p>
            <p>Meow meow, I tell my human purr for no reason but to chase after</p>    
        </HomeStyled>
    )
}

export default Home

const HomeStyled = styled.div`
    display: grid;
    grid-gap: 10px;
    margin-top: 1em;
    margin-left: 6em;
    margin-right: 6em;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(25px, auto);
`;