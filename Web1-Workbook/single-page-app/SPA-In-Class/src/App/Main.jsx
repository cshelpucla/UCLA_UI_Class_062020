import React from 'react'
import styled from 'styled-components';

const Main = () => {
    return (
        <MainStyled>
            <h1>Title</h1>
            <h2>Subtitle</h2>
            <h3>Sub Sub Title</h3>
        </MainStyled>
    )
}

export default Main;

const MainStyled = styled.main`
    h1 {
        background-color: orange;
        font-size: 75px;
    }
    h2 {
        background-color: yellow;
        font-size: 20px;
    }
    h3 {
        background-color: teal;
        font-size: solid 10px red;
    }
`