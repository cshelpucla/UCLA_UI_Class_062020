import React from 'react';
import styled from 'styled-components';
import FilterNavButton from './FilterNavButton';


const FilterNav = ({services,currCategory}) => {
    
    const renderImages = () => {
        return services.categories.map((item, idx) => {
            return <FilterNavButton key={idx} category={item} />
        });
    }
    
    return (
        <FilterNavStyled className='Gallery'>
            {renderImages()}
        </FilterNavStyled>
    );
};

export default FilterNav;

const FilterNavStyled  = styled.div`
    background-color: teal;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: flex-end;
    justify-content: flex-start;
`;
