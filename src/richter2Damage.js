export function richter2Damage(richter){
    //processing
    let damage = ""

    if (richter<5){
        damage = "Little or no damage"
    }else if(richter<5.5){
        damage = "Some damage"
    }else if(richter<6.5){
        damage = "Serious damage: walls may crack or fall"
    }else if(richter<7.5){
        damage = "Disaster: buildings may collapse"
    }else{
        damage = "Catastrophe: most buildings destroyed"
    }

    return damage
}