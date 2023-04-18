function cm() {
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var finalresult = document.getElementById("final-result");
var color1 = color1.value;
var color2 = color2.value;

if((color1=="red"&&color2=="blue") || (color1=="blue"&&color2=="red")){
    finalresult.innerText = "purple";
    finalresult.style.color = "purple";
}
else if((color1=="red"&&color2=="yellow") || (color1=="yellow"&&color2=="red")){
    finalresult.innerText = "Orange";
    finalresult.style.color = "orange";
}
else if((color1=="blue"&&color2=="yellow") || (color1=="yellow"&&color2=="blue")){
    finalresult.innerText = "Green";
    finalresult.style.color = "green";
}
else {
    finalresult.innerHTML = "invalid color combination"
}

}