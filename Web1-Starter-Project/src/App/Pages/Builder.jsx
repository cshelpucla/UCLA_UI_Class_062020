import React, { useState } from 'react'
import styled from 'styled-components'
import Tab from './Tab.jsx'
import Section from './Section.jsx'

import {tabItems} from './tabitems.js'

const Builder = () => {

    const [chosenTab, chosenTabSet] = useState(tabItems[1]);

    console.log('my choseTab', chosenTab)

    const renderTabs = () => {
        return tabItems.map((tabItem, idx) => {
            return <Tab key={ idx} tabItem={tabItem} chosenTabSet={chosenTabSet} />        
        });
    }

    return (
        <BuilderStyled classname='Tabbed'>
            { renderTabs() }
            <Section chosenTab={ chosenTab }/>
        </BuilderStyled>
    )
}

export default Builder

const BuilderStyled = styled.div`
    min-height: 100%; 
    min-width: 100%; 
    margin-top: 1em;
    margin-left: 1em;
    margin-right: 220em;

`;