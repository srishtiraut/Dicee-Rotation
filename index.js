document.querySelector("h1").innerHTML = "Refresh me!";

//FOR FIRST PLAYER
var randomNumber1 = Math.floor(((Math.random())*6))+1;
          //generates a random number between 1 and 6

var randomImage = "dice"+randomNumber1+".png";
          //generates a string for image name like dice1.png to dice6.png

var imageSelector = "images/"+randomImage;
          //generates a string for source of above image

var image1 = document.querySelectorAll("img")[0];
          //returns the zero-th element from an array of all img tags into variable image1

image1.setAttribute("src",imageSelector);
          // sets the src of image1 to the picture associated with the random number


//DOING THE SAME PROCESS FOR SECOND PLAYER
var randomNumber2 = Math.floor(((Math.random())*6))+1;

var randomImage2 = "dice"+randomNumber2+".png";

var imageSelector2 = "./images/"+randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",imageSelector2);

//DISPLAYING WINNER AFTER EVERY REFRESH

if(randomNumber1>randomNumber2){

document.querySelector("h1").innerHTML = "🚩 Player 1 wins!!";

}else if (randomNumber1<randomNumber2) {

document.querySelector("h1").innerHTML = "🏳️‍🌈 Player 2 wins!!";

}else{
  document.querySelector("h1").innerHTML = "🎌 Draw.";
}
