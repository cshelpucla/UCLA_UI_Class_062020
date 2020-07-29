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
            return <Tab key={ idx} 
            tabItem={tabItem} 
            chosenTabSet={chosenTabSet} 
            chosenTab={ chosenTab }
            />        
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

`;