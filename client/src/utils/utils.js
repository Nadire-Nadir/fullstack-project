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
    let strBonus = Math.floor((skill)/2)-5;
      if(strBonus>0) {
        strBonus = `+${strBonus}`;
    } else {
        strBonus = strBonus;
    }
    return strBonus;
}

export const calProficiency = (level) => {
    let proficiency = 2 + Math.floor(((level)/4) - (1/4));
    return proficiency;
}