import React, { Component } from "react";
import SurveyCreator from "./SurveyCreator"
import surveyConfig from './breakfast-survey.json';

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
          <SurveyCreator config={surveyConfig} updateConfig={surveyConfig}  />   
    );
  }
}

export default FormContainer;

