import React from 'react';
import styled from 'styled-components';

import Header from './Header.jsx'
import Nav from './Nav.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

const App = () => {

    return (
        <AppStyled className='App'>
            In Class SPA App
            <Header />   
            <Nav />         
            <Main />   
            <Footer />   
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