const display = document.getElementById("display");
let dotable = true;

function append(input){
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

function operate(operater){
    
}