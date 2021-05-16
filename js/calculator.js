var expr1 = "";
var expr2 = "";
var opr = "";

function oper(operate){
    if(opr == ""){
        opr = operate;
    }
    else{
        if(expr2 == ""){
            opr = operate;
        }
        else{
            calculate();
            opr = operate;
        }
    }

    display();
}

function erase(){
    expr1 = "";
    expr2 = "";
    opr = "";

    display();
}

function append(num){

    // A number is entered

    if(opr == ""){
        expr1 = expr1 + num;
    }
    else{
        expr2 = expr2 + num;
    }

    display();
}

function calculate(){
    expr1 = eval(expr1 + opr + expr2);

    expr2 = "";
    opr = "";

    display();
}

function display(){
    res.innerHTML = expr1 + opr + expr2;
}