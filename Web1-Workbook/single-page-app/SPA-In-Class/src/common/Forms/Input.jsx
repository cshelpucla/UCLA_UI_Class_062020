import React from 'react';
import styled from 'styled-components';

const Input = ({formField, onChange}) => {

    const handleOnChange = (e) => {
        onChange(e, formField)
    }

    return (
        <InputStyled className='Input'>            
            <input 
                id={formField.id}
                name={formField.id}
                type={formField.inputType}
                onChange={handleOnChange}
                value={formField.value}
            />    

        </InputStyled>
    );
};

export default Input;

const InputStyled = styled.div`
`