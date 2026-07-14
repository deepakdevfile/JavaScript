let myRange = document.querySelector("#myRange");
myRange.addEventListener('input', () => {
    const html = document.querySelector('html');
    html.style.fontSize = myRange.value + 'px';
})