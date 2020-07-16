import React, { forwardRef } from 'react'
import styled from 'styled-components';
// get our fontawesome imports

import { mq } from '../common/mediaQueries.js'
import { faHome , faHotTub} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <div className="nested-wrapper">
            <HeaderStyled>
                <div className="nested-wrapper">
                    <div className="row-container">
                        <div className="logo"><FontAwesomeIcon icon={faHotTub}/></div>
                        <div className="text">
                            <h2>SPA Sanctuary</h2>
                            <h3>SPA for Every Occasion</h3>
                        </div>
                    </div>
                </div>    
            </HeaderStyled>
        </div>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: teal;    
    font-size: 30px;

    @media (mq.tablet) {
        background-color:orange;
    }

    @media (mq.desktop) {
        background-color:purple;
    }

    .row-container {
        display: flex;
        justify-contents: center;
    }

    .logo {
        outline: solid 1px red;
        color: #15b1b0;
        margin-right : 10px;
        svg {
            width: 100px;
            height: auto;
        }
    }

    .text {
        outline: solid 1px purple;
        h2 {
            marginL 0px;
            font-size: 20px;
            color: #34d4d;
        }
        h3 {
            marginL 0px;
            font-size: 10px;
            color: #34d4d;

        }
    }

`