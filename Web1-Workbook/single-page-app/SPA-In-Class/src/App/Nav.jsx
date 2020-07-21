import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import {NavLink } from 'react-router-dom'
import { mq } from '../common/mediaQueries.js'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, showMenuSet]= useState(false);

    const toggleMenu = () => {
        console.log ('you clicked a hamburger')
        showMenuSet(!showMenu)
    }

    // use effect is for lifecycle events
    // empty bracket triggers component mounted

    useEffect (()=>{
        console.log("I have mounted")
        const handleWindowSizeChange = () => {
            const isItMobile = window.matchMedia(`(max-width:499px)`)
            console.log (isItMobile)
            showMenuSet(!isItMobile.matches)
        }
        handleWindowSizeChange();
        window.addEventListener('resize',handleWindowSizeChange)

        // Clean up listener on dismount
        return () => {
            window.removeEventListener('resize',handleWindowSizeChange)
        }
    }, []); // straight braces means component mounted

    return (
        <NavStyled>
        <div className="nested-wrapper">
            <div className="hamburger" onClick={ toggleMenu }>
                <FontAwesomeIcon icon={faBars} ></FontAwesomeIcon>                
            </div>
                {
                showMenu && 
                <div class="links">
                    <NavLink  to="/" exact>Welcome</NavLink>
                    <NavLink  to="/services">Services</NavLink>
                    <NavLink  to="/contacts">Contacts</NavLink>
                    <NavLink  to="/login">Login</NavLink>
                </div>
                }
        </div>
        </NavStyled>
    )
}

export default Nav;

const NavStyled = styled.nav`
    background-color: teal;
    color: white;

    .hamburger {
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;

        svg {
            color: red;
            width: 40px;
            height: auto;
        }

        display: block;

        @media ${mq.tablet} {
            display: none;
        }
    }


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
