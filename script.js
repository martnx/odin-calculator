const resultDiv = document.querySelector('.result-div');

//true = first input || false = second number
let switchNumber = true;
//function for first number
function firstNumber(number){

}


x``
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
    let container = 0;
    switch(operate){
        case "add":
            container = add(firstNum, secondNum);
            break;
        case "subtract":
            container = subtract(firstNum, secondNum);
            break;
        case "multiply":
            container = multiply(firstNum, secondNum);
            break;
        case "divide":
            container = divide(firstNum, secondNum);
            break;
        default:
            console.log("error! not yet defined!");

    }
    return container;
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
                console.log("this is add button"); 
                break;
            case "button-subtract": 
                operate("subtract");
                console.log("this is substract button"); 
                break;
            case "button-multiply":
                operate("multiply");
                console.log("this is multiply button"); 
                break;
            case "button-divide": 
                operate("divide");
                console.log("this is divide button"); 
                break;
            case "button-equal":
                console.log(operate());
                break;
            //number button
            case "button-one": //button 1
                if(switchNumber == true) firstNumber("1");
                else secondNum
                break;
            case "button-two": //button 2
                add = 2; 
                break;
            case "button-three": //button 3
                add = 3; 
                break;
            case "button-four": //button 4
                add = 4; 
                break;
            case "button-five": //button 5
                add = 5; 
                break;
            case "button-six": //button 6
                add = 6; 
                break;
            case "button-seven": //button 7
                add = 7; 
                break;
            case "button-eight": //button 8
                add = 8; 
                break;
            case "button-nine": //button 9
                add = 9; 
                break;
            case "button-zero": //button 0
                add = 0; 
                break;
            
            default:
                console.log("not yet defined");
        }
    });
}

