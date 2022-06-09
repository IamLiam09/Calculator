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
        add(num1, num2)
    }
    if(operator === '-'){
        subtract(num1, num2)
    }
    if(operator === '/'){
        division(num1, num2)
    }
    if(operator === '*'){
        multiply(num1, num2)
    }
}
// operate()
var buttons = document.querySelectorAll(".numbers")
console.log(buttons)
buttons.forEach(button => {
    button.addEventListener("click", () =>{
        console.log(button.innerText)
    })
})