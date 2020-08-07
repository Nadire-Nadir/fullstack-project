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
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/elf.jpg"
                  option_name="Elf"
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/dwarf.jpeg"
                  option_name="Dwarf"
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/halfling.jpg"
                  option_name="Halfling"
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/half-orc.jpeg"
                  option_name="Half-Orc"
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/half-elf.jpg"
                  option_name="Half-Elf"
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/gnome.jpg"
                  option_name="Gnome"
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/dragonborn.jpg"
                  option_name="Dragonborn"
                />
                <SelectOption
                  handleClick={props.handleRaceClick}
                  option_profile="/tiefling.jpg"
                  option_name="Tiefling"
                />
              </div>
            </div>
          </div>
)

export default AddRace;