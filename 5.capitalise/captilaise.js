function capti() {
var name  = document.getElementById("name");
var finalresult = document.getElementById("final-result");
var finalresult2 = document.getElementById("final-result2");

var name = name.value;

finalresult.innerHTML = name.charAt(0).toUpperCase() + name.slice(1);
finalresult.style.fontSize = "25px";
finalresult.style.color = "blue";

finalresult2.innerHTML = name.toUpperCase();
finalresult2.style.fontSize = "30px";
finalresult2.style.color = "orange";


}