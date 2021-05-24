console.log("hi there!");

var expr1 = "";
var expr2 = "";
var opr = "";

function ifLimitExceed(){
  if(expr1.length > 15 || expr2.length > 15){
      return true;
  }
  else{
      return false;
  }
}

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

    if(ifLimitExceed()){
      reset_buffer();
    }
    else{
        display();
    }
}

function calculate(){
    expr1 = eval(expr1 + opr + expr2);

    expr2 = "";
    opr = "";

    if(ifLimitExceed()){
      reset_buffer();
    }
    else{
        display();
    }
}

function display(){
    res.innerHTML = expr1 + opr + expr2;
}

function reset_buffer(){
  expr1 = "";
  expr2 = "";
  opr = "";

  res.innerHTML = "Limit Exceed";
}