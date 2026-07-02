// DOM 
// selecting element based on id of class
let container = document.querySelector("#container");

// selecting first child of a parent 
let display = container.firstElementChild;
console.log(display);

// selecting node with name of class 
let controls = document.querySelector(".controls");

// selecting node based on prior sibling 
display = controls.previousElementSibling;
console.log(display);

// DOM methods 
// query selectors 
// there is two primary methods to retrieve the node, 
// first is querySelector() and it goes like 
// document.querySelector("class/id");
// second is querySelectorAll() and it goes like 
// document.querySelectorAll("class / id")
// we cas also assign it to any varible and work with that.

// element creation
const div = document.createElement("div"); //, [options]

// placing created element in DOM 
// parentNode.appendChild(childNode)
// parentNode.insertBefore(newNode, referenceNode)

// removing element for DOM
// parentNode.removeChild(child)

// altering elements 
div.style.color = "blue";
div.setAttribute("style", "color: blue; background: white;");

// cabab-case and camelCase
// div.style.background-color; this is wrong 
div.style.backgroundColor;
div.style['background-color'];
div.style["backgroundColor"];

// editing attributes 
div.setAttribute("id", "theDiv");
div.getAttribute("id");
div.removeAttribute('id');

// working with classes 
div.classList.add("new");
div.classList.remove("new");
div.classList.toggle("active");

// adding text content
div.textcontent = "Hello world!";

// adding HTML content
div.innerHTML = "<span> Hello World! </span>";
let content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);