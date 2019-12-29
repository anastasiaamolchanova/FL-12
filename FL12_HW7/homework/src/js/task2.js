let game = confirm('Do you want to play a game?');
let i = 0;
let userNumber;
let maxPrize = 100;
let number = 9;
let attempts = 3;
let secondPrize = 50;
let thirdPrize = 25;
let prize = 0;
let currAttempt = [maxPrize, secondPrize, thirdPrize];
let totalPrize = 0;
let secondGame;

if (game === false) {
    alert('You did not become a billionaire, but can.');
} else {
    while (game === true) {
        let randomNumber = Math.floor(Math.random() * number);
        alert(randomNumber);

        for (i = 0; i < attempts; i++) {
            userNumber = Number(prompt('Enter a number from 0 to ' + (number - 1) +
                '\nAttempts left: ' + (attempts - i) + '\nTotal prize: ' +
                totalPrize + '\nPrize on current attempt: ' + currAttempt[i] + '$'));

            if (!userNumber) {
                game = false;
                console.log('canceled');
                break;
            }

            if (userNumber === randomNumber) {
                if (i + 1 === 1) {
                    prize = maxPrize;
                    totalPrize = prize;
                } else if (i + 1 === 2) {
                    prize = secondPrize;
                    totalPrize = prize;
                } else if (i + 1 === 3) {
                    prize = thirdPrize;
                    totalPrize = prize;
                } else {
                    prize = 0;
                }

                alert('Congratulation, you won! Your prize is: ' + prize);

                let secondGame = confirm('Do you want to continue?');

                if (secondGame === true) {

                    let randomNumber = Math.floor(Math.random() * number);
                    console.log(randomNumber);
                    number += 4;
                    maxPrize *= 2;
                    secondPrize *= 2;
                    thirdPrize *= 2;
                    currAttempt[i] *= 2;

                    if (i > 0) {
                        i = 0;
                        i--;
                    }
                } else if (!secondGame) {
                    game = false;
                    break;
                }

            } else if (userNumber !== randomNumber && i + 1 === attempts) {
                alert('Thank you for your participation. Your prize is: ' + prize + '$');
                game = false;
                let newGame = confirm('Do you want to play again?');
                if (newGame === true) {
                    game = true;
                    totalPrize = 0;
                    number = 9;
                } else if (!newGame) {
                    break;
                }
            }
        }
    }
}