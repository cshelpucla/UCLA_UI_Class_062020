import React from 'react';
import styled from 'styled-components';
import FilterNavButton from './FilterNavButton';
import { mq } from '../../../../common/mediaQueries'

const FilterNav = ({services, currCategory, currCategorySet}) => {
    

    const renderImages = () => {
        return services.categories.map((item, idx) => {
            return <FilterNavButton key={idx} name={item} 
            currCategory={currCategory}
            currCategorySet={currCategorySet}
            />
        });
    }
    
    return (
        <div className="nested-wrapper">
            <FilterNavStyled className='Gallery'>
                {renderImages()}
            </FilterNavStyled>
        </div>
    );
};

export default FilterNav;

const FilterNavStyled = styled.nav`
    text-align: center;
`