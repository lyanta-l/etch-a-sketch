const container = document.querySelector("#container");
const root = document.querySelector("html");
const clearButton = document.querySelector("#clear");
const gridSize = 24;
root.style.setProperty('--grid-size',gridSize)
for (let i = 0; i < 24 * 24; i++) {
    const sketch = document.createElement("div");
    sketch.classList.add("sketch");
    sketch.addEventListener("mouseover",function(e){
        e.target.classList.add("hover");
    });
    container.appendChild(sketch);
}
clearButton.addEventListener("click",() => {
    document.querySelectorAll(".sketch").forEach(item => {
        item.classList.remove("hover");
    })
})