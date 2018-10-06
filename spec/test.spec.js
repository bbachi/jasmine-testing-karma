var Calculator = function() {}

Calculator.prototype.add = function(a,b) {
    return a+b;
}

Calculator.prototype.subtract = function(a,b) {
    return a-b;
}

Calculator.prototype.multiply = function(a,b) {
    return a*b;
}

describe("Calculator", function() {
    var calculator;
    
    beforeAll(function(){
        console.log("runs only once before everything.")
    })

    afterAll(function(){
        console.log("runs only once after everything.")
    })

    beforeEach(function(){
        console.log("running before each spec!!!!")
        calculator = new Calculator();
    })

    afterEach(function(){
        console.log("running after each spec!!!!")
    })

    it("should add two numbers", function() {
         
         console.log("adding two numbers spec!!")

         var result = calculator.add(2,4);

         expect(result).toBe(6);
    })

    it("should subtract two numbers", function() {

        console.log("subtracting two numbers spec!!")

        var result = calculator.subtract(4,2);

        expect(result).toBe(2);
    })

    it("should multiply two numbers", function() {

        console.log("multiplying two numbers spec!!")

        var result = calculator.multiply(4,2);

        expect(result).toBe(8);
    })
});