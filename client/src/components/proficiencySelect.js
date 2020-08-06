import React from "react";
import { CLASS_PROFICIENCY } from "../config";

class ProficiencySelect extends React.Component {
  constructor(props) {
    super(props);  
  }

  render() {
    return (           
        <label className="proficiency_select_container">
          <select
            onChange={this.props.onChange}
            name={this.props.name}           
            type="text"
            className="skill_input proficiency_input"
            placeholder=""
          >
            {CLASS_PROFICIENCY[`${this.props.class_name}`].skills.map(
              (item) => {
                return <option key={item}>{item}</option>;
              }
            )}
          </select>
        </label>
      
    );
  }
}

export default ProficiencySelect;
