import React from "react";
import { CLASS_PROFICIENCY, LEVEL_OPTIONS } from "../config";
import ProficiencySelect from "../components/proficiencySelect";

const AddProficiency = (props) => (
  <div className="character_form_group_vh">
    <div id="proficiency_block">
      <div id="chosen_class_container">
        <div id="chosen_class_div">
          <div className="add_character_form_title">Chosen Class</div>
          <div className="character_input">
            <div className="option_img">
              <img src="/barbarian.png" alt="" />
            </div>
            <div className="character_input_select">
              {props.chosen_class}
            </div>
          </div>
        </div>
        <div id="add_character_level">
          <label>
            Choose Starting Level:
            <select
              onChange={props.onChange}
              name="level"
              value={props.value}
              type="number"
              className="character_input skill_input"
              placeholder=""
            >
              {LEVEL_OPTIONS.map((item) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
          </label>
        </div>
      </div>
      <div className="proficiency_container">
        <p>Proficiencies</p>
        {CLASS_PROFICIENCY[`${props.class_name}`].skill_num.map((item) => {
          return (
            <div key={item}>
              {
                <ProficiencySelect
                  name={item}
                  class_name={props.class_name}
                />
              }
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default AddProficiency;
