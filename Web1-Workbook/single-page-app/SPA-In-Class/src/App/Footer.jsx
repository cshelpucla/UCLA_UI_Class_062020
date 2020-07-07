import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyler>My Footer</FooterStyler>
    )
}

export default Footer;

const FooterStyler = styled.footer`
    background-color: teal;
    border-color: green;
`;