let container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

let pTag = document.createElement("p");
pTag.textContent = "Hey I'm red!";
container.appendChild(pTag);

let h3Tag = document.createElement("h3");
h3Tag.textContent = "I'm a blue h3!";
h3Tag.style.color = "blue";
container.appendChild(h3Tag);

let divTag = document.createElement("div");
let h1Tag = document.createElement("h1");
h1Tag.textContent = "I'm in a div";
divTag.appendChild(h1Tag);
pTag.textContent = "ME TOO!";
divTag.appendChild(pTag);
divTag.setAttribute("style", "backgroundColor: pink border: black 4px solid");
container.appendChild(divTag);