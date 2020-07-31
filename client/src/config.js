export const LEVEL_OPTIONS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
export const SKILL_OPTIONS = ["--",8,10,12,13,14,15];
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

export const SKILL_PROFICIENCY = {
    "Barbarian": ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
    "Bard": ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
	"Cleric": ["History", "Insight", "Medicine", "Persuasion", "Religion", ],
	"Druid": ["Animal Handling", "Arcana", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
	"Fighter": ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],
	"Monk": ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
	"Paladin": ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
	"Ranger": ["Animal Handling", "Athletics", "Insight", "Investigation","Nature", "Perception", "Stealth", "Survival"],
	"Rogue": ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
	"Sorcerer": ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
	"Warlock": ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
	"Wizard": ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
}