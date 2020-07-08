import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "../styles/logIn.css";
import "../styles/form.css";

class logIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentUserEmail: "",
    };
  }

  componentDidMount() {
    axios
      .get("user/all")
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch(function (error) {
        console.log("Fetching error", error);
      });
  }

  take = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "email":
        return this.setState({ currentUserEmail: e.target.value });

      default:
        return this.setState({
          email: "",
        });
    }
  };

  login = () => {
    const filteredUsers = this.state.users.filter((item) => {
      return item.email === this.state.currentUserEmail;
    });

    if (filteredUsers.length > 0) {
      console.log("User exist!");
      this.props.history.push("/");
    } else {
      console.log("Please Sign up!"); //Can add a pop up window here to say please sign up
      this.props.history.push("/createAccount");
    }
  };

  render() {
    return (
      <div className="user_page" id="logIn_page">
        <form className="add_user_form" id="account_form">
          <div className="form_block_user">
            <div className="form_content">
            <div className="add_form_group">
              <label className="add_form_label"> Email </label>
              <div className="textInput">
                <input
                  onChange={this.take}
                  name="email"
                  type="email"
                  className="add_form_control user_input"
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <br />

            <div className="add_form_group">
              <label className="add_form_label"> Password </label>
              <div className="textInput">
                <input
                  onChange={this.take}
                  name="password"
                  type="password"
                  className="add_form_control user_input"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <br />

            <div className="add_form_group" id="Log_In" >
              <button className="user_action_btn" type="button" onClick={this.login}>
                LOG IN
              </button>
            </div>

            <div className="add_form_group" id="signUp-block">
              <p>NEW USER?</p>
              <Link to="/createAccount">
                <a type="button" onClick={this.publish}>
                  SIGN UP
                </a>
              </Link>
            </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(logIn);
