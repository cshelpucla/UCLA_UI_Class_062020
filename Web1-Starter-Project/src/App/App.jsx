import React from 'react';
import styled from 'styled-components';

const App = () => {

    return (
        <AppStyled className='App'>
            My App 
        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`
    width: 300px;
    margin: 50px auto;
    border: solid 1px #333;
    padding: 20px;
    text-align: center;
`;