import React, { useState } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet'
import FilterNav from './FilterNav/FilterNav';
import Gallery from './Gallery/Gallery';

import { services } from './servicesData'

const ServicesContainer = () => {
    const [currCategory,currCategorySet] = useState(services.categories[0])

    console.log(currCategory)

    return (
        <ServicesContainerStyled className='Home'>
            <FilterNav services={services} currCategory={currCategory}/>
            <Gallery services={services} currCategory={currCategory}/>
        </ServicesContainerStyled>
    );
};

export default ServicesContainer;

const ServicesContainerStyled = styled.div`
`