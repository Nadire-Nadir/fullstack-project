export const LEVEL_OPTIONS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
export const SKILL_OPTIONS = ["--",8,10,12,13,14,15];
export const RACE_LANGUAGE = {
    "Tiefling": ["Common", "Infernal"],
    "Dragonborn": ["Common", "Draconic"],
    "Dwarf": ["Common", "Dwarven"],
    "Elf": ["Common", "Elvish"],
    "Gnome": ["Common", "Gnomish"],
    "Half-Elf": ["Common", "Elvish"],
    "Half-Orc": ["Common", "Orc"],
    "Halfling": ["Common", "Halfling"],
    "Human": ["Common"]
}

export const SAVING_THROWS = { 
    "Barbarian": ["STR","CON"], 
    "Bard": ["DEX","CHA"],
    "Cleric": ["WIS","CHA"],
    "Druid": ["INT","WIS"],
    "Fighter": ["STR","CON"],
    "Monk": ["STR","DEX"],
    "Paladin": ["WIS","CHA"],
    "Ranger": ["STR","DEX"],
    "Rogue": ["DEX","INT"],
    "Sorcerer": ["CON","CHA"],
    "Warlock": ["WIS","CHA"],
    "Wizard": ["INT","WIS"]
}

export const CLASS_PROFICIENCY = {
    "class": {
        "skill_num": ["skill01","skill02"],
        "skills": ["Choose a Skill"],
        "armor":"None",
        "weapon":"None",
        "saves":"None"},
    "Barbarian": {
        "skill_num":["skill01","skill02"],
        "skills":["Choose a Skill","Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
        "armor": ["Light armor", "Midium armor", "Shields"],
        "weapon": ["Simple weapons", "Martial weapons"],
        "saves": ["STR","CON"] },
    "Bard": {
        "skill_num":["skill01","skill02", "skill03"],
        "skills": ["Choose a Skill","Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
        "armor": ["Light armor"],
        "weapon": ["Simple weapons", "Hard crossbows", "Longswords", "Rapiers", "Shortwords"],
        "saves": ["DEX","CHA"]},
    "Cleric": {
        "skill_num":["skill01","skill02"],
        "skills": ["Choose a Skill", "History", "Insight", "Medicine", "Persuasion", "Religion"],
        "armor": ["Light armor", "Midium armor", "Shields"],
        "weapon": ["Simple weapons"],
        "saves": ["WIS","CHA"]},
    "Druid": {
        "skill_num":["skill01","skill02"],
        "skills": ["Choose a Skill", "Animal Handling", "Arcana", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
        "armor": ["Light armor", "Midium armor", "Shields"],
        "weapon": ["Clubs", "Daggers", "Darts", "Javelins"],
        "saves": ["INT","WIS"]},
    "Fighter": {
        "skill_num":["skill01","skill02"],
        "skills": ["Choose a Skill", "Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],
        "armor": ["Light armor", "Midium armor", "Hight armor", "Shields"],
        "weapon": ["Simple weapons", "Martial weapons"],
        "saves": ["STR","CON"]},
    "Monk": {
        "skill_num":["skill01","skill02"],
        "skills": ["Choose a Skill", "Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
        "armor": ["None"],
        "weapon": ["Simple weapons", "Shortwords"],
        "saves": ["STR","DEX"]},
    "Paladin": {
        "skill_num":["skill01","skill02"],
        "skills": ["Choose a Skill", "Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
        "armor": ["Light armor", "Midium armor", "Hight armor", "Shields"],
        "weapon": ["Simple weapons", "Martial weapons"],
        "saves": ["WIS","CHA"]},
    "Ranger": {
        "skill_num":["skill01","skill02", "skill03"],
        "skills": ["Choose a Skill", "Animal Handling", "Athletics", "Insight", "Investigation","Nature", "Perception", "Stealth", "Survival"],
        "armor": ["Light armor", "Midium armor", "Shields"],
        "weapon": ["Simple weapons", "Martial weapons"],
        "saves": ["STR","DEX"]},
    "Rogue": {
        "skill_num":["skill01","skill02", "skill03", "skill04"],
        "skills": ["Choose a Skill", "Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
        "armor": ["Light armor"],
        "weapon": ["Simple weapons", "Hand crossbows", "Longswords", "Rapiers", "Shortwords"],
        "saves": ["DEX","INT"]},
    "Sorcerer": {
        "skill_num":["skill01","skill02"],
        "skills": ["Choose a Skill", "Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
        "armor": ["None"],
        "weapon": ["Daggers", "Darts", "Slings", "Quarterstaffs", "Light crossbows"],
        "saves": ["CON","CHA"]},
    "Warlock": {
        "skill_num":["skill01","skill02"],
        "skills": ["Choose a Skill", "Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
        "armor": ["Light armor"],
        "weapon": ["Simple weapons"],
        "saves": ["WIS","CHA"]},
    "Wizard": {
        "skill_num":["skill01","skill02"],
        "skills": ["Choose a Skill", "Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
        "armor": ["None"],
        "weapon": ["Daggers", "Darts", "Slings", "Quarterstaffs", "Light crossbows"],
        "saves": ["INT","WIS"]},
}