function greet(name){
    return `Hello, ${name}`
}

describe("greet(): ",()=>{
    test("should display Hello, Bob when it is called with argument Bob",() => {
        expect(greet('Bob')).toStrictEqual('Hello, Bob');
    } )
})