const display = document.getElementById("display");
var dotable = true;

function append(value){
    if(value=="."){
        if(dotable){
            dotable = false;
        }else{
            return;
        }
    }
    display.value += value;
    
}
