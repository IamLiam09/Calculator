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
    num1 = Number(num1)
    num2 = Number(num2)
    switch(operator){
        case "+":
            return add(num1, num2)
        case "-":
            return subtract(num1, num2)
        case "x":
            return multiply(num1, num2)
        case "÷":
            if(num1 === 0 && num2 === 0) return 0
            else{
            return division(num1, num2)
            }
    }
}
// The Dom's targeted.
const buttons = document.querySelectorAll(".numbers")
const display = document.getElementById("outerdisplay")
const innerdisplay = document.getElementById("innerdisplay")
const operation = document.querySelectorAll("#operation")
const clearall = document.getElementById("Allclear")
const equal = document.getElementById("equals")
const clear = document.getElementById("clear")
const pointButton = document.getElementById('point')

// Some variable to store data
let first_value = ''
let action  = null
let second_value = ''
let on = false
let point = false
// function for the calculator buttons
function updatedislay(key){
    display.textContent += key
}

// functions fot the clicks
function Acclear(){
    display.textContent = ''
    innerdisplay.textContent = ''
    first_value = ''
    second_value = ''
    action = null
}
function zeroreset(){
    display.textContent = ''
    innerdisplay.textContent = ''
    first_value = ''
    second_value = ''
}
const deletenum = () => {
    display.textContent = display.textContent
    .toString()
    .slice(0, -1)
}
const selectoperand = (symbol) => {
        if(action !== null) solve()
        first_value = display.textContent
        action = symbol
        innerdisplay.textContent = `${first_value} ${action}`
        display.textContent = ''
        on = true
}
// solving of the calculator
function solve(){
        if (action === null || on === false) return
        if (action === '÷' && display.textContent === '0') {
          alert("Don't crash my calcultor!")
        }
        second_value = display.textContent
        innerdisplay.textContent = `${first_value} ${action} ${second_value}`
        answer = operate(first_value, action, second_value)
        display.textContent = Math.round(answer)
        action = null
}


// appending a single button
function appendPoint() {
    if (display.textContent === '')
        display.textContent = '0'
    if (display.textContent.includes('.')) return
        display.textContent += '.'     
  }
// function for keyboard event
const handlekeyboard = (e) => {
    if(e.key >= 0 && e.key <= 9) updatedislay(e.key)
    if(e.key === ".") appendPoint()
    if(e.key === "Backspace") deletenum()
    if(e.key == "Enter") solve()
    if(e.key === "+" || e.key === '-' || e.key === '*' || e.key === '/')selectoperand(arimethicoperation(e.key))

}
// convert the string what the user see to arimethic symbols
const arimethicoperation = (handlekeyboard) => {
    if(handlekeyboard === "/") return '÷'
    if(handlekeyboard === "+")  return "+"
    if(handlekeyboard === "*")  return "x"
    if(handlekeyboard === "-") return '-'
}
// singlelistners
clearall.addEventListener("click", Acclear)
window.addEventListener("keydown", handlekeyboard)
clear.addEventListener("click", deletenum)
equal.addEventListener("click", solve)
pointButton.addEventListener('click', appendPoint)
// foreach event listeners
buttons.forEach(button => {
    button.addEventListener("click", () => {
        updatedislay(button.innerText)
    })
})

// Operation Listener
operation.forEach(operations => {
    operations.addEventListener("click", () => {
       selectoperand(operations.textContent)
    })
})