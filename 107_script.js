function toggleBilling(){
    let billingItems = document.querySelectorAll('#billing input[type="text"]');
    for(let item of billingItems){
        item.disabled = !item.disabled;
    }
}

document.getElementById("billing-checkbox").addEventListener("change", toggleBilling);