import React, { Component , Grid } from "react";
import ReactDOM from "react-dom";

import SurveyEditor from "./SurveyEditor"
import surveyConfig from './breakfast-survey.json';
import SplitPane, { Pane } from 'react-split-pane';

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      seo_title: "",
      reelContainerWidth: window.innerWidth - 200,
      reelContainerHeight: window.innerHeight - 200,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  updateDimensions() {
    const reelContainerWidth = window.innerWidth - 200;
    const reelContainerHeight = window.innerHeight - 200;

    // sets the width of reel-container state to (window size - 400px)
    this.setState({ reelContainerWidth: reelContainerWidth });
    this.setState({ reelContainerHeight: reelContainerHeight });
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }


  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { seo_title } = this.state;
    const reelContainerStyle = {  width: this.state.reelContainerWidth-50, height: this.state.reelContainerHeight-50 };
    return (
          <SurveyEditor config={surveyConfig} updateConfig={surveyConfig}  />   
    );
  }
}

export default FormContainer;

/*
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

<Input width="200%"
text="SEO title"
label="seo_title"
type="text"
id="seo_title"
value={seo_title}
handleChange={this.handleChange}
/>
<br/>
*/