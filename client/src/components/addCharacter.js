import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { CLASS_PROFICIENCY, LEVEL_OPTIONS } from "../config";
import { calBonus } from "../utils/utils";
import ProficiencySelect from "../components/proficiencySelect";

import "../styles/addCharacter.css";
import "../styles/form.css";
import SelectOption from "./selectOption";
import ScoreCalc from "./scoreCalc";
import AbilitySelect from "./abilitySelect";

class AddCharacter extends React.Component {
  constructor(props) {
    super(props);

    this.take = this.take.bind(this);
    this.publish = this.publish.bind(this);
    this.handleRaceClick = this.handleRaceClick.bind(this);
    this.handleClassClick = this.handleClassClick.bind(this);

    this.state = {
      name: "",
      race: "",
      class: {
        name: "class",
        skill01: "",
        skill02: "",
        skill03: "",
        skill04: "",
      },
      level: "",
      strength: "--",
      dexterity: "--",
      constitution: "--",
      intelligence: "--",
      wisdom: "--",
      charisma: "--",
      status: "--",
      message: "--",
      abilityOptions: ["--","8","10","12","13","14","15"]
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
          class: { name: this.state.class.name, skill01: e.target.value },
        });
      case "skill02":
        return this.setState({
          class: {
            name: this.state.class.name,
            skill01: this.state.class.skill01,
            skill02: e.target.value,
          },
        });
      case "skill03":
        return this.setState({
          class: {
            name: this.state.class.name,
            skill01: this.state.class.skill01,
            skill02: this.state.class.skill02,
            skill03: e.target.value,
          },
        });
      case "skill04":
        return this.setState({
          class: {
            name: this.state.class.name,
            skill01: this.state.class.skill01,
            skill02: this.state.class.skill02,
            skill03: this.state.class.skill03,
            skill04: e.target.value,
          },
        });
      case "level":
        return this.setState({ level: e.target.value });
      case "strength":
        return this.setState({ 
          strength: e.target.value,
          // abilityOptions: this.state.abilityOptions.filter(ability => ability !== e.target.value)
          });         
      case "dexterity":
        return this.setState({ dexterity: e.target.value ,
        });
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
            name: "class",
            skill01: "",
            skill02: "",
            skill03: "",
            skill04: "",
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

  handleRaceClick = (option) => {
    this.setState({ race: option });
    console.log("option", option);
  };

  handleClassClick = (option) => {
    this.setState({ class: { name: option } });
    console.log("option", option);
  };

