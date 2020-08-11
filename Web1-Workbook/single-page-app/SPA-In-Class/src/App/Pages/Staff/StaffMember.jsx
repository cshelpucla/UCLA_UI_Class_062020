import React , { useState } from 'react'
import styled from 'styled-components'
import {mq} from '../../../common/mediaQueries'
import Lightbox from '../../../common/Lightbox'

const StaffMember = ({member}) => {

    const [showLBox, showLBoxUpdate] = useState(false);
    
    const turnOn = () => {
        showLBoxUpdate(true)
    } 

    const turnOff = () => {
        showLBoxUpdate(false)
    } 
    
    return (
        <StaffMemberStyled >
            <img src={member.image} alt={member.name} onClick={ turnOn }/>
            <div className="title"> {member.name}</div>

        <Lightbox show={ showLBox } hideAction={ turnOff } width={300}>
            <div className="category">{ member.category }</div>
            <img src={member.image} alt={member.title} />
            <div className="title">{ member.title }</div>

            <div className="description">{ member.name }</div>            
        </Lightbox>            
        </StaffMemberStyled>

    )
}

export default StaffMember

const StaffMemberStyled = styled.div`
    outline: solid 5px white;
    margin: 20px;
    
    img {
        max-width: 100%;
        display: block;
    }

    .title {
        background-color: maroon;
        color:white;
        padding: 5px;
    }

    @media (mq.tablet) {
        width: 130px;
    }

    @media (mq.desktop) {
        width: 200px;
    }

    .Lightbox {
        title {
            background-color: teal;            
        }
    }
`;