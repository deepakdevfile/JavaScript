let container = document.querySelector(".container");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    container.replaceChildren();
    let grids = prompt("Enter number of Girds: ", 10);

    let vGrid = Number(grids)
    let hGrid = Number(grids);
    
    while(vGrid > 0){
        let i = hGrid;
        while(i > 0){
            let div = document.createElement("div");
            div.textContent = ".";
            div.style.display = "inline-block";

            let divHeight = 100 / hGrid;
            let divWidth = 100 / hGrid

            div.style.width = divHeight.toString() + "%";
            div.style.height = divWidth.toString() + "%";

            console.log(div.style.width);
            console.log(div.style.height);

            container.appendChild(div);
            i--;
        }
        vGrid--;        
    }
})

let div = document.querySelectorAll(".container div");
div.addEventListener("mousein", () => {
    div.style.backgroundColor = "black";
})

