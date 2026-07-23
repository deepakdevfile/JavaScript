const fs = document.getElementById("fs");

function checkFileSize() {
    const files = fs.files;
    if (files.length > 0) {
        if (files[0].size > 75 * 1000) {
            fs.setCustomValidity("The selected file must not be larger than 75 kB");
            fs.reportValidity();
            return;
        }
    }
    // No custom constraint violation
    fs.setCustomValidity("");
}

fs.addEventListener("change", checkFileSize);