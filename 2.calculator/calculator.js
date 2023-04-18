function calculator() {
var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")
var oper = document.getElementById("operator")
var finalresult = document.getElementById("final-result")

var num1 = num1.value;
var num2 = num2.value;
var oper = operator.value;

switch(oper) {
    case "-":
        finalresult.innerText =(num1-num2);
        break;
    case "+" :
        finalresult.innerHTML ="Plz_add_yr";
        break;
    case "*":
        finalresult.innerText = num1*num2;
        break;
    case "/":
        finalresult.innerText = num1/num2;
        break;
    case "%":
        finalresult.innerText = num1%num2;
        break;
    default :
    finalresult.innerHTML = "Invalid-Operator";

}

}

