document.body.style.background = "orange";

var header = document.getElementsByTagName('h1')[0];

var hero = document.getElementsByClassName('Hero')[0];
console.log(hero)
var myImage = new Image(500, 500);
myImage.src = "http://www.placepuppy.net/400/250";
hero.appendChild(myImage);

if (navigator.geolocation) {
    myImage.src = "http://www.placepuppy.net/400/250";
}
else {
    myImage2.src = "https://placekitten.com/200/300";
}


// var header = document.getElementsByClassName("header");

// var newParagraph = document.createElement("p");
// var paragraphText = document.createTextNode("Dogo!");
// newParagraph.appendChild(paragraphText);
// header.appendChild(newParagraph);