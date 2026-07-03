function highlight(elem) {
    elem.style.backgroundColor = 'yellow';

    let event = new CustomEvent('mark', {
        detail: {
            backgroundColor: 'yellow'
        }
    });

    elem.dispatchEvent(event);
}

let div = document.querySelector('.note');

function addBorder(elem) {
    elem.style.border = "4px solid red";
    elem.style.padding = "8px";
}

div.addEventListener('mark', function(e){
    addBorder(this);
    console.log(e.detail);
});

highlight(div);