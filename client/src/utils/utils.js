export const mapSpeed = (race) => {
    let speed = 0;
    if (race === "Human" || race === "Half-Orc" || race === "Half-Elf" || race === "Elf" || race === "Dragonborn" || race === "Tiefling") {
        speed = 30;
    } else {
        speed = 25;
    }
    return speed;
}

export const calBonus = (skill) => {
    if (skill < 8) {
        return ""
    } else if (skill==="--"){
        return "--"
    } else {
    let bonus = Math.floor((skill)/2)-5;
      if(bonus>0) {
        bonus = `+${bonus}`;
    } else {
        return bonus;
    }
    return bonus;}
}

export const calProSaving = (skill) => {
    let bonus = Math.floor((skill)/2)-5;
    return bonus;
}

export const calProficiency = (level) => {
    let proficiency = 2 + Math.floor(((level)/4) - (1/4));
    return proficiency;
}

export const calAC = (skill) => {
    let AC = 10 + Math.floor((skill)/2)-5;
    return AC;
}