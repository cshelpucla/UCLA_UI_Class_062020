import React from 'react';
import styled from 'styled-components';
import FormGroup from '../../../common/FormGroup';

const ContactForm = () => {
    return (
        <ContactFormStyled className='Contact'>
            <div className="nested-wrapper">
                <form>
                    <FormGroup name="userName"    label="Name"    fldType="input"/>
                    <FormGroup name="userEmail"   label="Email"   fldType="input"/>
                    <FormGroup name="userMessage" label="Message" fldType="textarea"/>
                </form>
            </div>    
        </ContactFormStyled>
    );
};

export default ContactForm;

const ContactFormStyled = styled.div`

`