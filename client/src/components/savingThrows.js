import React from "react";
import "../styles/characterSheet.css";

export const SavingThrows = (props) => (
  <div className="saving_throws_item saving_throws_item_1 check_container">
    <div className="saving_throws_ability_prof">
      {props.isChecked ? (
        <img alt="" src="/saving_icon_black.png" />
      ) : (
        <img src="/saving_icon_white.png" alt="" />
      )}
    </div>
    <div className="saving_throws_ability_name">{props.saving_name}</div>
    <div className="saving_throws_ability_modifier">
      <div className=" border b_g bonus_box">
        {props.isChecked ? `+${props.proSaving + props.proficiency}` : props.saving}
      </div>
    </div>
  </div>
);

export default SavingThrows;
