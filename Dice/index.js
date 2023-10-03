document.addEventListener('DOMContentLoaded', function() {
    var diceImages = [
        'images/dice1.png',
        'images/dice2.png',
        'images/dice3.png',
        'images/dice4.png',
        'images/dice5.png',
        'images/dice6.png'
    ];

    var img1Random = Math.floor(Math.random() * 6);
    var img2Random = Math.floor(Math.random() * 6);

    // Select the image elements
    var img1 = document.querySelector('.img1');
    var img2 = document.querySelector('.img2');

    //Change title
    if (img1Random > img2Random) {
        document.querySelector('h1').innerText = "Abhishek Wins" 
    }
    if (img1Random < img2Random) {
        document.querySelector('h1').innerText = "Aradhna Wins" 
    }
    if (img1Random == img2Random) {
        document.querySelector('h1').innerText = "Draw" 
    }
    // Set the source attribute of the image elements based on the random values
    img1.setAttribute('src', diceImages[img1Random]);
    img2.setAttribute('src', diceImages[img2Random]);
});
