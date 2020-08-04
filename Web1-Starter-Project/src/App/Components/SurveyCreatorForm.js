import React from 'react'
import styled from 'styled-components'

import SurveyCreator from 'survey-creator'

var options = {
    showLogicTab: true
};

const creator = new SurveyCreator.SurveyCreator("creatorElement", options);
creator.showToolbox = "right";
creator.showPropertyGrid = "right";
creator.rightContainerActiveItem("toolbox");


export const SurveyCreatorForm = () => {
    

    return (
        <div className='SurveyCreator' >
            <div id="creatorElement"></div>
        </div>
    )
}