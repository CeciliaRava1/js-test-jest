const sum = require("./sum")

describe("Example tests", () => {
    
    it("add 1 + 2 to equal 3", () => {
        const result = sum(1,2);
        expect(result).toBe(3)
    })

})

describe("Truthy or falsy", () =>{
    it("Receive null and be falsy", () =>{
        const n = null;
        expect(n).toBeFalsy();
    })
})

describe("numbers", () => {
    it("two plus two", () => {
        const value = 2 + 2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3);
    })

    it("add floats", () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.2999);
    })
})

describe("strings", () => {
    it("There no are 'I' in 'team", () =>{
        expect("team").not.toMatch(/I/);  //It's a regular expresion
    })
    
})

describe("arrays", () => {
    const shoppingList = [
        'milk', 'cheese', 'ice cream'
    ];
    expect(shoppingList).toContain('milk');
})


function compileAndroidCode(){
    throw new Error('You are using the wrong JDK')
}

describe("exceptions", () =>{
    it("Compile android go as expected", () => {
        expect(() => compileAndroidCode()).toThrow();
    })
})

