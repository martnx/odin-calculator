const resultDiv = document.querySelector('.result-div');

//true = first input || false = second number
let switchNumber = true;
let firstNum = 0;
let secondNum = 0;
let totalContainer = 0;

let firstNumberContainer = "";
let secondNumberContainer = "";
let resultContainer = 0;
let operateContainer = "";

//function for first number
function firstNumber(number){
    firstNumberContainer += number
    resultDiv.textContent += number;
    console.log("first number: " + firstNumberContainer);
}

function secondNumber(number){

    resultDiv.textContent = "";
    secondNumberContainer += number;
    resultDiv.textContent += number;
}

//Addition function
function add(a, b){
    let x = a + b;
    return x;
}

//Substract function
function subtract(a, b){
    let x = a - b;
    return x;
}

//Multiply function
function multiply(a, b){
    let x = a * b;
    return x;
}

//Divide function
function divide(a, b){
    let x = a / b;
    return x;
}

function operate(operate){
    if(firstNumberContainer !== "") switchNumber = false;
    operateContainer = operate;
    console.log("operate: " + operateContainer);
}

function clearButton(){

}

function deleteButton(){
    s
}

function equal(firstNum, secondNum){

    let container;
    let firstConvert = parseInt(firstNum);
    let secondConvert = parseInt(secondNum);

    console.log(typeof firstConvert);
    console.log(typeof secondConvert);

    switch(operateContainer){
        case "add":
            container = add(firstConvert, secondConvert);
            break;
        case "subtract":
            container = subtract(firstConvert, secondConvert);
            break;
        case "multiply":
            container = multiply(firstConvert, secondConvert);
            break;
        case "divide": 
            container = divide(firstConvert, secondConvert);
            break;
        default:
            console.log("error! not yet defined!");
    }
    resultContainer = container;
    firstNumberContainer = container;

    resultDiv.textContent = "";
    displayResult(resultContainer);;

}

function displayResult(result){
    console.log(resultContainer);
    resultDiv.textContent = result;
}


// Selector for allButton div
const allBtn = document.querySelectorAll('button');
console.log(allBtn.length);
for(let i = 0; i < allBtn.length; i++){
    allBtn[i].addEventListener("click", e =>{
        const target = e.target
        switch(target.id){
            //expression and clear delete   
            case "button-add":
                operate("add");
                break;
            case "button-subtract": 
                operate("subtract");
                break;
            case "button-multiply":
                operate("multiply");
                break;
            case "button-divide": 
                operate("divide");
                break;
            case "button-equal":
                equal(firstNumberContainer, secondNumberContainer);
                console.log(`first: ${firstNumberContainer}`);
                console.log(`second: ${secondNumberContainer}`);
                break;
            case "button-clear":
                clearButton();
                break;
            case "button-delete":
                deleteButton();
                break;
            //number button
            case "button-one": //button 1
                if(switchNumber == true) firstNumber("1");
                else secondNumber("1");
                break;
            case "button-two": //button 2
                if(switchNumber == true) firstNumber("2");
                else secondNumber("2");
                break;
            case "button-three": //button 3
                if(switchNumber == true) firstNumber("3");
                else secondNumber("3");
                break;
            case "button-four": //button 4
                if(switchNumber == true) firstNumber("4");
                else secondNumber("4");
                break;
            case "button-five": //button 5
                if(switchNumber == true) firstNumber("5");
                else secondNumber("5");
                break;
            case "button-six": //button 6
                if(switchNumber == true) firstNumber("6");
                else secondNumber("6");
                break;
            case "button-seven": //button 7
                if(switchNumber == true) firstNumber("7");
                else secondNumber("7");
                break;
            case "button-eight": //button 8
                if(switchNumber == true) firstNumber("8");
                else secondNumber("8");
                break;
            case "button-nine": //button 9
                if(switchNumber == true) firstNumber("9");
                else secondNumber("9");
                break;
            case "button-zero": //button 0
                if(switchNumber == true) firstNumber("0");
                else secondNumber("0");
                break;
            default:
                console.log("not yet defined");
        }
    });
}

