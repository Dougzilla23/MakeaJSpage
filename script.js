document.body.style.background = "orange";

// var header = document.getElementsByTagName('h1')[0];
var header = document.getElementById("header")[0] ;
var newParagraph = document.createElement("p");
var paragraphText = document.createTextNode("Dogo!");
newParagraph.appendChild(paragraphText);
console.log(newParagraph);

var hero = document.getElementsByClassName('Hero')[0];
console.log(hero)
var myImage = new Image(500, 500);
myImage.src = "http://www.placepuppy.net/400/250";
hero.appendChild(myImage);

if (navigator.geolocation) {
   console.log(myImage);
}
else {
    console.log(myImage);
}


// var header = document.getElementsByClassName("header");

// var newParagraph = document.createElement("p");
// var paragraphText = document.createTextNode("Dogo!");
// newParagraph.appendChild(paragraphText);
// header.appendChild(newParagraph);  if (Modernizr.awesomeNewFeature) {
    // if (Modernizr.awesomeNewFeature) {
    //     showOffAwesomeNewFeature();
    //   } else {
    //     getTheOldLameExperience();
    //   }