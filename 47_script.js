let msg = document.querySelector('#message');

msg.addEventListener("keydown", (e) => {
    console.log(`key = ${e.key}, code=${e.code}`);
})

msg.addEventListener("keypress", (e) => {
    console.log(`key = ${e.key}, code=${e.code}`);
})

msg.addEventListener("keyup", (e) => {
    console.log(`key = ${e.key}, code=${e.code}`);
});