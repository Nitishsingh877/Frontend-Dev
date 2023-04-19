function vowel() {
var name = document.getElementById("name");
var finalresult = document.getElementById("final-result")

var name = name.value;
let v = 0;
for(let i=0; i<name.length; i++){
    const char = name.charAt(i).toLowerCase();
    if(char==='a' || char==='e' || char==='i' || char==='o' || char=='u'){
         v++;
        finalresult.innerText = v;
        finalresult.style.fontWeight = "900";
        finalresult.style.marginLeft ="150px"
        finalresult.style.marginTop ="-18px"
    }
}
}