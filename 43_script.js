let form = document.querySelector("form");
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let para = document.querySelector("p");

form.addEventListener("submit", (e) => {
    if(fname.value == '' || lname.value == ''){
        e.preventDefault();
        para.textContent = "You need to fill both names!";
    }
})