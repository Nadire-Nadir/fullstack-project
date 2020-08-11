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
          slideClick={props.slideClick}
          popup_title="CONFIRM CLASS"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/bard.png"
          option_name="Bard"
          popup_title="CONFIRM CLASS"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/cleric.png"
          option_name="Cleric"
          popup_title="CONFIRM CLASS"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/druid.png"
          option_name="Druid"
          popup_title="CONFIRM CLASS"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/fighter.png"
          option_name="Fighter"
          popup_title="CONFIRM CLASS"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/monk.png"
          option_name="Monk"
          popup_title="CONFIRM CLASS"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/paladin.png"
          option_name="Paladin"
          popup_title="CONFIRM CLASS"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/sorcerer.png"
          option_name="Sorcerer"
          popup_title="CONFIRM CLASS"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/rogue.png"
          option_name="Rogue"
          popup_title="CONFIRM CLASS"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/ranger.png"
          option_name="Ranger"
          popup_title="CONFIRM CLASS"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/warlock.png"
          option_name="Warlock"
          popup_title="CONFIRM CLASS"
        />
        <SelectOption
          handleClick={props.handleClassClick}
          option_profile="/wizard.png"
          option_name="Wizard"
          popup_title="CONFIRM CLASS"
        />
      </div>
    </div>
  </div>
);

export default AddClass;
