/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector("#calculator")
const displayVal = document.querySelector(".display")
const allButtons = document.querySelectorAll(".button");
const numberBtn = document.querySelectorAll(".number")
const calOperatorBtn = document.querySelectorAll(".operator")
const equalSign = document.querySelector(".equals")
const bodyTag = document.getElementsByTagName("body")


/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

// Here are the user stories for this lab:

// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.


let currentNumber = "";
let pendingVal = "";
let operator = "";

function updateDisplay(value){
    displayVal.innerText = value;
}

function listNumber(value) {
 currentNumber = currentNumber + value;
 updateDisplay(currentNumber);
}

function listOperator(value){
    if(currentNumber === ""){
        return;
    }if(pendingVal !== ""){
        calculate();
    }
    operator = value;
    pendingVal = currentNumber;
    currentNumber = "";
}

function calculate(){
    let result = 0;
    if(operator === "+"){
        result = Number(pendingVal) + Number(currentNumber);
    }else if (operator === "-") {
      result = Number(pendingVal) - Number(currentNumber);
    }else if (operator === "*") {
      result = Number(pendingVal) * Number(currentNumber);
    }else if (operator === "/") {
      result = Number(pendingVal) / Number(currentNumber);
    }
    currentNumber = result.toString();
    operator = "";
    pendingVal = "";
    updateDisplay(currentNumber);
}


function clear() {
  currentNumber = "";
  pendingVal = "";
  operator = "";
  updateDisplay();
}

allButtons.forEach((button) =>{
    button.addEventListener('click', (event) =>{
        const target = event.target;
        const value = target.innerText;

        if(target.classList.contains("number")){
            listNumber(value);
        }else if (target.classList.contains("operator")) {
          listOperator(value);
        }else if (target.classList.contains("equals")) {
          calculate();
        } else if (target && value === "C") {
          clear();
        }
    })
})



//Links to videos on YT that I reference to guide me through this project: 
// -https://www.youtube.com/watch?v=9JxR5R-RziQ
// -https://www.youtube.com/watch?v=6v4vBXL-qkY
// -Google 


