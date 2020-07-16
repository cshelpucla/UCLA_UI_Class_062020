import React from 'react'
import styled from 'styled-components';
import {NavLink } from 'react-router-dom'
import { mq } from '../common/mediaQueries.js'

const Nav = () => {
    return (
        <NavStyled>
        <div className="nested-wrapper">
            <NavLink  to="/" exact>Welcome</NavLink>
            <NavLink  to="/services">Services</NavLink>
            <NavLink  to="/contacts">Contacts</NavLink>
            <NavLink  to="/login">Login</NavLink>
        </div>
        </NavStyled>
    )
}

export default Nav;

const NavStyled = styled.nav`
    background-color: teal;
    color: white;
    text-align: center;
    a {
        display: inline-block;

        text-align: center;
        font-size: 20px;
        background-color: #710080;
        color:white;
        
        text-decoration:none;
        width:100%;        
        line-height: 40px;
        margin-bottom: 10px;
        
        @media ${mq.tablet} {
            width:100px;        
            line-height: 50px;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 0px;
        }

        @media ${mq.desktop} {
            width:150px;              
        }
        
        margin-right: 10px;
        margin-left: 10px;
        border-radius: 5px;

        &:hover {
            background-color: #103534;
        }

        &.active {
            background-color: red;
        }

    }
`
