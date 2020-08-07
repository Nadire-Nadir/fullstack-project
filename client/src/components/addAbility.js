import React from "react";
import ScoreCalc from "./scoreCalc";
import AbilitySelect from "./abilitySelect";
import { calBonus } from "../utils/utils";

const AddAbility = (props) => (
  <div className="character_form_group">
    <div className="add_character_form_title">Ability Scores</div>
    <div className="add_ability_form">
      <AbilitySelect
        abilitySelectTitle="STRENGTH"
        name="strength"
        onChange={props.onChange}
        value={props.strValue}
        abilitySelectList={props.abilitySelectList}
      />
      <AbilitySelect
        abilitySelectTitle="DEXTERITY"
        name="dexterity"
        onChange={props.onChange}
        value={props.dexVlue}
        abilitySelectList={props.abilitySelectList}
      />

      <AbilitySelect
        abilitySelectTitle="CONSTITUTION"
        name="constitution"
        onChange={props.onChange}
        value={props.conVlue}
        abilitySelectList={props.abilitySelectList}
      />
      <AbilitySelect
        abilitySelectTitle="INTELLIGENCE"
        name="intelligence"
        onChange={props.onChange}
        value={props.intVlue}
        abilitySelectList={props.abilitySelectList}
      />
      <AbilitySelect
        abilitySelectTitle="WISDOM"
        name="wisdom"
        onChange={props.onChange}
        value={props.wisVlue}
        abilitySelectList={props.abilitySelectList}
      />
      <AbilitySelect
        abilitySelectTitle="CHARISMA"
        name="charisma"
        onChange={props.onChange}
        value={props.chaVlue}
        abilitySelectList={props.abilitySelectList}
      />
    </div>
    <div id="score_cal">
      <div className="add_character_form_title">Scores Calculations</div>
      <div className="score_cal_container">
        <ScoreCalc
          score_header="STRENGTH"
          total_score={props.strValue}
          modifier={calBonus(props.strValue)}
          base_score={props.strValue}
        />
        <ScoreCalc
          score_header="DEXTERITY"
          total_score={props.dexValue}
          modifier={calBonus(props.dexValue)}
          base_score={props.dexValue}
        />
        <ScoreCalc
          score_header="CONSTITUTION"
          total_score={props.conValue}
          modifier={calBonus(props.conValue)}
          base_score={props.conValue}
        />
      </div>
      <div className="score_cal_container">
        <ScoreCalc
          score_header="INTELLIGENCE"
          total_score={props.intValue}
          modifier={calBonus(props.intValue)}
          base_score={props.intValue}
        />
        <ScoreCalc
          score_header="WISDOM"
          total_score={props.wisValue}
          modifier={calBonus(props.wisValue)}
          base_score={props.wisValue}
        />
        <ScoreCalc
          score_header="CHARISMA"
          total_score={props.chaValue}
          modifier={calBonus(props.chaValue)}
          base_score={props.chaValue}
        />
      </div>
    </div>

    </div>
);

export default AddAbility;
