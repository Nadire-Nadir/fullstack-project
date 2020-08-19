import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import AddName from "./addName";
import AddRace from "./addRace";
import AddClass from "./addClass";
import AddAbility from "./addAbility";
import AddProficiency from "./addProficiency";
import AddAction from "./addAction";
import "../styles/addCharacter.css";
import "../styles/form.css";

class AddCharacter extends React.Component {
  constructor(props) {
    super(props);

    this.take = this.take.bind(this);
    this.publish = this.publish.bind(this);
    this.handleRaceClick = this.handleRaceClick.bind(this);
    this.handleClassClick = this.handleClassClick.bind(this);

    this.state = {
      id: "",
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
      abilityOptions: ["--", "8", "10", "12", "13", "14", "15"],
      activeView: 1
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

  slideRight = () => {
    this.setState(
      { activeView: this.state.activeView + 1}
    );
  };

  slideLeft = () => {
    this.setState(
      { activeView: this.state.activeView - 1 }
    );
  };

  render() {
    return (
      <div id="add_character">
        <div className="slider_container">
          <div className="slider" id="slider_left">
            <img src="/arrow_left_blue.png" alt="" onClick={ this.slideLeft } />
          </div>
        </div>
        <div id="add_character_content">
          {this.state.activeView === 1 && (
            <AddName onChange={this.take} value={this.state.name} />
          )}

          {this.state.activeView === 2 && 
            <AddRace 
            handleRaceClick={this.handleRaceClick} 
            />}

          {this.state.activeView === 3 && (
            <AddClass
              handleClassClick={this.handleClassClick}
              chosen_class={this.state.class.name}
              onChange={this.take}
              value={this.state.level}
              class_name={this.state.class.name}
            />
          )}

          {this.state.activeView === 4 && (
            <AddProficiency 
              class_name={this.state.class.name}
              onChange={this.take}
              chosen_class={this.state.class.name}
            />
          )}

          {this.state.activeView === 5 && (
            <AddAbility
              onChange={this.take}
              strValue={this.state.strength}
              dexValue={this.state.dexterity}
              conValue={this.state.constitution}
              intValue={this.state.intelligence}
              wisValue={this.state.wisdom}
              chaValue={this.state.charisma}
              abilitySelectList={this.state.abilityOptions.map((item) => {
                return <option key={item}>{item}</option>;
              })}
              
            />
          )}

          {this.state.activeView === 6 && (
            <AddAction 
              onClick={this.publish}
            
            />
          )}
        </div>

        <div className="slider_container">
          <div className="slider" id="slider_right">
            <img src="/arrow_right_blue.png" alt="" onClick={ this.slideRight}/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddCharacter);
