import { richter2Damage } from "../src/richter2Damage.js";

describe("it determines the level of damage of an earthquake based on the richter scale", function(){
    it ("tests for large earthquake", function(){
        expect ("Catastrophe: most buildings destroyed").toBe(richter2Damage(7.5))
    })

    it ("tests for medium earthquake", function(){
        expect ("Serious damage: walls may crack or fall").toBe(richter2Damage(6.1))
    })

    it ("tests for small earthquake", function(){
        expect ("Little or no damage").toBe(richter2Damage(1.5))
    })
})