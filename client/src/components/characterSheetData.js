import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { mapSpeed, calProSaving } from "../utils/utils";
import { calBonus } from "../utils/utils";
import { calProficiency } from "../utils/utils";
import { calAC } from "../utils/utils";
import { SAVING_THROWS, CLASS_PROFICIENCY, RACE_LANGUAGE } from "../config";
import Spinner from "../components/spinner";
import SkillList from "../components/skillList";
import AttacksList from "../components/attacksList";
import SavingThrows from "./savingThrows";
import Ability from "./ability";
import "../styles/characterSheet.css";

class CharacterSheetData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {},
      id: "",
      loading: true,
    };
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    axios
      .get(`/character/${params.id}`)
      .then((res) => {
        this.setState({
          character: res.data,
          loading: false,
        });
      })
      .catch(function (error) {
        console.log("Fetching error", error);
      });
  }

  render() {
    const { character, loading } = this.state;
    if (loading) {
      return (
        <div id="character_sheet">
          <Spinner />
        </div>
      );
    }
    const checkedSaving = SAVING_THROWS[character.class.name];
    const pickedSkills = [
      character.class.skill01,
      character.class.skill02,
      character.class.skill03,
      character.class.skill04,
    ];

    return (
      <div id="charactersheet_detail">
        <div id="frofile_block">
          <div id="basic_info_block_content">
            <div id="cha_pic_block"></div>
            <div id="basic_info_block">
              <div id="basic_info_block_00">
                <p>{character.name}</p>
                <p>
                  {character.race} {character.class.name}
                </p>
                <p>LEVEL {character.level}</p>
              </div>
              <div id="basic_info_block_01">
                <div className="basic_info_block_btn">
                  <button className="action_btns">EDIT</button>
                </div>
                <div className="basic_info_block_btn">
                  <button className="action_btns">SHARE</button>
                </div>
                <div className="basic_info_block_btn">
                  <button className="action_btns">REST</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="cha_core_info">
          <div className="block" id="block_01">
            
              <div id="core_skill_block">
                <Ability
                  BOX_TITLE="STRENGTH"
                  SKILL_BONUS={calBonus(character.strength)}
                  SKILL_VALUE={character.strength}
                />
                <Ability
                  BOX_TITLE="DEXTERITY"
                  SKILL_BONUS={calBonus(character.dexterity)}
                  SKILL_VALUE={character.dexterity}
                />
                <Ability
                  BOX_TITLE="CONSTITUTION"
                  SKILL_BONUS={calBonus(character.constitution)}
                  SKILL_VALUE={character.constitution}
                />
                <Ability
                  BOX_TITLE="INTELLIGENCE"
                  SKILL_BONUS={calBonus(character.intelligence)}
                  SKILL_VALUE={character.intelligence}
                />
                <Ability
                  BOX_TITLE="WISDOM"
                  SKILL_BONUS={calBonus(character.wisdom)}
                  SKILL_VALUE={character.wisdom}
                />
                <Ability
                  BOX_TITLE="CHARISMA"
                  SKILL_BONUS={calBonus(character.charisma)}
                  SKILL_VALUE={character.charisma}
                />
              </div>

              <div id="skill_2">
                <div className="skill_2_col b_g" id="inspiration_container">
                  <div className="inspiration_container_title">
                    <p>INSPIRATION</p>
                  </div>
                  <label className="value_box border b_g" id="inspiration">
                    <input type="checkbox" />
                    <span id="checkmark"></span>
                  </label>
                </div>
                <div className="skill_2_col b_g" id="pro_bonus_container">
                  <div className="inspiration_container_title">
                    <p>PROFICIENCY BONUS</p>
                  </div>
                  <div className="value_box border b_g">
                    <div id="pro_bonus">
                      + {calProficiency(character.level)}
                    </div>
                  </div>
                </div>
                <div className="b_g" id="saving_throws_container">
                  <div className="content" id="saving_throws_content">
                    <div className="saving_throws">
                      <div className="saving_throws_row">
                        <SavingThrows
                          className="saving_throws_item_1"
                          saving_name="STR"
                          saving={calBonus(character.strength)}
                          isChecked={checkedSaving.includes("STR")}
                          proficiency={calProficiency(character.level)}
                          proSaving={calProSaving(character.strength)}
                        />
                        <SavingThrows
                          saving_name="INT"
                          saving={calBonus(character.intelligence)}
                          isChecked={checkedSaving.includes("INT")}
                          proficiency={calProficiency(character.level)}
                          proSaving={calProSaving(character.intelligence)}
                        />
                      </div>
                      <div className="saving_throws_row">
                        <SavingThrows
                          className="saving_throws_item_1"
                          saving_name="DEX"
                          saving={calBonus(character.dexterity)}
                          isChecked={checkedSaving.includes("DEX")}
                          proficiency={calProficiency(character.level)}
                          proSaving={calProSaving(character.dexterity)}
                        />
                        <SavingThrows
                          saving_name="WIS"
                          saving={calBonus(character.wisdom)}
                          isChecked={checkedSaving.includes("WIS")}
                          proficiency={calProficiency(character.level)}
                          proSaving={calProSaving(character.wisdom)}
                        />
                      </div>
                      <div className="saving_throws_row">
                        <SavingThrows
                          className="saving_throws_item_1"
                          saving_name="CON"
                          saving={calBonus(character.constitution)}
                          isChecked={checkedSaving.includes("CON")}
                          proficiency={calProficiency(character.level)}
                          proSaving={calProSaving(character.constitution)}
                        />
                        <SavingThrows
                          saving_name="CHA"
                          saving={calBonus(character.charisma)}
                          isChecked={checkedSaving.includes("CHA")}
                          proficiency={calProficiency(character.level)}
                          proSaving={calProSaving(character.charisma)}
                        />
                      </div>
                    </div>
                    <div className="box_title">SAVING THROWS</div>
                  </div>
                </div>
                <div className="b_g" id="skill_details_container">
                  <div className="content" id="skill_details_content">
                    <div className="skill_ul">
                      <div className="skill_list" id="skill_list_title">
                        <div className="li_item">PROF</div>
                        <div className="li_item">MOD</div>
                        <div className="li_item_skill">SKILL</div>
                        <div className="li_item">BONUS</div>
                      </div>
                      <SkillList
                        PROF=""
                        MOD="DEX"
                        SKILL="Acrobatics"
                        BONUS={calBonus(character.dexterity)}
                        skillBonus={calProSaving(character.dexterity)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Acrobatics")}
                      />
                      <SkillList
                        PROF=""
                        MOD="WIS"
                        SKILL="Animal Handling"
                        BONUS={calBonus(character.wisdom)}
                        skillBonus={calProSaving(character.wisdom)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Animal Handling")}
                      />
                      <SkillList
                        PROF=""
                        MOD="INT"
                        SKILL="Arcana"
                        BONUS={calBonus(character.intelligence)}
                        skillBonus={calProSaving(character.intelligence)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Arcana")}
                      />
                      <SkillList
                        PROF=""
                        MOD="STR"
                        SKILL="Athletics"
                        BONUS={calBonus(character.strength)}
                        skillBonus={calProSaving(character.strength)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Athletics")}
                      />
                      <SkillList
                        PROF=""
                        MOD="CHA"
                        SKILL="Deception"
                        BONUS={calBonus(character.charisma)}
                        skillBonus={calProSaving(character.charisma)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Deception")}
                      />
                      <SkillList
                        PROF=""
                        MOD="INT"
                        SKILL="History"
                        BONUS={calBonus(character.intelligence)}
                        skillBonus={calProSaving(character.intelligence)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("History")}
                      />
                      <SkillList
                        PROF=""
                        MOD="WIS"
                        SKILL="Insight"
                        BONUS={calBonus(character.wisdom)}
                        skillBonus={calProSaving(character.wisdom)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Insight")}
                      />
                      <SkillList
                        PROF=""
                        MOD="CHA"
                        SKILL="Intimidation"
                        BONUS={calBonus(character.charisma)}
                        skillBonus={calProSaving(character.charisma)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Intimidation")}
                      />
                      <SkillList
                        PROF=""
                        MOD="INT"
                        SKILL="Investigation"
                        BONUS={calBonus(character.intelligence)}
                        skillBonus={calProSaving(character.intelligence)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Investigation")}
                      />
                      <SkillList
                        PROF=""
                        MOD="WIS"
                        SKILL="Medicine"
                        BONUS={calBonus(character.wisdom)}
                        skillBonus={calProSaving(character.wisdom)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Medicine")}
                      />
                      <SkillList
                        PROF=""
                        MOD="INT"
                        SKILL="Nature"
                        BONUS={calBonus(character.intelligence)}
                        skillBonus={calProSaving(character.intelligence)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Nature")}
                      />
                      <SkillList
                        PROF=""
                        MOD="WIS"
                        SKILL="Perception"
                        BONUS={calBonus(character.wisdom)}
                        skillBonus={calProSaving(character.wisdom)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Perception")}
                      />
                      <SkillList
                        PROF=""
                        MOD="CHA"
                        SKILL="Performance"
                        BONUS={calBonus(character.charisma)}
                        skillBonus={calProSaving(character.charisma)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Performance")}
                      />
                      <SkillList
                        PROF=""
                        MOD="CHA"
                        SKILL="Persuasion"
                        BONUS={calBonus(character.charisma)}
                        skillBonus={calProSaving(character.charisma)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Persuasion")}
                      />
                      <SkillList
                        PROF=""
                        MOD="INT"
                        SKILL="Religion"
                        BONUS={calBonus(character.intelligence)}
                        skillBonus={calProSaving(character.intelligence)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Religion")}
                      />
                      <SkillList
                        PROF=""
                        MOD="DEX"
                        SKILL="Sleight of Hand"
                        BONUS={calBonus(character.dexterity)}
                        skillBonus={calProSaving(character.dexterity)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Sleight of Hand")}
                      />
                      <SkillList
                        PROF=""
                        MOD="DEX"
                        SKILL="Stealth"
                        BONUS={calBonus(character.dexterity)}
                        skillBonus={calProSaving(character.dexterity)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Stealth")}
                      />
                      <SkillList
                        PROF=""
                        MOD="WIS"
                        SKILL="Survival"
                        BONUS={calBonus(character.wisdom)}
                        skillBonus={calProSaving(character.wisdom)}
                        proficiency={calProficiency(character.level)}
                        isChecked={pickedSkills.includes("Survival")}
                      />
                      <div className="box_title">SKILLS</div>
                    </div>
                  </div>
                </div>
              </div>          
          </div>

          <div className="block" id="block_02">
            <div id="hit_block">
              <div className="hit_block0" id="quick_info">
                <div className="quick_info0 b_g">
                  <div className="core_skill_box_title ">ARMOR</div>
                  <div className="core_skill_dice">
                    {calAC(character.dexterity)}
                  </div>
                  <div className="core_skill_box_title">CLASS</div>
                </div>
                <div className="quick_info0 b_g">
                  <div className="core_skill_dice border b_g">+0</div>
                  <div className="core_skill_box_title" id="initiative_title">
                    INITIATIVE
                  </div>
                </div>
                <div className="quick_info0 b_g">
                  <div className="core_skill_box_title">WALKING</div>
                  <div className="core_skill_dice">
                    {mapSpeed(character.race)}
                    <span id="speed_unit">ft.</span>
                  </div>
                  <div className="core_skill_box_title">SPEED</div>
                </div>
              </div>
              <div id="cur_points_box" className="b_g">
                <div className="content">
                  <div id="hiit_point_max_div">
                    <div id="hiit_point_max">
                      HIIT POINT MAXIMUM <span className="points_num">81</span>
                    </div>
                  </div>
                  <div className="points">81</div>
                  <div className="box_title">CURRENT HIIT POINTS</div>
                </div>
              </div>
              <div className="hit_block0 b_g" id="tem_points">
                <div className="content">
                  <div className="points">0</div>
                  <div className="box_title">TEMPORARY HIIT POINTS</div>
                </div>
              </div>
              <div className="hit_block0" id="dice">
                <div className="dice_block b_g" id="hiit_dice">
                  <div className="content">
                    <div id="hiit_point_max">
                      TOTAL<span className="points_num">8</span>
                    </div>
                    <div id="hiit_dice_points">4</div>
                    <div className="box_title">HIIT DICE</div>
                  </div>
                </div>
                <div className="dice_block b_g">
                  <div className="content">
                    <div></div>
                    <div className="box_title">DEATH SAVES</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="atk_spl" className="b_g">
              <div className="content">
                <div className="skill_ul">
                  <div className="skill_list" id="skill_list_title">
                    <div className="li_item">NAME</div>
                    <div className="li_item_atk atk_li_item_atk">ATK</div>
                    <div className="li_item">DAMAGE/TYPE</div>
                  </div>
                  <AttacksList
                        NAME="Scourge"
                        ATK="+5"
                        DAMAGE="1D6+2 Piercing"
                  />
                  <AttacksList
                        NAME="Javelin"
                        ATK="+5"
                        DAMAGE="1D6+2 Piercing"
                  />
                  <AttacksList
                        NAME="Wooden Stake"
                        ATK="+5"
                        DAMAGE="1D4+2"
                  />
                  <AttacksList
                        NAME="Cure Wounds"
                        ATK="-"
                        DAMAGE="1D8 Healing"
                  />
                  <AttacksList
                        NAME="Hunter's Mark"
                        ATK="-"
                        DAMAGE="1D6"
                  />
                  <AttacksList
                        NAME="Heavy Crossbow"
                        ATK="+3"
                        DAMAGE="1D10 Piercing"
                  />
                  <AttacksList
                        NAME="Branding Smite"
                        ATK="-"
                        DAMAGE="2D6+2 Radiant"
                  />
                  <AttacksList
                        NAME="Dagger"
                        ATK="+2"
                        DAMAGE="1D4+2 Piercing"
                  />
                  <AttacksList
                        NAME="Mace of Terror"
                        ATK="+5"
                        DAMAGE="1D6+2 Bludgeon"
                  />
                </div>
                <div className="box_title">ATTACKS & SPELLCASTING</div>
              </div>
            </div>
            <div className="b_g">
              <div className="content">
                <div id="pro_lan_block">
                  <div className="pro_lan_row">
                    <div className="skills_heading">ARMOR</div>
                    <div className="pro_lan_detail">
                      {CLASS_PROFICIENCY[character.class.name].armor.map(
                        (item) => {
                          return <ul key={item}><li>{item}.</li></ul>;
                        }
                      )}
                    </div>
                  </div>
                  <div className="pro_lan_row">
                    <div className="skills_heading">WEAPONS</div>
                    <div className="pro_lan_detail">
                      {CLASS_PROFICIENCY[character.class.name].weapon.map(
                        (item) => {
                          return <ul key={item}><li>{item}.</li></ul>;
                        }
                      )}
                    </div>
                  </div>
                  <div className="pro_lan_row">
                    <div className="skills_heading">LANGUAGES</div>
                    <div className="pro_lan_detail">
                      {RACE_LANGUAGE[character.race].map((item) => {
                        return <ul key={item}><li>{item}.</li></ul>;
                      })}
                    </div>
                  </div>
                </div>
                <div className="box_title">PROFICIENCIES & LANGUAGE</div>
              </div>
               
            </div>
          </div>

          <div className="block" id="block_03">
            <div className="block_03_00 b_g ">
              <div className="content">
                <ul>
                  <li className="content_item">Enjoys finding the pattern in stories, only to try and think outside the box.</li>
                  <li className="content_item">Introvert, and unfair to take on leadership roles.</li>
                  <li className="content_item">Loves collaboration.</li>
                </ul>
                <div className="box_title">PERSONALITY TRAITS</div>
              </div>
            </div>
            <div className="block_03_00 b_g">
              <div className="content">
                <ul>
                  <li className="content_item">Gravitates towards all things horror.</li>
                  <li className="content_item">Placing symbolism and details in writing.</li>
                  <li className="content_item">Being accurate and mindfull of context</li>
                </ul>
                <div className="box_title">IDEALS</div>
              </div>
            </div>
            <div className="block_03_00 b_g">
              <div className="content">
                <ul>
                <li className="content_item">Knowledge on witchoraft, cryptids.</li>
                <li className="content_item">Lifeling learner, enjoys research.</li>
                <li className="content_item">Believes there is story in everythings</li>
                </ul>
                <div className="box_title">BONDS</div>
              </div>
            </div>
            <div className="block_03_00 b_g">
              <div className="content">
                <ul>
                <li className="content_item">Listens to fiction podcasts obsessively.</li>
                <li className="content_item">Can get caught up in work and not be aware of surroundings.</li>
                </ul>
                <div className="box_title">FLAWS</div>
              </div>
            </div>
            <div className="block_03_01 b_g">
              <div className="content">
                <div >
                  <div className="feature_traits_title">CLASS FEATURES <p>{character.class.name} Features</p></div>
                  <div className="feature_traits_title"></div>
                  <div className="content_item"><p>Hiit Points:</p>PHB.pg.77</div>
                  <div className="content_item"><p>Proficiencies:</p>{pickedSkills}</div>
                </div>
                <div>
                  <div className="feature_traits_title">RACIAL TRAITS</div>
                  <div className="content_item"><p>Darkvision:</p>You can see in darkness (shades of gray) up to 60 ft.</div>
                  <div className="content_item"><p>Keen Senses:</p>You have proficiency in the Perception skill</div>
                  <div className="content_item"><p>Key Ancestry:</p>You have advantage on saves against being charmed, and magic can't put you to sleep.</div>
                  <div className="content_item"><p>Trance:</p>You don't need to sleep, but meditate semiconsciously for 4 hours a day. While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.</div>
                  <div className="content_item"><p>Fey Step:</p>You have proficiency with the longsword, shortsword, shortbow, and longbow</div>
                </div>
                <div className="box_title">FEATURES & TRAITS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CharacterSheetData);
