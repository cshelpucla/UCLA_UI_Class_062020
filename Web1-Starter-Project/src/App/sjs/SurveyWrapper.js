import React from 'react';
import * as Survey from "survey-react";


class SurveyWrapper extends React.Component {

  constructor() {
    super()    
    Survey.StylesManager.applyTheme("orange");        
  }

  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Survey Completed! " + result);
    console.log(result.valuesHash);
  }

  render() {        
    
    //console.log(this.props.config);
    var model = new Survey.Model(this.props.config);

    return (
      <div>
        <div className="surveyjs">
          <Survey.Survey model={model} onComplete={this.onComplete} onValueChanged={this.onValueChanged}/>        
        </div>        
      </div>)
  }
}
export default SurveyWrapper;