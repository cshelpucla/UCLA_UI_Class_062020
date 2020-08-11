import React from 'react';
import styled from 'styled-components';

const FormGroup = ({name,label,fldtype}) => {
    return (
        <FormGroupStyled className='FormGroup'>
            
                <label htmlFor={name}  className="column">{label}</label>
                <div className="control">
                    <input id={name} />                        
                </div>
            
        </FormGroupStyled>
    );
};

export default FormGroup;

const FormGroupStyled = styled.div`


`