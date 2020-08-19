import React from 'react'
import styled from 'styled-components';
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import Builder from './Pages/Builder.jsx';
import About from './Pages/About.jsx';
import Runner from './Pages/Runner.jsx';
import Home from './Pages/Home.jsx';
import LayoutTest from './Pages/LayoutTest.js';
import FormikView from './Components/FormikView.js';
import ReelContainer from './sjs/ReelContainer.jsx';

const Main = () => {
    return (
            <MainStyled>                
                    <Switch>                        
                        <Route path='/builder' component={ Builder }/>
                        <Route path='/runner' component={ LayoutTest }/>
                        <Route path='/layout' component={ LayoutTest }/>
                        <Route path='/fbuild' component={ Builder }/>
                        <Route path='/fview' component={ FormikView }/>
                        <Route path='/about' component={ LayoutTest }/>
                        <Route path='/' component={ ReelContainer }/>
                    </Switch>                
            </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    h1 {
        background-color: gold;
        font-size: 75px;
    }

    display: flex;
    //grid-gap: 1px;
    //grid-template-columns: repeat(12, 1fr);
    //grid-auto-rows: minmax(25px, auto);  
`