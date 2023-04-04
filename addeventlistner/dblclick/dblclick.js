const btn = document.getElementById("button")

btn.addEventListener("dblclick", hey)

function hey() {
    btn.style.padding = "35px";
    btn.style.backgroundColor = "blue";
    btn.innerText = "successful";
}
 