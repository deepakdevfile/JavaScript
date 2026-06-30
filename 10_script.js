const select = document.querySelector("select");
const html = document.querySelector("html");

function update(bgColor, textColor){
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

// select.addEventListener("change", () => select.value === "black" ? update("black", "white") : update("white", "black"),);
select.addEventListener("change", () => {
    const choice = select.value;

    switch(choice){
        case "black":
            update("black", "white");
            break;
        case "white":
            update("white", "black");
            break;
        case "purple":
            update("purple", "white");
            break;
        case "yellow":
            update("yellow", "purple");
            break;
        case "psychedelic":
            update("lime", "purple");
            break;
    }
});