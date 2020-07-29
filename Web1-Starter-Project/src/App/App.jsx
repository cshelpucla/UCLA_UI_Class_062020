import React from 'react';
import styled from 'styled-components';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch } from "react-router-dom";
import { NavigationBar } from './Components/NavigationBar.js';
import Sidebar  from './Components/Sidebar.js';
import  Main  from './Main.jsx';
import './App.css';

const App = () => {

    return (
        <AppStyled className='App'>              
            <BrowserRouter>
                <NavigationBar />
                <Sidebar />
                <Main/>
            </BrowserRouter>        
        </AppStyled>      
    );
}

export default App;

const AppStyled = styled.div`
    .nested-wrapper {
        max-width: 2400px;
        margin: auto;
        outline: solid red 1px;
        padding: 10px;
        
    }
`;