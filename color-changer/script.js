const btn = document.getElementById("button");
const randomColor = () => {
    let val = "1234567890ABCDEF";
    let cons = "#";
    for(let i=0; i<6; i++){
        cons = cons + val[Math.floor(Math.random() *16)];
    }
    return cons;
};

console.log(randomColor());

function changerandomcolor() {
    document.body.style.backgroundColor = randomColor()
}
btn.addEventListener("click", changerandomcolor);