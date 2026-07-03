let track = document.querySelector("#track");
let pos = document.querySelector("#log")

track.addEventListener("mousemove", (e) => {
    pos.textContent = `
    Screen X/Y: (${e.screenX}, ${e.screenY})
    Client X/Y: (${e.clientX}, ${e.clientY})`;
});