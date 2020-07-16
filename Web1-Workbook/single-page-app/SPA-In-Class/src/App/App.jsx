import React from 'react';
import styled from 'styled-components';

import Header from './Header.jsx'
import Nav from './Nav.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import NavBar from './NavBar.jsx';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

    return (        
        <AppStyled className='App'>      
          <BrowserRouter>
            <Header /> 
            <Nav />
            <Main />   
            <Footer />   
        </BrowserRouter>                          
        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`
    .nested-wrapper {
        max-width: 1200px;
        margin: auto;
        outline: solid red 1px;
        padding: 10px;
    }
`;