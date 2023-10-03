var colouredBox = document.getElementById('box');
var classOfColour = document.getElementsByClassName('color-box')[0];

function changeBG() {
    colouredBox.innerText = "Clicked"
    var color = window.getComputedStyle(classOfColour).backgroundColor;
    var title = document.querySelector('h1');
    title.innerText = "Changed"
    document.body.style.backgroundColor = color;
}

colouredBox.addEventListener('click', changeBG);
