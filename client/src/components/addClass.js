import React from "react";
import SelectOption from "./selectOption";


const AddClass = (props) => (
  <div className="character_form_group">
    <div className="add_character_form">
      <div className="add_character_form_title">Choose a Class</div>
      <div className="add_character_form_option">
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/barbarian.png"
          option_name="Barbarian"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/bard.png"
          option_name="Bard"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/cleric.png"
          option_name="Cleric"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/druid.png"
          option_name="Druid"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/fighter.png"
          option_name="Fighter"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/monk.png"
          option_name="Monk"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/paladin.png"
          option_name="Paladin"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/sorcerer.png"
          option_name="Sorcerer"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/rogue.png"
          option_name="Rogue"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/ranger.png"
          option_name="Ranger"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/warlock.png"
          option_name="Warlock"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/wizard.png"
          option_name="Wizard"
        />
      </div>
    </div>
  </div>
);

export default AddClass;
