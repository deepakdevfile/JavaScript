function Book(title, auther, pages, read){
    this.title = title;
    this.auther = auther;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        console.log(`The ${this.title} by ${this.auther}, ${this.pages} pages, Read book ${this.read}`);
        return ;
    }
};

let hobbit = new Book("Hobbit", "J.R.R.Tolkien", 295, "yes");
hobbit.info();

function Player(name, marker, level){
    this.name = name;
    this.marker = marker;
    this.level = level;
    
    this.info = function(){
        console.log(this.name + " " + this.marker);
    };
}

let player1 = new Player("bob", "X", 100);
console.log(player1.name);
console.log(player1.marker);
console.log(player1.level);
player1.info();