// left dice

function generateRandom() {
    let randomNumber = Math.random();
    randomNumber = randomNumber * 6;
    randomNumber = Math.floor(randomNumber) + 1;
    return randomNumber;
}

function rollDice(randomNum, elementClass) {
    document.querySelector(`.${elementClass}`).setAttribute("src", `images/dice${randomNum}.png`);
}

const randomNumber1 = generateRandom();
const randomNumber2 = generateRandom();

rollDice(randomNumber1, "img1");
rollDice(randomNumber2, "img2");


function changeHeading(randomNumber1, randomNumber2) {
    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
}
changeHeading(randomNumber1, randomNumber2);