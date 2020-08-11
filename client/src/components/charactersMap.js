import React from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import { Link } from "react-router-dom";
import "../styles/home.css";
import "../styles/popUp.css";

class CharactersMap extends React.Component {
  constructor(props) {
    super(props);

    this.showPopup = this.showPopup.bind(this);

    this.state = {
      characters: [],
      loading: true,
      status: "",
      showPopup: false,
      selectedCardId: "",
    };
  }

  componentDidMount() {
    axios
      .get("/all-characters")
      .then((res) => {
        this.setState({
          characters: res.data,
          loading: false,
        });
      })
      .catch(function (error) {
        console.log("Fetching error", error);
      });
  }

  delete = (id) => {
    console.log("id", id);
    axios.delete(`/character/${id}`, {}).then((res) => {
      this.setState({
        status: "Deleted!",
      });
      console.log("Deleted!");
    });
    let newCharacters = this.state.characters.filter(
      (character) => character.id !== id
    );
    this.setState({ characters: newCharacters, showPopup: false });
  };

  showPopup = (id) => {
    this.setState({ showPopup: true, selectedCardId: id });
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  render() {
    const { characters, loading } = this.state;
    if (loading) {
      return (
        <div id="home">
          <Spinner />
        </div>
      );
    }
    return (
      <div id="character_card_block">
        {characters.map((item) => {
          return (
            <div className="character_card" key={item._id}>
              <div className="character_card_content">
                <div className="myCharacters">
                  <div className="character_profile">
                    <div className="chracter_profile_pic"></div>
                    <div className="character_name">{item.name}</div>
                  </div>

                  <ul className="character_detail">
                    <li className="character_info">
                      <p>{item.race}</p>
                    </li>
                    <li className="character_info">
                      <p>{item.class.name}</p>
                    </li>

                    <li className="character_info">
                      <p>Level {item.level}</p>
                    </li>
                  </ul>
                </div>

                <div className="character_action_block">
                  <div className="action_btns">
                    <Link to={`/characterSheet/${item._id}`}>
                      <button
                        id="view_character_btn"
                        className="characterCard_action_btn action_btns"
                        type="button"
                      >
                        VIEW
                      </button>
                    </Link>
                  </div>

                  <div className="action_btns">
                    <button
                      id="edit_character_btns"
                      className="characterCard_action_btn action_btns"
                      type="button"
                    >
                      EDIT
                    </button>
                  </div>

                  <div className="action_btns">
                    <button
                      id="delete_character_btn"
                      className="characterCard_action_btn action_btns"
                      type="button"
                      onClick={() => this.showPopup(item._id)}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {this.state.showPopup && (
          <div className="popup b_g border delete_popup">
            <div className="content">
              <div className="popup_header">
                <div className="popup_title delete_popup_title">Delete Character</div>
              </div>
              <div className="popup_info delete_popup_info">
                Are you sure you want to delete this Character?
              </div>
              <div>
                <button
                  onClick={() => this.delete(this.state.selectedCardId)}
                  className="action_btns popup_btn yes_btn delete_popup_btn"
                >
                  YES
                </button>
                <button
                  onClick={this.closePopup}
                  className="action_btns popup_btn no_btn delete_popup_btn"
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CharactersMap;
