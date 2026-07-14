let email = document.getElementById("email");

email.addEventListener("input", (e) => {
    if (email.validity.typeMismatch){
        email.setCustomValidity("Expecting email address!");
    } else{
        email.setCustomValidity("");
    }
});

// let form = document.querySelectorAll("form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
// })

let mail = document.getElementById("mail");
mail.addEventListener("input", (e) => {
    mail.setCustomValidity("");
    if(!mail.validity.valid){
        return;
    }

    if(!mail.value.endsWith("@example.com")){
        mail.setCustomValidity("Please enter email address of @exaple.com");
    }
})


