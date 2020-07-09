import React from 'react'
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavStyled>
        <div className="nested-wrapper">
            My Navigation
        </div>
        </NavStyled>
    )
}

export default Nav;

const NavStyled = styled.nav`
    background-color: teal;
    padding: 20 px;
`
