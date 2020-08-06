import React from "react";

export const AbilitySelect = (props) => {
    return(
    <label className="add_ability_form_option">
        {props.abilitySelectTitle}
        <select
            onChange={props.onChange}
            name={props.name}
            value={props.value}
            className="character_input skill_input"
            placeholder=""
        >
        {props.abilitySelectList}
    </select>
  </label>
)}

export default AbilitySelect;