const heading = document.getElementById("image")

heading.addEventListener("mouseover", func)
// heading.addeventlistner("mouseout",func)

function func() {
    heading.innerText = "image load failed";
    heading.style.color = "grey";
}
