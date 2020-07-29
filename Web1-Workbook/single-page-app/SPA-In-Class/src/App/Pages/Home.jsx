import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet'
import Tabbed from './Tabbed/Tabbed.jsx'
import Staff from './Staff/Staff.jsx'

const Home = () => {
    return (
        <HomeStyled className='Home'>
            <Helmet>
                <title>Home :: SPA App</title>
            </Helmet>
            <div class='nested-wrapper'>
                <Tabbed/>
                <Staff/>
            </div>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`

`