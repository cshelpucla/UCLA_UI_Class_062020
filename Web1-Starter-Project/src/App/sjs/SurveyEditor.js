import React, { Component, Fragment } from 'react';
import * as SurveyCreator from "survey-creator";

// import * as SurveyJSEditor from "surveyjs-editor";
// import * as SurveyKo from "survey-knockout";

//import "survey-react/survey.css";
//import "./survey-creator.css"

class SurveyEditor extends React.Component {
  
  componentDidMount() {
    let editorOptions = {    
      showEmbededSurveyTab : false,
      showTestSurveyTab : true,
      showJSONEditorTab : false,      
      showPagesToolbox: true,
      showPropertyGrid: true,
      questionTypes: ["text", "html", "checkbox", "comment", "radiogroup", "dropdown"],      
      showOptions: false,
    };

    this.editor = new SurveyCreator.SurveyCreator("surveyEditorContainer",{});
    //  editorOptions
    //);

    this.editor.showToolbox = "right";
    this.editor.showPropertyGrid = "right";
    
    this.editor.onCanShowProperty.add((editor, options) => {
      let canShow = false;
      switch(options.property.name)
      {
        case "html":
        case "isRequired":
        case "title":
        case "choices":
        case "choicesOrder":
        case "otherText":
        case "hasOther":
        case "optionsCaption":
        case "completedHtml":
        case "showProgressBar":            
        case "placeHolder":
          canShow = true;
          break;
      }

      if (options.obj.getType() == "html" && options.property.name == "startWithNewLine") {
        canShow = true;
      }

      this.editor.onElementAllowOperations.add(function (editor, options) {
        var obj = options.obj;
        if (!obj || !obj.page) return;        
        options.allowEdit = true;
        options.allowDelete = true;
        options.allowCopy = true;
        options.allowAddToToolbox = false;
        options.allowDragging = true;
        options.allowChangeType = true;
      });

      options.canShow = canShow;
      //console.log(options.property.name);
    });

    this.editor.saveSurveyFunc = this.saveMySurvey;
    this.editor.text = JSON.stringify(this.props.config);    
  }

  createNewSurvey() {
    this.editor.text = "";
  }

  render() {
    /*
    return ( 
      <div> 
      <input type="button" value="Create New Survey" onClick={() => this.createNewSurvey()} />
      <div id="surveyEditorContainer">
      </div>
    </div>) ;
    */  
    return (<div id="surveyEditorContainer"/>)  
  }

  saveMySurvey = () => {    
    this.props.updateConfig(JSON.parse(this.editor.text));
  };
}

export default SurveyEditor;