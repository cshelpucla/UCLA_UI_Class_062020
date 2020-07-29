import React from 'react';
import styled from 'styled-components';
/*import JSONSchemaForm from '@rjsf/core'*/
import Form from "@rjsf/material-ui";

const mySchema = {
    type: "object",
    title: "Object title",
    properties: {
      name: {
        type: "string"
      },
      age: {
        type: "number"
      }
    }
  };

  function ObjectFieldTemplate({ TitleField, properties, title, description }) {
    return (
      <div>
        <TitleField title={title} />
        <FieldStyled className="row">
          {properties.map(prop => (
            <div
              className="col-lg-2 col-md-4 col-sm-6 col-xs-12"
              key={prop.content.key}>
              {prop.content}
            </div>
          ))}
        </FieldStyled>
        {description}
      </div>
    );
  }


export default class FormView extends React.Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({formData}) {
      console.log(formData);
  }
  
  /* ObjectFieldTemplate={ObjectFieldTemplate} */
  render() {
      return (
        <FormStyled>
            <Form schema={mySchema} 
                  onSubmit={this.handleSubmit} 
                  ObjectFieldTemplate={ObjectFieldTemplate}                   
            />
        </FormStyled>
      )
  }
}

const FormStyled = styled.div`
    background-color: gray;
    padding: 20px;
    outline: solid black 1px;
    display: inline-block;
    min-height: 100%; 
    min-width: 100%; 
    fontSize: 5px;
`;

const FieldStyled = styled.div`
    font-size: 1em;
    background-color: red;
`;