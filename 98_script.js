let price = document.querySelector("#price");
let output = document.querySelector(".price-output");

output.textContent = price.value;
price.addEventListener("input", () => {
    output.textContent = price.value;
})