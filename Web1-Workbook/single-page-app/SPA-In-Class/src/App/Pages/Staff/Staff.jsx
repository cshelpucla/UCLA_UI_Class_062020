import React from 'react'
import styled from 'styled-components'
import StaffMember from './StaffMember.jsx'
import {staffData} from './staffdata.js'

const Staff = () => {    

    const renderMembers = () => {
        return staffData.map((member, idx) => {
            return <StaffMember key = {idx} member = { member }/>        
        });
    }

    return (
        <StaffStyled className="Staff">
            {renderMembers()}
        </StaffStyled>
    )
}

export default Staff

const StaffStyled = styled.div`
    background-color: teal;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: flex-end;
    justify-content: flex-start;
`;