class Button {
    constructor(value){
        this.value = value;
    }

    // click(){
    //     console.log(this.value);
    // }

    click = () => {
        console.log(this.value);
    }
}

let button = new Button("Hello");
setTimeout(button.click, 5000);