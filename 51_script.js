let link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

let sect = document.querySelector("section");
let para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

let linkPara = document.querySelector("p");
let text = document.createTextNode(
    " -- the premier source for web development knowledge.",
);
linkPara.appendChild(text);
// sect.removeChild(linkPara);
// linkPara.remove();

// method 1 
// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";

// method 2
para.classList.add("highlight");