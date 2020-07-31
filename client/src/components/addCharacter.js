import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { LEVEL_OPTIONS, SKILL_OPTIONS } from "../config";
import { calBonus } from "../utils/utils";

import "../styles/addCharacter.css";
import "../styles/form.css";
import SelectOption from "./selectOption";
import ScoreCalc from "./scoreCalc";

class AddCharacter extends React.Component {
  constructor(props) {
    super(props);

    this.take = this.take.bind(this);
    this.publish = this.publish.bind(this);

    this.state = {
      name: "",
      race: "",
      class: {
        name: "",
        skills: [],
      },
      level: "",
      strength: "",
      dexterity: "",
      constitution: "",
      intelligence: "",
      wisdom: "",
      charisma: "",
      status: "",
      message: "",
    };
  }

  take = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "name":
        return this.setState({ name: e.target.value });
      case "race":
        return this.setState({ race: e.target.value });
      case "class":
        return this.setState({ class: { name: e.target.value } });
      case "skill01":
        return this.setState({
          class: { skill01: e.target.value, name: this.state.class.name },
        });
      case "skill02":
        return this.setState({
          class: {
            skill02: e.target.value,
            name: this.state.class.name,
            skill01: this.state.class.skill01,
          },
        });
      case "level":
        return this.setState({ level: e.target.value });
      case "strength":
        return this.setState({ strength: e.target.value });
      case "dexterity":
        return this.setState({ dexterity: e.target.value });
      case "constitution":
        return this.setState({ constitution: e.target.value });
      case "intelligence":
        return this.setState({ intelligence: e.target.value });
      case "wisdom":
        return this.setState({ wisdom: e.target.value });
      case "charisma":
        return this.setState({ charisma: e.target.value });

