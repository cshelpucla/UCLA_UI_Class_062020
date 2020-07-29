import React from 'react';
import styled from 'styled-components';
import {NavLink } from 'react-router-dom'

const FilterNavButton = ({key,category}) => {
    console.log("Filter Nav",key, category)
    return (
        <FilterNavButtonStyled className='Home'>
            <NavLink  to="/{category}" exact>{category}</NavLink>
        </FilterNavButtonStyled>
    );
};

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`
`