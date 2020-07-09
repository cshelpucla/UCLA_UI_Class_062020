import React from 'react'
import styled from 'styled-components';

const Main = () => {
    return (
            <MainStyled>
                <div className="nested-wrapper">
                    <h1>My Page Title</h1>
                    <h2>This subtitle is where I want to be</h2>
                    <h3>Sub Sub Title</h3>
                </div>    
            </MainStyled>
    )}

export default Main;

const MainStyled = styled.main`
    h1 {
        background-color: gold;
        font-size: 75px;
    }
`