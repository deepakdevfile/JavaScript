const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

function createCalendar(month){
    let days;

    switch(month){
        case "Janurary":
            days = 31;
            break;
        case "Feburary":
            days = 28;
            break;
        case "March":
            days = 31;
            break;
        case "April":
            days = 30;
            break;
        case "May":
            days = 31;
            break;
        case "June":
            days = 30;
            break;
        case "July":
            days = 31;
            break;
        case "August":
            days = 31;
            break;
        case "September":
            days = 30;
            break;
        case "Octomber":
            days = 31;
            break;
        case "November":
            days = 30;
            break;
        case "December":
            days = 31;
            break;
        default: 
            days = 0;
    }

    list.textContent = "";
    h1.textContent = month;
    for(let i = 1; i <= days; i++){
        const listItem = document.createElement("li");
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

select.addEventListener("change", () => {
    const choice = select.value;
    createCalendar(choice);
});