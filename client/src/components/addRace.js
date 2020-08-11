import React from "react";
import SelectOption from "./selectOption";

const AddRace = (props) => (
    <div className="character_form_group_vh">
            <div className="add_character_form">
              <div className="add_character_form_title">Choose a Race</div>
              <div className="add_character_form_option">
                <SelectOption
                  option_profile="/human.jpg"
                  option_name="Human"
                  handleClick={props.handleRaceClick}
                  popup_title="CONFIRM RACE"
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/elf.jpg"
                  option_name="Elf"
                  popup_title="CONFIRM RACE"
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/dwarf.jpeg"
                  option_name="Dwarf"
                  popup_title="CONFIRM RACE"
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/halfling.jpg"
                  option_name="Halfling"
                  popup_title="CONFIRM RACE"
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/half-orc.jpeg"
                  option_name="Half-Orc"
                  popup_title="CONFIRM RACE"
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/half-elf.jpg"
                  option_name="Half-Elf"
                  popup_title="CONFIRM RACE"
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/gnome.jpg"
                  option_name="Gnome"
                  popup_title="CONFIRM RACE"
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/dragonborn.jpg"
                  option_name="Dragonborn"
                  popup_title="CONFIRM RACE"
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/tiefling.jpg"
                  option_name="Tiefling"
                  popup_title="CONFIRM RACE"
                />
              </div>
            </div>
          </div>
)

export default AddRace;