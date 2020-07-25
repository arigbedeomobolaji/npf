//jshint esversion: 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1, randomNumber2);
$(".firstNum").text(randomNumber1);
$(".secondNum").text(randomNumber2);
