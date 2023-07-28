



// player 1

     var randomNumber1 = Math.random();
     randomNumber1 = randomNumber1 * 7;
     randomNumber1 = Math.floor(randomNumber1);

     var randomDiceNumber = 'dice' + randomNumber1 + '.png' //  dice1 - 6
     var randomImageSource = 'images/' + randomDiceNumber; // images/dice1 - imagesdice2

     var image1 = document.querySelectorAll('img')[0].setAttribute('src', randomImageSource);


//  player 2

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 7;
randomNumber2 = Math.floor(randomNumber2);

var randomDiceNumber = 'dice' + randomNumber2 + '.jpeg' //dice1 -dice6
var randomImageSource2 = 'images/' + randomDiceNumber; //images/dice1 - .../dice6
var image2 = document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);



if (randomNumber1 > randomNumber2) {
     document.querySelector('h1').innerHTML = "Player1 wins";
} else if (randomNumber1 < randomNumber2) {
     document.querySelector('h1').innerHTML = "Player2 wins";
} else {
     document.querySelector('h1').innerHTML = "Draw";
}












``













