import React from "react";

export const SelectOption = (props) => (
    <div className="character_input" >
        <div className="option_img">
            <img src={props.option_profile} alt="" />
        </div>
        <div value={props.value} className="character_input_select">{props.option_name}</div>    
    </div>
)

export default SelectOption;