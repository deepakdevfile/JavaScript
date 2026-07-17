function createGame(name){
    let score = 0;

    return function win(){
        score++;
        return `Your name ${name} score is ${score}`;
    }
}

let hockeyGame = createGame("Hockey");
let scoccerGame = createGame("Soccer");

console.log(hockeyGame());
console.log(hockeyGame());
console.log(hockeyGame());

scoccerGame();
scoccerGame();
scoccerGame();
scoccerGame();