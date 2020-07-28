import React from "react";
import "../styles/characterSheet.css";

export const SavingThrows = (props) => (
  <div className="saving_throws_item saving_throws_item_1 check_container">
    <div className="saving_throws_ability_prof"><img /></div>
    <div className="saving_throws_ability_name">{props.SAVING_NAME}</div>
    <div className="saving_throws_ability_modifier">
      <div className=" border b_g bonus_box">{props.SAVING}</div>
    </div>
  </div>
);

export default SavingThrows;
