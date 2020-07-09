import React from 'react'
import styled from 'styled-components';

const Header = () => {
    return (
        <div className="nested-wrapper">
            <HeaderStyled>My Header</HeaderStyled>
        </div>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: teal;
    padding: 20 px;
    font-size: 30px;
`