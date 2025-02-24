const display = document.getElementById("display");
let dotable = true;
let lastInput;
let lastOperator;

function append(input){
    console.log(display.value.length)
    if(display.value.length >= 10){
        console.log("input cannot be more than 10 chars");
        return
    }
    if(input=="."){
        if(dotable){
            dotable = false;
        }else{
            return;
        }
    }
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function operate(operator){
    lastInput = display.value;
    lastOperator = operator;
    clearDisplay();
}

function cal(){
    if(lastInput && lastOperator){
        let str = lastInput + lastOperator + display.value;
        console.log(str)
        display.value = eval(str);
        console.log(display.value)
    }
}