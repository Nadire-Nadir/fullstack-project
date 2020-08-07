import React from "react";

const AddName = (props) => (
    <div className="character_form_group_vh">
            <div id="create_cha_name">
              <div className="character_portrait">
                <img src="/character_profile1.jpeg" alt="" />
              </div>
              <div className="cha_name_form">
                <div>Character Name:</div>
                <label className="add_character_form">
                  <input
                    onChange={props.onChange}
                    name="name"
                    value={props.value}
                    type="text"
                    className="character_name_input basic_input"
                    placeholder="Inter name"
                  ></input>
                </label>
              </div>
            </div>
          </div>
)

export default AddName;