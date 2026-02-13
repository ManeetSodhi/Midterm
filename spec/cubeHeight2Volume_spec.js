import { cubeHeight2Volume } from "../src/cubeHeight2Volume.js";

describe("It converts the height of a cube to cubic meters", function(){
    it ("tests for a volume of 1", function(){
        expect (1).toBe(cubeHeight2Volume(1))
    })

    it ("tests for a height of 2", function(){
        expect (8).toBe(cubeHeight2Volume(2))
    })

    it ("tests for a height of 3", function(){
        expect (27).toBe(cubeHeight2Volume(3))
    })
})