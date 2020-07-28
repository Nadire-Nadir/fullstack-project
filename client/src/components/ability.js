import React from "react";
import "../styles/characterSheet.css";

export const Ability = (props) => (
  <div className="core_skill b_g">
    <div className="core_skill_box_title">
      <p>{props.BOX_TITLE}</p>
    </div>
    <div className="core_skill_dice border b_g">
      {props.SKILL_BONUS}
    </div>
    <div className="core_skill_value border">
        <p>{props.SKILL_VALUE}</p>
    </div>
  </div>
);

export default Ability;
