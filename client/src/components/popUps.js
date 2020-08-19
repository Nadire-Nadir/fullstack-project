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
          <div>
            <p>A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs as he charges toward the frost giant who dared poach his people’s elk herd.</p>
            <p>A half-orc snarls at the latest challenger to her authority over their savage tribe, ready to break his neck with her bare hands as she did to the last six rivals.</p>
            <p>Frothing at the mouth, a dwarf slams his helmet into the face of his drow foe, then turns to drive his armored elbow into the gut of another.</p>
            <p>These barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea.</p>
            <p>For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.</p>
          </div>
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
