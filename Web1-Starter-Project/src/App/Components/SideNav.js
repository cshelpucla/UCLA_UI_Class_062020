import React from 'react';
import styled from "styled-components";
import NavItem from "./NavItem.js"

export default class SideNav extends React.Component {

    onItemClick = (path) => {
        this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
    }

    constructor(props) {
      super(props);
      this.state = {
        activePath: '/',
        items: [
          {
            path: 'Home', /* path is used as id to check which NavItem is active basically */
            name: 'Home',
            css: 'fa fa-fw fa-home',
            key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
          },
          {
            path: 'Builder',
            name: 'Builder',
            css: 'fa fa-fw fa-tools',
            key: 2
          },
          {
            path: 'Runner',
            name: 'Runner',
            css: 'fa fa-play',
            key: 3
          },
          {
            path: 'Layout',
            name: 'Layout',
            css: 'fa fa-fw fa-hammer',
            key: 4
          },
          {
            path: 'fbuild',
            name: 'Form Builder',
            css: 'fa fa-fw fa-medkit',
            key: 5
          },
          {
            path: 'fview',
            name: 'Form Viewer',
            css: 'fa fa-fw fa-address-card',
            key: 5
          },
          {
            path: 'About',
            name: 'About',
            css: 'fa fa-fw fa-clock',
            key: 6
          },
        ]
      }
      
    }

    render() {
      const { items, activePath } = this.state;
      return (
        <StyledSideNav>
          {
            /* items = just array AND map() loops thru that array AND item is param of that loop */
            items.map((item) => {
              /* Return however many NavItems in array to be rendered */
              return (
                <NavItem path={item.path} name={item.name} css={item.css} 
                         onItemClick={this.onItemClick} 
                         /* Simply passed an entire function to onClick prop */ 
                         active={item.path === activePath} key={item.key}/>
              )
            })
          }
        </StyledSideNav>
      );
    }
}

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 75px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;