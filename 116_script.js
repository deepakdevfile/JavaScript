let email = document.getElementById("email");
let form = document.getElementsByTagName("form")[0];
let emailError = document.querySelector("#email + span.error")

email.addEventListener("input", (e) => {
    if(email.validity.valid){
        emailError.innerHTML = "";
        emailError.className = "error";
    } else{
        showError();
    }
});

form.addEventListener("submit", (e) => {
    if(!email.validity.valid){
        showError();
        e.preventDefault();
    }
});

function showError(){
    if(email.validity.valueMissing){
        emailError.textContent = "You need to enter an email address.";
    } else if(email.validity.typeMismatch){
        emailError.textContent = "Entered value needs to be an email address.";
    } else if(email.validity.tooShort){
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    emailError.className = "error active";
}