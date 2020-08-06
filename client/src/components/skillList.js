import React from "react";
import "../styles/skillList.css";

export const SkillList = (props) =>  (      
    <div className="skill_list check_container">
        <div className="li_item saving_icon">
            {props.isChecked ? (
                <img alt="" src="/saving_icon_black.png" />
                ) : (
                <img src="/saving_icon_white.png" alt="" />
            )}
        </div>                 
        <div className="li_item skills_heading">{props.MOD}</div>
        <div className="li_item_skill">{props.SKILL}</div>
        <div className="li_item">
            {props.DAMAGE}
            <div className="bonus_box border b_g"> 
                {props.isChecked ? `+${props.skillBonus + props.proficiency}` : props.BONUS}
            </div>

           
        </div>
    </div>  

);

export default SkillList;