var expr1 = "";
var expr2 = "";
var opr = "";

function oper(operate){
    // UPDATE - A problem left here
    // 
    // an operator is entered

    if(opr == ""){
        opr = operate;
    }
    else{
        calculate();
        opr = operate;
    }
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