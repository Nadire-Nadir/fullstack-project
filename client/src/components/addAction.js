import React from "react";

const AddAction = (props) => (
  <div className="character_form_group_vh">
    <p>
      Once you have completed creating your character, you can view your
      statistics on the digital character sheet or export it for printing.
    </p>
    <div className="create_character_btn_div">
      <button
        className="create_character_btn action_btns"
        type="button"
        onClick={props.onClick}
      >
        CREATE CHARACTER
      </button>
    </div>
  </div>
);

export default AddAction;
