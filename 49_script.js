let btn = document.querySelector("button");
let para = document.querySelector("p");

let e = new Event("click");
btn.dispatchEvent(e);

btn.addEventListener("click", () => {
    para.textContent = "Click event molested me";
})