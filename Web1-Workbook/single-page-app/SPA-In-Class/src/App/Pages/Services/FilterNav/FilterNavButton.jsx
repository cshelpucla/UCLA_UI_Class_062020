import React from 'react';
import styled from 'styled-components';
import {NavLink } from 'react-router-dom'

const FilterNavButton = ({key, name, currCategory , currCategorySet }) => {
    
    console.log("Filter Nav",key, name, currCategory )
    const theClassName = ( name === currCategory ) ? 'FilterNavButton active': 'FilterNavButton'

    const changeCategory = () => {
        currCategorySet( name)
    }

    return (
        <FilterNavButtonStyled className={theClassName}
            onClick={ () => currCategorySet( name) }
            >
            {name}
        </FilterNavButtonStyled>
    );
};

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`    
    display: inline-block;
    padding: 10px 20px;
    background-color: #148200;
    color: white;
    margin: 10px;
    border-radius: 5px;
    
    cursor: pointer;
    
    &:hover {
        background-color: #3e6f36;
    }  
`