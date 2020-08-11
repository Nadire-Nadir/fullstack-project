import React from "react";
import "../styles/selectOption.css";
import PopUp from "../components/popUps";

class SelectOption extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.showPopup = this.showPopup.bind(this);

    this.state = {
      showPopup: false,
    }
  }

  showPopup = () => {
    this.setState(
      { showPopup: true }
    );
  };

  closePopup = () => {
    this.setState(
      { showPopup: false }
    );
  };
  
  handleClick = () => {
    this.props.handleClick(this.myRef.current.textContent);
    this.setState({showPopup: false})
    console.log("clicked", this.myRef);
  };

  render() {
    return (
      <div className="character_input_container">
      <div className="character_input">
        <div className="option_img">
          <img src={this.props.option_profile} alt="" />
        </div>
        <div
          ref={this.myRef}
          className="character_input_select"
          onClick={() => this.showPopup()}  
        >
          {this.props.option_name}
        </div>
      </div>
      {this.state.showPopup && (
        <PopUp 
          popup_title={this.props.popup_title}
          popup_info={this.props.popup_info}
          closePopup={this.closePopup}
          confirm={this.handleClick}
          option_name={this.props.option_name}
          popup_info_P01={this.props.popup_info_P01}
        />
      )}
      </div>
    );
  }
}
export default SelectOption;