      default:
        return this.setState({
          name: "",
          race: "",
          class: {
            name: "",
            skill01: "",
            skill02: "",
          },

          level: "",
          strength: "",
          dexterity: "",
          constitution: "",
          intelligence: "",
          wisdom: "",
          charisma: "",
        });
    }
  };

  publish = (e) => {
    e.preventDefault();
    const newCharacter = {
      name: this.state.name,
      race: this.state.race,
      class: this.state.class,
      level: this.state.level,
      strength: this.state.strength,
      dexterity: this.state.dexterity,
      constitution: this.state.constitution,
      intelligence: this.state.intelligence,
      wisdom: this.state.wisdom,
      charisma: this.state.charisma,
    };
    console.log("this.state.race", this.state.race);
    axios
      .post("/create-character", newCharacter, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        this.props.history.push("/");
        this.setState({ status: "ok", message: "Published successfully!" });
      })
      .catch((error) => {
        this.setState({ status: "no", message: "Publishing failed!" });
        console.log("User auth error: " + error);
      });
  };

  render() {
    console.log("this.state", this.state);
    return (
      <div id="add_character">
        <div className="slider_left"></div>
        <div id="add_character_content">
          <div className="character_form_group">
            <div id="create_cha_name">
              <div className="character_portrait">
                <img src="/character_profile1.jpeg" alt="" />
              </div>
              <div className="cha_name_form">
                <div>Character Name:</div>
                <label className="add_character_form">
                  <input
                    onChange={this.take}
                    name="name"
                    value={this.state.name}
                    type="text"
                    className="character_name_input basic_input"
                    placeholder="Inter name"
                  ></input>
                </label>
              </div>
            </div>
          </div>
          <div className="character_form_group">
            <div className="add_character_form">
              <div className="add_character_form_title">Choose a Race</div>
              <div
                value={this.state.race}
                name="race"
                onChange={this.take}
                type="text"
                className="add_character_form_option"
              >
                <SelectOption
                  value="human"
                  option_profile="/human.jpeg"
                  option_name="HUMAN"
                />
                <SelectOption
                  value="elf"
                  option_profile="/elf.jpeg"
                  option_name="ELF"
                />
                <SelectOption
                  value="dwarf"
                  option_profile="/dwarf.jpeg"
                  option_name="DWARF"
                />
                <SelectOption
                  value="halfling"
                  option_profile="/halfling.jpeg"
                  option_name="HALFLING"
                />
                <SelectOption
                  value="half-orc"
                  option_profile="/half-orc.jpeg"
                  option_name="HALF-ORC"
                />
                <SelectOption
                  value="half-elf"
                  option_profile="/half-elf.jpeg"
                  option_name="HALF-ELF"
                />
                <SelectOption
                  value="gnome"
                  option_profile="/gnome.jpeg"
                  option_name="GNOME"
                />
                <SelectOption
                  value="dragonborn"
                  option_profile="/dragonborn.jpeg"
                  option_name="DRAGONBORN"
                />
                <SelectOption
                  value="tiefling"
                  option_profile="/tiefling.jpeg"
                  option_name="TIEFLING"
                />
              </div>
            </div>
          </div>

          <div className="character_form_group">
            <div className="add_character_form">
              <div className="add_character_form_title">Choose a Class</div>
              <div
                onChange={this.take}
                name="class"
                value={this.state.class.name}
                type="text"
                className="add_character_form_option"
              >
                <SelectOption
                  value="Barbarian"
                  option_profile="/barbarian.jpeg"
                  option_name="BARBARIAN"
                />
                <SelectOption
                  value="Bard"
                  option_profile="/bard.jpeg"
                  option_name="BARD"
                />
                <SelectOption
                  value="Cleric"
                  option_profile="/cleric.jpeg"
                  option_name="CLERIC"
                />
                <SelectOption
                  value="Druid"
                  option_profile="/druid.jpeg"
                  option_name="DRUID"
                />
                <SelectOption
                  value="Fighter"
                  option_profile="/fighter.jpeg"
                  option_name="FIGHTER"
                />
                <SelectOption
                  value="Monk"
                  option_profile="/monk.jpeg"
                  option_name="MONK"
                />
                <SelectOption
                  value="Paladin"
                  option_profile="/paladin.jpeg"
                  option_name="PALADIN"
                />
                <SelectOption
                  value="Sorcerer"
                  option_profile="/sorcerer.jpeg"
                  option_name="SORCERER"
                />
                <SelectOption
                  value="Rogue"
                  option_profile="/rogue.jpeg"
                  option_name="ROGUE"
                />
                <SelectOption
                  value="Ranger"
                  option_profile="/ranger.jpeg"
                  option_name="RANGER"
                />
                <SelectOption
                  value="Warlock"
                  option_profile="/warlock.jpeg"
                  option_name="WARLOCK"
                />
                <SelectOption
                  value="Wizard"
                  option_profile="/wizard.jpeg"
                  option_name="WIZARD"
                />
              </div>
            </div>
          </div>
          <br />

          <div className="character_form_group">
            <div id="chosen_class_container">
              <div className="add_character_form_title">Chosen Class</div>
              <SelectOption value="" option_profile="/ranger.jpeg" option_name="whatever have chosen" />
            
              <label className="add_character_form" id="add_character_level">             
              Choose Starting Level:
              <select
                onChange={this.take}
                name="level"
                value={this.state.level}
                type="number"
                className="character_input skill_input"
                placeholder=""
              >
                {LEVEL_OPTIONS.map((item) => {
                  return <option key={item}>{item}</option>;
                })}
              </select>
              </label>
            </div>
            <label className="add_character_form">
              Proficiencies
              <select
                onChange={this.take}
                name="skill01"
                value={this.state.class.skill01}
                type="text"
                className="character_input skill_input"
                placeholder=""
              >    
                <option defaultValue="skill02">choose a Skill</option>        
              </select>
              <select
                onChange={this.take}
                name="skill01"
                value={this.state.class.skill01}
                type="text"
                className="character_input skill_input"
                placeholder=""
              >
                <option defaultValue="skill02">choose a Skill</option>
               
              </select>
            </label>
          </div>
          <div className="character_form_group">
            <div className="add_character_form_title">Ability Scores</div>
            <div className="add_ability_form">
              <label className="add_ability_form_option">
                STRENGTH
                <select
                  onChange={this.take}
                  name="strength"
                  value={this.state.strength}
                  type="number"
                  className="character_input skill_input"
                  placeholder=""
                >
                  {SKILL_OPTIONS.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
                </select>
              </label>
              <label className="add_ability_form_option">
                DEXTERITY
                <select
                  onChange={this.take}
                  name="dexterity"
                  value={this.state.dexterity}
                  type="number"
                  className="character_input skill_input"
                  placeholder=""
                >
                  {SKILL_OPTIONS.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
                </select>
              </label>
              <label className="add_ability_form_option">
                CONSTITUTION
                <select
                  onChange={this.take}
                  name="constitution"
                  value={this.state.constitution}
                  type="number"
                  className="character_input skill_input"
                  placeholder=""
                >
                  {SKILL_OPTIONS.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
                </select>
              </label>
              <label className="add_ability_form_option">
                INTELLIGENCE
                <select
                  onChange={this.take}
                  name="intelligence"
                  value={this.state.intelligence}
                  type="number"
                  className="character_input skill_input"
                  placeholder=""
                >
                  {SKILL_OPTIONS.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
                </select>
              </label>
              <label className="add_ability_form_option">
                WISDOM
                <select
                  onChange={this.take}
                  name="wisdom"
                  value={this.state.wisdom}
                  type="number"
                  className="character_input skill_input"
                  placeholder=""
                >
                  {SKILL_OPTIONS.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
                </select>
              </label>
              <label className="add_ability_form_option">
                CHARASMA
                <select
                  onChange={this.take}
                  name="charisma"
                  value={this.state.charisma}
                  type="number"
                  className="character_input skill_input"
                  placeholder=""
                >
                  {SKILL_OPTIONS.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
                </select>
              </label>
            </div>
            <div id="score_cal">
              <div className="add_character_form_title">Scores Calculations</div>
              <div className="score_cal_container">
              <ScoreCalc score_header="STRENGTH" total_score={this.state.strength} modifier={calBonus(this.state.strength)} base_score={this.state.strength} />
              <ScoreCalc score_header="DEXTERITY" total_score={this.state.dexterity} modifier={calBonus(this.state.dexterity)} base_score={this.state.dexterity} />
              <ScoreCalc score_header="CONSTITUTION" total_score={this.state.constitution} modifier={calBonus(this.state.constitution)} base_score={this.state.constitution} />
              </div>
              <div className="score_cal_container">
              <ScoreCalc score_header="INTELLIGENCE" total_score={this.state.intelligence} modifier={calBonus(this.state.intelligence)} base_score={this.state.intelligence} />
              <ScoreCalc score_header="WISDOM" total_score={this.state.wisdom} modifier={calBonus(this.state.wisdom)} base_score={this.state.wisdom} />
              <ScoreCalc score_header="CHARISMA" total_score={this.state.charisma} modifier={calBonus(this.state.charisma)} base_score={this.state.charisma} />
              </div>
            </div>
          </div>
          <br/>
          <div id="create_character_btn_div">
            <button
              id="create_character_btn"
              className="action_btns"
              type="button"
              onClick={this.publish}
            >
              CREATE CHARACTER
            </button>
          </div>
        </div>
        <div className="slider_right"></div>
      </div>
    );
  }
}

export default withRouter(AddCharacter);
