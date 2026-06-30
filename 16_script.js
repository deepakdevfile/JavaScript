let input = document.querySelector("#input");
let list = document.querySelector("ol");

function fizzbuzz(n){
    const listItem = document.createElement("li");
    for (let i = 0; i < n; i++) {
        if (i % 3 == 0) {
            listItem.textContent = Fizz;
        } else if (i % 5 == 0) {
            listItem.textContent = Buzz;
        } else if (i % 3 == 0 && i % 5 == 0) {
            listItem.textContent = fizzbuzz;
        }
        else {
            listItem.textContent = i;
        }
        list.appendChild(listItem);
    }
    return;
}

input.addEventListener("change", fizzbuzz(input.value));