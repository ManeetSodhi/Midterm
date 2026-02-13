import { moneyCounter } from "../src/moneyCounter.js";

describe("It counts change", function(){
    it ("tests for one loonie", function(){
    expect (1).toBe(moneyCounter(0,0,0,1,0))
    })

    it ("tests for 3 toonies and a dime", function(){
    expect (6.1).toBe(moneyCounter(0,1,0,0,3))
    })

    it ("tests for a quarter and two nickels", function(){
    expect (0.35).toBe(moneyCounter(2,0,1,0,0))
    })
})