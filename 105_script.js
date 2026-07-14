const contacts = [
    { name: "Aisha Khan", selected: false },
    { name: "Bisha Khan", selected: false },
    { name: "Cisha Khan", selected: false },
    { name: "Disha Khan", selected: false },
    { name: "Eisha Khan", selected: false },
    { name: "Fisha Khan", selected: false },
    { name: "Gisha Khan", selected: false },
    { name: "Hisha Khan", selected: false },
    { name: "Iisha Khan", selected: false },
    { name: "Jisha Khan", selected: false },
    { name: "Kisha Khan", selected: false },
    { name: "Lisha Khan", selected: false },
    { name: "Misha Khan", selected: false },
    { name: "Nisha Khan", selected: false },
    { name: "Oisha Khan", selected: false },
    { name: "Pisha Khan", selected: false },
];

let filterInput = document.querySelector(".filter input");
let select = document.querySelector("select");

function populateOptions(array){
    select.innerHTML = "";
    array.forEach((obj) => {
        let option = document.createElement("option")
        option.textContent = obj.name;
        option.selected = obj.selected;
        select.appendChild(option);
    });
}

function filterOptions(filter, array){
    if(filter.trim() === ""){
        populateOptions(array);
    } else{
        let filteredArray = array.filter((obj) => {
            return obj.name.toLowerCase().startsWith(filter.toLowerCase());
        });
        populateOptions(filteredArray);
    }
}

filterInput.addEventListener("input", () => {
    filterOptions(filterInput.value, contacts);
});

select.addEventListener("change", () => {
    let allCurrentValues = Array.from(select.options).map(
        (option) => option.value,
    );

    let currentSelectedValues = Array.from(select.selectedOptions).map(
        (option) => {
            return option.value;
        }
    );

    contacts.forEach((contact) => {
        if (allCurrentValues.includes(contact.name)){
            contact.selected = currentSelectedValues.includes(contact.name);
        }
    });
});

populateOptions(contacts);