  render() {
    return (
      <div id="add_character">
        <div className="slider_container">
        <div className="slider" id="slider_left">
          <img src="/arrow_left_blue.png" />
        </div>
        </div>
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
              <div className="add_character_form_option">
                <SelectOption
                  option_profile="/human.jpg"
                  option_name="Human"
                  handleClick={this.handleRaceClick}
                />
                <SelectOption
                  handleClick={this.handleClick}
                  option_profile="/elf.jpg"
                  option_name="Elf"
                />
                <SelectOption
                  handleClick={this.handleRaceClick}
                  option_profile="/dwarf.jpeg"
                  option_name="Dwarf"
                />
                <SelectOption
                  handleClick={this.handleRaceClick}
                  option_profile="/halfling.jpg"
                  option_name="Halfling"
                />
                <SelectOption
                  handleClick={this.handleRaceClick}
                  option_profile="/half-orc.jpeg"
                  option_name="Half-Orc"
                />
                <SelectOption
                  handleClick={this.handleRaceClick}
                  option_profile="/half-elf.jpg"
                  option_name="Half-Elf"
                />
                <SelectOption
                  handleClick={this.handleRaceClick}
                  option_profile="/gnome.jpg"
                  option_name="Gnome"
                />
                <SelectOption
                  handleClick={this.handleRaceClick}
                  option_profile="/dragonborn.jpg"
                  option_name="Dragonborn"
                />
                <SelectOption
                  handleClick={this.handleRaceClick}
                  option_profile="/tiefling.jpg"
                  option_name="Tiefling"
                />
              </div>
            </div>
          </div>

          <div className="character_form_group">
            <div className="add_character_form">
              <div className="add_character_form_title">Choose a Class</div>
              <div className="add_character_form_option">
                <SelectOption
                  handleClick={this.handleClassClick}
                  option_profile="/barbarian.png"
                  option_name="Barbarian"
                />
                <SelectOption
                  handleClick={this.handleClassClick}
                  option_profile="/bard.png"
                  option_name="Bard"
                />
                <SelectOption
                  handleClick={this.handleClassClick}
                  option_profile="/cleric.png"
                  option_name="Cleric"
                />
                <SelectOption
                  handleClick={this.handleClassClick}
                  option_profile="/druid.png"
                  option_name="Druid"
                />
                <SelectOption
                  handleClick={this.handleClassClick}
                  option_profile="/fighter.png"
                  option_name="Fighter"
                />
                <SelectOption
                  value="Monk"
                  option_profile="/monk.jpg"
                  option_name="Monk"
                />
                <SelectOption
                  handleClick={this.handleClassClick}
                  option_profile="/paladin.png"
                  option_name="Paladin"
                />
                <SelectOption
                  handleClick={this.handleClassClick}
                  option_profile="/sorcerer.png"
                  option_name="Sorcerer"
                />
                <SelectOption
                  handleClick={this.handleClassClick}
                  option_profile="/rogue.png"
                  option_name="Rogue"
                />
                <SelectOption
                  handleClick={this.handleClassClick}
                  option_profile="/ranger.png"
                  option_name="Ranger"
                />
                <SelectOption
                  handleClick={this.handleClassClick}
                  option_profile="/warlock.png"
                  option_name="Warlock"
                />
                <SelectOption
                  handleClick={this.handleClassClick}
                  option_profile="/wizard.png"
                  option_name="Wizard"
                />
              </div>
            </div>
          </div>

          <div className="character_form_group">
            <div id="proficiency_container">
              <div id="chosen_class_container">
                <div id="chosen_class_div">
                  <div className="add_character_form_title">Chosen Class</div>
                  <div className="character_input">
                    <div className="option_img">
                      <img src="/barbarian.png" alt="" />
                    </div>
                    <div className="character_input_select">
                      {this.state.class.name}
                    </div>
                  </div>
                </div>
                <div id="add_character_level">
                  <label>
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
              </div>
              <div className="proficiency_container">
                <p>Proficiencies</p>
                {CLASS_PROFICIENCY[`${this.state.class.name}`].skill_num.map(
                  (item) => {
                    return (
                      <div key={item}>
                        {
                          <ProficiencySelect
                            name={item}
                            onChange={this.take}
                            class_name={this.state.class.name}                       
                          />
                        }
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="character_form_group">
            <div className="add_character_form_title">Ability Scores</div>
            <div className="add_ability_form">
              <AbilitySelect 
                abilitySelectTitle="STRENGTH"
                name="strength"
                onChange={this.take}
                value={this.state.strength}
                abilitySelectList=
                  {this.state.abilityOptions.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
              
              />
             <AbilitySelect 
                abilitySelectTitle="DEXTERITY"
                name="dexterity"
                onChange={this.take}
                value={this.state.dexterity}
                abilitySelectList=
                  {this.state.abilityOptions.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
              
              />

              <AbilitySelect 
                abilitySelectTitle="CONSTITUTION"
                name="constitution"
                onChange={this.take}
                value={this.state.constitution}
                abilitySelectList=
                  {this.state.abilityOptions.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
              
              />
              <AbilitySelect 
                abilitySelectTitle="INTELLIGENCE"
                name="intelligence"
                onChange={this.take}
                value={this.state.intelligence}
                abilitySelectList=
                  {this.state.abilityOptions.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
              
              />
              <AbilitySelect 
                abilitySelectTitle="WISDOM"
                name="wisdom"
                onChange={this.take}
                value={this.state.wisdom}
                abilitySelectList=
                  {this.state.abilityOptions.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
              
              />
             <AbilitySelect 
                abilitySelectTitle="CHARISMA"
                name="charisma"
                onChange={this.take}
                value={this.state.charisma}
                abilitySelectList=
                  {this.state.abilityOptions.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
              
              />
            </div>
            <div id="score_cal">
              <div className="add_character_form_title">
                Scores Calculations
              </div>
              <div className="score_cal_container">
                <ScoreCalc
                  score_header="STRENGTH"
                  total_score={this.state.strength}
                  modifier={calBonus(this.state.strength)}
                  base_score={this.state.strength}
                />
                <ScoreCalc
                  score_header="DEXTERITY"
                  total_score={this.state.dexterity}
                  modifier={calBonus(this.state.dexterity)}
                  base_score={this.state.dexterity}
                />
                <ScoreCalc
                  score_header="CONSTITUTION"
                  total_score={this.state.constitution}
                  modifier={calBonus(this.state.constitution)}
                  base_score={this.state.constitution}
                />
              </div>
              <div className="score_cal_container">
                <ScoreCalc
                  score_header="INTELLIGENCE"
                  total_score={this.state.intelligence}
                  modifier={calBonus(this.state.intelligence)}
                  base_score={this.state.intelligence}
                />
                <ScoreCalc
                  score_header="WISDOM"
                  total_score={this.state.wisdom}
                  modifier={calBonus(this.state.wisdom)}
                  base_score={this.state.wisdom}
                />
                <ScoreCalc
                  score_header="CHARISMA"
                  total_score={this.state.charisma}
                  modifier={calBonus(this.state.charisma)}
                  base_score={this.state.charisma}
                />
              </div>
            </div>
          </div>
          <br />
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
        <div className="slider_container">
          <div className="slider" id="slider_right">
          <img src="/arrow_right_blue.png" />
          </div>
          </div>
      </div>
    );
  }
}

export default withRouter(AddCharacter);
