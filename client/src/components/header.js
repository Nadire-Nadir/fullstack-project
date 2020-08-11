import React from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";


export const Header = (props) => (
  <div id="page">
  <div id="logo_header">
      <div id="app_logo">LOGO</div>
      <div id="sign_out_btn">
          <Link to="/signIn">
            <button className="action_btns" style={props.homeSignOut}>Sign out</button>
          </Link>
        </div>
      </div>
    <div className="page_header">
      <div className="header_title">
        <h1 style={props.sheethead}>{props.pagetitle}</h1>
      </div>
      <div className="header_btn_div">
              <Link to={`/${props.directto}`}>
                <button className="action_btns header_btn" type="button">
                  {props.btnlabel}
                </button>
              </Link>
      </div>
    </div>
    </div>
);

export default Header;