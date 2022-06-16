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
// The Dom's targeted.
const buttons = document.querySelectorAll(".numbers")
const display = document.getElementById("outerdisplay")
const innerdisplay = document.getElementById("innerdisplay")
const operation = document.querySelectorAll("#operation")
const clearall = document.getElementById("Allclear")
const equal = document.getElementById("equals")
const clear = document.getElementById("clear")

// Some variable to store data
let first_value = ''
let action  = null
let second_value = ''
let on = false

// function for the calculator buttons
function updatedislay(key){
    display.append(key)
}

// functions fot the clicks
function Acclear(){
    display.textContent = ''
    innerdisplay.textContent = ''
    first_value = ''
    second_value = ''
    action = null
}
const deletenum = () => {
    display.textContent = display.textContent
    .toString()
    .slice(0, -1)
}
const selectoperand = (symbol) => {
        if (display !== null) solve()
        first_value = display.textContent
        display = symbol
        innerdisplay.textContent = `${first_value} ${currentOperation}`
        on = true
}
      
const solve = () => {
        if (action === null || on) return
        if (action === '÷' && display.textContent === '0') {
          alert("You can't divide by 0!")
          return
        }
        second_value = display.textContent
        display.textContent = roundResult(
          operate(first_value, action, second_value)
        )
        innerdisplay.textContent = `${first_value} ${action} ${second_value} =`
        display = null
}

// function for keyboard event
const handlekeyboard = (e) => {
    if(e.key >= 0 && e.key <= 9) updatedislay(e.key)
    if(e.key === ".")updatedislay(".")
    if(e.key === "Backspace") deletenum()

}
function roundResult(number) {
    return Math.round(number * 1000) / 1000
}
// singlelistners
clearall.addEventListener("click", Acclear)
window.addEventListener("keydown", handlekeyboard)
clear.addEventListener("click", deletenum)
equal.addEventListener("click", solve)
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