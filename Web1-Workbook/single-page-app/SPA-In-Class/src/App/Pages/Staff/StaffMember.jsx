import React from 'react'
import styled from 'styled-components'
import {mq} from '../../../common/mediaQueries'

const StaffMember = ({member}) => {
    
    return (
        <StaffMemberStyled >
            <img src={member.image} alt={member.name}></img>
            <div className="title"> {member.name}</div>
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
`;