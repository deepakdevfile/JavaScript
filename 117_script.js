let form = document.getElementsByTagName("form")[0];
let email = document.querySelector("#email");
let error = document.querySelector("#error");

let emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

let isValidEmail = () => {
    let validity = email.value.length !== 0 && emailRegExp.test(email.value);
    return validity;
}

let setEmailClass = (isValid) => {
    email.className = isValid ? "valid" : "invalid";
}

let updateError = (isValid) => {
    if(isValid) {
        error.textContent = "";
        error.removeAttribute("class");
    } else{
        error.textContent = "I expect an email, darling!";
        error.setAttribute("class", "active");
    }
}

let handleInput = () => {
    let validity = isValidEmail();
    setEmailClass(validity);
    updateError(validity);
}

let handleSubmit = (e) => {
    e.preventDefault();
    let validity = isValidEmail();
    setEmailClass(validity);
    updateError(validity);
}

let validity = isValidEmail();
setEmailClass(validity);
email.addEventListener("input", handleInput);
email.addEventListener("submit", handleSubmit);