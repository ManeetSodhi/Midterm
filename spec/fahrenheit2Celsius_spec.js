import { fahrenheit2Celsius } from "../src/fahrenheit2Celsius.js";

describe("converts fahrenheit to celsius", function(){
    it ("tests for boiling", function(){
        expect (100).toBe(fahrenheit2Celsius(212))
    })

    it ("tests for freezing", function(){
        expect (0).toBe(fahrenheit2Celsius(32))
    })

    it ("tests for room temperature", function(){
        expect (21.11111111111111).toBe(fahrenheit2Celsius(70))
    })
})