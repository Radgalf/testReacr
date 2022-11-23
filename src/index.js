import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Label } from "@atlaskit/field-base";
import { DatePicker, DateTimePicker, TimePicker} from "@atlaskit/datetime-picker";

export default class TutorialTimePicker extends Component {
  render() {
    return (
      <div>
        <Label label="Date TimePicker"/>
        <DatePicker
          id="datepicker"
          onChange={console.log}
          testId={'datePicker'}
        />
      </div>
    );
  }
}

AJS.toInit(function (){
  ReactDOM.render(<TutorialTimePicker/>, document.getElementById("container"));
})