const display = document.getElementById("display");
let dotable = true;
let preDisplay ="";
let appednable = true;
const preD = document.getElementById("pre");
let operators = ["+","-","/","*"];

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



/* 
Clears the calculator, and resets any functions. 
The contents of the memory are not affected by AC. 
The memory can be cleared after pressing AC by pressing Min. 
*/
function clearAll(){
    display.value = "";
    preDisplay = "";
    preD.innerHTML = "";//temp

}




function operate(operator){
    // if(display.value == undefined) return;
    preDisplay += display.value;
    let n = preDisplay.length - 1;
    if(isOperator(preDisplay.value[n])){
        console.log(isOperator(preDisplay.value[n]))
        preDisplay[n] = operator;
    }else{
        preDisplay = display.value + operator;
    }
    clearDisplay();
    preD.innerHTML = preDisplay;
    
    
}

function cal(){
    if(preDisplay){
        let result = preDisplay + display.value;
        console.log(result)
        display.value = eval(result);
        console.log(display.value)
        preDisplay = display.value;
        preD.innerHTML = preDisplay;
    }
}

function isOperator(operator){
    return operators.includes(operator);
}
console.log(isOperator(""))