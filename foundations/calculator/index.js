const buttons = document.querySelectorAll(".btn")
const display = document.getElementById("display")

const operators = ["+", "-", "/", "*"]

let displayValue = ""
let firstOperand = null
let operator = null
let waitingForOperator = true
let result = null


function updateDisplay(){
    display.textContent = displayValue
}

function calculate(input1, input2, operator){
    console.log(input1)
    console.log(input2)
    console.log(operator)
    if(operator == "+"){
        result = input1 + input2 
    }else if(operator == "-"){
        result = input1 - input2
    }else if(operator == "/"){
        result = input1 / input2
    }else{
        result = input1 * input2
    }
    console.log(result)
    displayValue = result
    updateDisplay()
    return result
}

function clear(){
    displayValue = ""
    firstOperand = null
    operator = null
    waitingForOperator = true
    result = null
}

function deleteDigit(){
    displayValue = displayValue.slice(0, -1)
    updateDisplay()
}

function sqrt(){
    displayValue = parseInt(displayValue) * 2
    updateDisplay()
}

buttons.forEach(button => {
    button.addEventListener("click", (e)=>{
        
        if(operators.includes(e.target.dataset.value)){
            if(waitingForOperator == false){
                if(displayValue == ""){
                    operator = e.target.dataset.value
                    display.textContent = e.target.dataset.value
                }else{
                    firstOperand = calculate(parseInt(firstOperand), parseInt(displayValue), operator)
                    console.log("first operand: " + firstOperand)
                    displayValue = ""
                    operator = e.target.dataset.value  
                }
                      
            }else{
                firstOperand = displayValue
                displayValue = ""
                operator = e.target.dataset.value
                waitingForOperator = false
                display.textContent = e.target.dataset.value
            }
            
        }else if(e.target.dataset.value == "="){
            calculate(parseInt(firstOperand), parseInt(displayValue), operator)
            clear()
        }else if(e.target.dataset.value == "clear"){
            clear()
            updateDisplay()
        }else if(e.target.dataset.value == "delete"){
            deleteDigit()
        }else if(e.target.dataset.value == "sqrt"){
            sqrt()
        }else{
            displayValue += e.target.dataset.value
            display.textContent = displayValue
        }
        
        
    })
})