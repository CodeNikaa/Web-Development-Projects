let randomNumber1 = Math.floor(Math.random() * 6 + 1 );

let randomDice1 = `images/dice${randomNumber1}.png`;

let randomNumber2 = Math.floor(Math.random() * 6 + 1 );

let randomDice2 = `images/dice${randomNumber2}.png`;

let setImage1 = document.querySelectorAll("img")[0];
let setImage2 = document.querySelectorAll("img")[1];

setImage1.setAttribute("src", randomDice1);
setImage2.setAttribute("src", randomDice2);

if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else {
    document.querySelector("h1").innerHTML = "DRAW, no one wins!"
}
