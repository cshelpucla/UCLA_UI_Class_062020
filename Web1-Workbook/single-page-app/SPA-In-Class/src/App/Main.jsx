import React from 'react'
import styled from 'styled-components';

const Main = () => {
    return (
        <MainStyled>
            <h1>My Title</h1>
            <h2>This subtitle is where I want to be</h2>
            <h3>Sub Sub Title</h3>
        </MainStyled>
    )
}

export default Main;

const MainStyled = styled.main`
    h1 {
        background-color: gold;
        font-size: 95px;
        border: solid;
        border-color: red;
        border-width: 5px;
    }
    h2 {
        background-color: yellow;
        font-size: 20px;
        border: solid;
        border-color: green;
        border-left-color: black;
        border-width: 10px;
    }
    h3 {
        background-color: teal;
        font-size: solid 10px red;
    }
`