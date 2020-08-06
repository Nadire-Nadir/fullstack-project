import React from "react";
import "../styles/skillList.css";

export const AttacksList = (props) =>  (      
    <div className="skill_list attack_list">                
        <div className="li_item atk_li_item">{props.NAME}</div>
        <div className="atk_li_item atk_li_item_atk">{props.ATK}</div>
        <div className="atk_li_item li_item">{props.DAMAGE}</div>        
    </div>  

);

export default AttacksList;