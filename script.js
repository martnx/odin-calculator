
const resultDiv = document.querySelector('.result-div');

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

function operate(a, b){
    return add(a, b);
}


// Selector for allButton div
const allBtn = document.querySelectorAll('button');
console.log(allBtn.length);
for(let i = 0; i < allBtn.length; i++){
    allBtn[i].addEventListener("click", e =>{
        const target = e.target
        switch(target.id){
            //expression and clear delete   
            case "button-add": console.log("this is add button"); break;

            case "button-substract": console.log("this is substract button"); break;
            case "button-multiply": console.log("this is multiply button"); break;
            case "button-divide": console.log("this is divide button"); break;
            //number button
            case "button-one": add = 1; break;
            case "button-two": add = 2; break;
            
            default:
                console.log("not yet defined");
        }
    });
}

console.log(add);
