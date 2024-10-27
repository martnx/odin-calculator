// Selector for allButton div
const allBtn = document.querySelectorAll('button');
console.log(allBtn.length);
for(let i = 0; i < allBtn.length; i++){
    console.log(i);
    allBtn[i].addEventListener("click", e =>{
        const target = e.target
        console.log(target);
        switch(target){
            case "button-add":
                console.log("column"); break;
        }
    });
}

const resultDiv = document.querySelector('.result-div');

const addBtn = document.querySelector('#button-add');
addBtn.addEventListener("click", e =>{
    console.log(e.type);
});

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
