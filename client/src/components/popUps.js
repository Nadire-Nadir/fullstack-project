import React from "react";
import "../styles/popUp.css";

const PopUp = (props) => (
  <div className="popup b_g border select_popup">
    <div className="content popup_content">
      <div className="popup_header">
        <div className="popup_title select_popup_title">{props.popup_title}</div>
      </div>
      <div className="popup_info select_popup_info">
        <div className="popup_content_part01">
          <div>{props.option_name}</div>
          <div>{props.popup_info_P01}</div>
        </div>
        <div className="popup_content_part02">
          <div></div>
          <div>{props.popup_info_P02}</div>
        </div>
      </div>
      <div className="select_popup_btn_container">
        <button
          onClick={props.confirm}
          className="action_btns popup_btn yes_btn select_popup_btn"
        >
          CONFIRM
        </button>
        <button
          onClick={props.closePopup}
          className="action_btns popup_btn no_btn select_popup_btn"
        >
          CANCEL
        </button>
      </div>
    </div>
  </div>
);

export default PopUp;
