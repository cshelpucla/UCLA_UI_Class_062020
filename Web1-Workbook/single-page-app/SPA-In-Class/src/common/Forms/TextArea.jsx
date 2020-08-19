import React from 'react';
import styled from 'styled-components';

const TextArea = ({formField, onChange}) => {

    const handleOnChange = (e) => {        
        onChange(e, formField)
    }

    return (
        <TextAreaStyled className='TextArea'>            
            <textarea 
                id={formField.id}
                name={formField.id}
                type={formField.inputType}                
                onChange={handleOnChange}
                value={formField.value}
            />            
        </TextAreaStyled>
    );
};

export default TextArea;

const TextAreaStyled = styled.div`
`