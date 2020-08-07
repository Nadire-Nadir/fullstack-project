import React from "react";
import { CLASS_PROFICIENCY } from "../config";

const ProficiencySelect =(props) => (
             
        <label className="proficiency_select_container">
          <select
            onChange={props.onChange}
            name={props.name}           
            type="text"
            className="skill_input proficiency_input"
            placeholder=""
          >
            {CLASS_PROFICIENCY[`${props.class_name}`].skills.map(
              (item) => {
                return <option key={item}>{item}</option>;
              }
            )}
          </select>
        </label>
    
)
export default ProficiencySelect;
