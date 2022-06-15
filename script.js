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
// function to operate the calculator
function operate(num1, operator, num2){  
    if(operator === "+"){
        return add(num1, num2)
    }
    if(operator === '-'){
        return subtract(num1, num2)
    }
    if(operator === '/'){
        division(num1, num2)
    }
    if(operator === '*'){
        multiply(num1, num2)
    }
}
// function for the calculator buttons
function ACclear(screen){
    return screen.innerText = ''
}
function updatedislay(){

}
// The Dom's am getting
const buttons = document.querySelectorAll(".numbers")
var display = document.getElementById("outerdisplay")
const operation = document.querySelectorAll(".operation")
const clearall = document.querySelector("#Allclear")
let first_value
let action 
let second_value
let on = false
let tmp = document.createElement("div")
// button Listener
buttons.forEach(button => {
    button.addEventListener("click", () => {
        tmp.append(button.innerText)
        display.append(tmp)
        first_value = Number(display.innerText)
        if(display.innerText.includes(action)){
            second_value = Number(display.innerText)
        }
    })
})
// Operation Listener
operation.forEach(operations => {
    operations.addEventListener("click", () => {
        display.append(operations.innerText)
        action = operations.innerText
    })
})
console.log(operate(2, '+', 5))