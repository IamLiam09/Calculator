// the function to add, subtract, multiply, divide
function add(a, b){
    return a + b
}
function subtract(a, b){
    return a - b
}
function multiply(a, b){
    return a * b
}
function division(a, b){
    return a / b
}
// Taking user input and calling the right function
function operate(){
    let userinp1 = prompt("Please enter a number: ")
    const operator = prompt("Add, Minus, Subtract or divide")
    let userinp2 = prompt("Please enter a number: ")
    let num1 = parseInt(userinp1)
    let num2 = parseInt(userinp2)
    if(operator === "+"){
        console.log(add(num1, num2))
    }
    if(operator === '-'){
        console.log(subtract(num1, num2))
    }
    if(operator === '/'){
        console.log(division(num1, num2))
    }
    if(operator === '*'){
        console.log(multiply(num1, num2))
    }
}
operate()
