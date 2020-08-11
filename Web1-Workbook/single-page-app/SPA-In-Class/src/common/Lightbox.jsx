import React from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const Lightbox = ({hideAction, show=false, children, width=300}) => {

    const handleHide = () => {
          hideAction()
    }

    const stopBubbleUp = (e) => {
        e.stopPropagation()
    }

    return (
        show && 
        <LightboxStyled className='Lighbox' onClick={handleHide} lightWidth={width}>
            <div className='light' onClick={ stopBubbleUp }>
                <FontAwesomeIcon 
                    icon={faWindowClose} 
                    className='close' 
                    onClick={handleHide}/>
                {children}
            </div> 
        </LightboxStyled>
    )
}

export default Lightbox;

const LightboxStyled = styled.div`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;

    z-index: 1000;

    .light {
        width: ${ ({lightWidth}) => lightWidth+40}px;
        padding: 20px;
        background-color: #fff;

        position: absolute;
        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%)
    }

    .close {
        position: absolute;
        right: 20px;
        top: 20px;
    }

    .Lightbox {
        img {
            border-color: solid 20px red;
            max-width: 100%;
        }
        
        h3 {
            font-size: 30px;
            margin: 0px;
        }

        .description{
            color: #333;
            background-color: gray;
        }
    }
`;