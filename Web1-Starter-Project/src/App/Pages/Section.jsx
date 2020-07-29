import React from 'react'
import styled from 'styled-components'
import PopulateTree from '../Components/PopulateTree';

const Section = ({chosenTab}) => {
    return (
        <SectionStyled className='Section'>
            <TestTreeStyled className='TestSection'>
                <PopulateTree/>
                <TestFormStyled className='TestForm'>
                    <b>Test Form</b>
                </TestFormStyled>
            </TestTreeStyled>
        </SectionStyled>
    )
}

export default Section;

const SectionStyled = styled.div`
    background-color: teal;
    padding: 20px;
    outline: solid black 1px;
    display: flex;
    min-height: 100%; 
    min-width: 100%; 
`;

const TestTreeStyled = styled.div`
    background-color: teal;
    padding: 20px;
    display: flex;
    margin: auto;
    outline: solid red 1px;
    min-height: 100%; 
    min-width: 100%; 
`;

const TestFormStyled = styled.div`
    background-color: red;
    padding: 20px;
    display: flex;
    margin-top: 1em;
    margin-left: 5em;
    margin-right: 1em;
    min-height: 95%; 
    min-width: 83%; 
`;