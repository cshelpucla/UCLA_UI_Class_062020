import React, { useState } from 'react';
import styled from 'styled-components';
import FormGroup from '../../common/Forms/FormGroup'
import Button from '../../common/Forms/Button.jsx';
import API from '../../common/axios.js';

const formFields = {
    nameField: {id:'userName',     
                label:'Name', 
                inputType:'input', 
                value:'',
                validate: {
                    required: true,
                    valid: true,
                    message: ''
                }
               },

    passwordField: {id:'password',     
                label:'Password', 
                inputType:'input', 
                value:'',
                validate: {
                    required: true,
                    valid: true,
                    message: ''
                }
               },
 
}

const Login = () => {
    const [userName, userNameUpdate] = useState(formFields.nameField)
    const [password, passwordUpdate] = useState(formFields.passwordField)   

    const handleOnChange = (event, formField) => {
        // console.log(event.target.value, formField);

        const newField = {
            ...formField,
            value: event.target.value,
        }

        if (newField.validate.required === true) {
            // console.log('Validating: ', newField.label);

            if (newField.value.length < 8) {
                // Let them know there is an error
                newField.validate.valid = false;
                newField.validate.message = `You forgot to fill out the ${newField.label} field.`;
            } else {
                // Clear any errors.
                newField.validate.valid = true;
                newField.validate.message = ``;
            }
        }

        if (formField.id === 'userName') {
            userNameUpdate(newField);
        }
        if (formField.id === 'password') {
            passwordUpdate(newField);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Captured Form Submit, we will take it from here.');

        if ( userName.validate.valid === true && password.validate.valid === true ) {
            console.log('Valid Submitting form.');

            // .. AJAX goes here: AKA AXIOS
            const postData = {
                userName: userName,
                password: password                
            }

            API.post('/login', postData).then((result) => {
                console.log('result', result);
            });
        }
    }

    return (
        <LoginStyled className='Login'>
            <div className="nested-wrapper">
            <form onSubmit={ handleFormSubmit }>
                <FormGroup formField={userName} onChange={handleOnChange}/>
                <FormGroup formField={password} onChange={handleOnChange}/>                
                <Button type='submit'>Login</Button>
            </form>
            </div>
        </LoginStyled>
    );
};

export default Login;

const LoginStyled = styled.div`
    
`