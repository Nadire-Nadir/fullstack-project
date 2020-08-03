import React from "react";
import "../styles/selectOption.css";

class SelectOption extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  handleClick = () => {
    this.props.handleClick(this.myRef.current.textContent);
    console.log("clicked", this.myRef);
  };

  render() {
    return (
      <div className="character_input">
        <div className="option_img">
          <img src={this.props.option_profile} alt="" />
        </div>
        <div
          ref={this.myRef}
          onClick={this.handleClick}
          className="character_input_select"
        >
          {this.props.option_name}
        </div>
      </div>
    );
  }
}
export default SelectOption;
