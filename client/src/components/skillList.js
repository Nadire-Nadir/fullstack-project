import React from "react";
import "../styles/skillList.css";

export const SkillList = (props) =>  (      
    <div className="skill_list check_container">
        <div className="li_item saving_icon"><img alt=""/></div>                 
        <div className="li_item skills_heading">{props.MOD}</div>
        <div className="li_item_skill">{props.SKILL}</div>
        <div className="li_item">
            <div className="bonus_box border b_g">{props.BONUS}</div>
        </div>
    </div>  

);

export default SkillList;