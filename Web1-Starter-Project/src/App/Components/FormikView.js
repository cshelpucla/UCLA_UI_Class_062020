import './formik-demo.css';
import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';
/*import { MoreResources, DisplayFormikState } from './formik-demo';*/
import styled from 'styled-components';
import { InputFields } from '../Data/InputFields';

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, "C'mon, your name is longer than that")
      .required('First name is required.'),
    lastName: Yup.string()
      .min(2, "C'mon, your name is longer than that")
      .required('Last name is required.'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
  }),

  mapPropsToValues: ({ user }) => ({
    ...user,
  }),

  handleSubmit: (payload, { setSubmitting }) => {
    alert(payload.email);
    setSubmitting(false);
  },
  displayName: 'MyForm',
});

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

const TextInput = ({ type, id, label, error, value, onChange, children, className, ...props }) => {
  const classes = classnames(
    'input-group',
    {
      'animated shake error': !!error,
    },
    className
  );
  return (
    <div className={classes}>
      <FieldStyled>
        <table>  
        <tr><td>  
        <Label htmlFor={id} error={error}>
            {label}
        </Label>
        </td><td>  
        <InputStyled
            id={id}
            className="text-input"
            type={type}
            value={value}
            onChange={onChange}
            children={children}
            {...props}
        />
        </td></tr>  
        </table>  
      </FieldStyled>
      <InputFeedback error={error} />
    </div>
  );
};

/*
            error={touched.firstName && errors.firstName}
            value={values.firstName}

            error={feva.touched.firstName && feva.errors.firstName}
            value={feva.values.firstName}
*/


const renderInputFields = () => {
    return InputFields.map((e, idx) => {
          
          const fe = formikEnhancer
          const feva = formikEnhancer.validationSchema

          return <TextInput
            id=          {e.id}
            type=        {e.type}
            label=       {e.label}
            placeholder= {e.placeholder}            
            onChange={fe.handleChange}
            onBlur={fe.handleBlur}            
          />        
    });
}


const MyForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      {renderInputFields()}
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

/* <DisplayFormikState {...props} />  <MoreResources /> */

const MyEnhancedForm = formikEnhancer(MyForm);

// Helper for the demo

const FormikView = () => (
  <div className="app">  
    <MyEnhancedForm user={{ email: '', 
                            firstName: '', 
                            lastName: '', 
                            city: '', 
                            zip: '' }} />
    
  </div>
);

const FieldStyled = styled.div`
    font-size: medium;
    display: inline;
    flex-wrap: wrap;    
    max-height: 1.5em;
    max-widht: 1.5em;
    justify-content: left;
`;

const InputStyled = styled.input`
    font-size: medium;
    display: flex;
    flex-wrap: wrap;
    background-color: white;    
    max-height: 1.5em;
    max-widht: 1.5em;
    justify-content: flex-end;
`;

export default FormikView;