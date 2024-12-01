class Calculator{
    static add(a,b){
        console.log(`Wynik dodawania tych liczb to ${a+b}`)
    }
    static substruct(a,b){
        console.log(`Wynik odejmowania tych liczb to ${a-b}`)
    }
    static multiply(a,b){
        console.log(`Wynik mnożenia tych liczb to ${a*b}`)
    }
    static divide(a,b){
        console.log(`Wynik dzielenia tych liczb to ${a/b}`)
    }
}
let a = Calculator.add(5,10)
let b = Calculator.substruct(5,10)
let c = Calculator.multiply(5,10)
let d = Calculator.divide(5,10)
