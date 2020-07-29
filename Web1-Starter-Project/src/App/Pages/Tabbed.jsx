import React, { useState } from 'react'
import styled from 'styled-components'
import Tab from './Tab.jsx'
import Section from './Section.jsx'

import {tabItems} from './tabitems.js'

const Tabbed = () => {

    const [chosenTab, chosenTabSet] = useState(tabItems[1]);

    console.log('my choseTab', chosenTab)

    const renderTabs = () => {
        return tabItems.map((tabItem, idx) => {
            return <Tab key={ idx} tabItem={tabItem} chosenTabSet={chosenTabSet} />        
        });
    }

    return (
        <TabbedStyled classname='Tabbed'>
            { renderTabs() }
            <Section chosenTab={ chosenTab }/>
        </TabbedStyled>
    )
}

export default Tabbed

const TabbedStyled = styled.div`
    background-color: blue;
    padding: 20px;
    outline: solid black 1px;
    display: flex;
    max-width: 20%;
    max-height: 20%;
`;