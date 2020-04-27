
var randomNum1 = Math.floor(Math.random(1) * 7);

var ransomDiceImage = "dice" + randomNum1 + ".png";

var randomImageSrc = "images/" + ransomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);


var randomNum2 = Math.floor(Math.random(1) * 7);

var ransomDiceImage2 = "dice" + randomNum2 + ".png";

var randomImageSrc2 = "images/" + ransomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if(randomNum1 > randomNum2)
{
  document.querySelector("h1").innerHTML = "Player 1 is a winner!";
}
else if (randomNum1 < randomNum2)
{
  document.querySelector("h1").innerHTML = "Player 2 is a winner!";
}
else
{
  document.querySelector("h1").innerHTML = "Draw!";
}
