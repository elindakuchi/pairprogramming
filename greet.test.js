
function greet(name = null){
    
    if (name!==null && name === name.toUpperCase()){
        return `HELLO, ${name}`
    }

    if( name !==null) return `Hello, ${name}`

    return "Hello, my friend"
    
}

describe("greet(): ",()=>{
    test("should display Hello, Bob when it is called with argument Bob",() => {
        expect(greet('Bob')).toStrictEqual('Hello, Bob');
    } )

    test("should display Hello, my friend when it null",() => {
        expect(greet()).toEqual('Hello, my friend');
    } )
    test("should display Hello,Bob in UPPERCASE ",() => {
        expect(greet('BOB')).toEqual('HELLO, BOB');
    } )
})