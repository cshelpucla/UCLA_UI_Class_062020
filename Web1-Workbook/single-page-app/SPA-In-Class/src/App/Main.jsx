import React from 'react'
import styled from 'styled-components';
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './Pages/Login';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Home from './Pages/Home';

const Main = () => {
    return (
            <MainStyled>
                <BrowserRouter >
                    <Switch>                        
                        <Route path='/login' component={ Login }/>
                        <Route path='/contacts' component={ Contact }/>
                        <Route path='/services' component={ Services }/>
                        <Route path='/' component={ Home }/>
                    </Switch>
                </BrowserRouter> 
            </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    h1 {
        background-color: gold;
        font-size: 75px;
    }
`