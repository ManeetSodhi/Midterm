import { gymCost } from "../src/gymCost.js";

describe("it calculates the discount depending on the number of friends invited", function(){
    it("tests for one friends", function(){
        expect (5).toBe(gymCost(1))
    })

    it("tests for 2 friends", function(){
        expect (10).toBe(gymCost(2))
    })

    it("tests for 3 friends", function(){
        expect (15).toBe(gymCost(3))
    })

    it("tests for 4 friends", function(){
        expect (15).toBe(gymCost(4))
    })
})