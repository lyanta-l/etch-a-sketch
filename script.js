const container = document.querySelector("#container");
const root = document.querySelector("html");
const clearButton = document.querySelector("#clear");
const sizeButton = document.querySelector("#size-btn");
let gridSize = 24;

const rgbRandom = function () {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return `rgb(${x},${y},${z})`;
}

const createGrid = function () {
    root.style.setProperty('--grid-size', gridSize)
    for (let i = 0; i < gridSize * gridSize; i++) {
        const sketch = document.createElement("div");
        sketch.classList.add("sketch");
        sketch.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor=rgbRandom();
        });
        container.appendChild(sketch);
    }
}


sizeButton.addEventListener("click", () => {
    gridSize = parseInt(prompt("输入size大小"));
    if (!isNaN(gridSize)) {
        container.innerHTML = "";
        createGrid();
    }
});

createGrid();
clearButton.addEventListener("click", () => {
    document.querySelectorAll(".sketch").forEach(item => {
        item.style.backgroundColor="";
    })
})