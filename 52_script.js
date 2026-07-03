let input = document.querySelector("input");
let list = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    let item = input.value;
    input.value = "";

    let listItem = document.createElement("li");
    let span = document.createElement("span");
    let btn2 = document.createElement("button");

    listItem.append(span);
    span.textContent = item;
    listItem.append(btn2);
    btn2.textContent = "Delete";
    list.append(listItem);
    
    btn2.addEventListener("click", (e) => {
        listItem.remove();
    })
    input.focus();

    // let item = document.createElement("li");
    // console.log(input.value);    
    // item.text = input.value;
    // console.log(item);
    // list.appendChild(item);
});

