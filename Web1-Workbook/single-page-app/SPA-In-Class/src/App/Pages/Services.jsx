import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet'

const Services = () => {
    return (
        <ServicesStyled className='Services'>
            <Helmet>
                <title>Services :: SPA App</title>
            </Helmet>
        </ServicesStyled>
    );
};

export default Services;

const ServicesStyled = styled.div`

`