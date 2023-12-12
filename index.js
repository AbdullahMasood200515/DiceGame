document.addEventListener('DOMContentLoaded', function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];

    image1.setAttribute('src', `dice${randomNumber1}.png`);
    image2.setAttribute('src', `dice${randomNumber2}.png`);

    if(randomNumber1>randomNumber2){
        document.querySelector('.heading').innerHTML = "Player 1 Wins!";
    }
    else if(randomNumber2>randomNumber1){
        document.querySelector('.heading').innerHTML = "Player 2 Wins!";
    }
    else if(randomNumber1 == randomNumber2){
        document.querySelector('.heading').innerHTML = "Its a Draw!";
    }
});
