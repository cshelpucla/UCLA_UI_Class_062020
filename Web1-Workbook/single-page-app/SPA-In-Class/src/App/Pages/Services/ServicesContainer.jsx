import React, { useState } from 'react';
import styled from 'styled-components';
import FilterNav from './FilterNav/FilterNav';
import Gallery from './Gallery/Gallery';

import { services } from './servicesData'

const ServicesContainer = () => {
    //const [currCategory,currCategorySet] = useState(services.categories[0])
    const [currCategory,currCategorySet] = useState('All')

    console.log(currCategory)

    return (
        <ServicesContainerStyled className='Home'>
            <FilterNav  services={services} 
                        currCategory={currCategory}
                        currCategorySet={currCategorySet}
            />
            <Gallery services={services} currCategory={currCategory}/>
        </ServicesContainerStyled>
    );
};

export default ServicesContainer;

const ServicesContainerStyled = styled.div`
`