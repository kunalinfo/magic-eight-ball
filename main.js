
let userQuestion = 'When will i find love?';

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

if (randomNumber === 0){
  eightBall = 'You will find love in this Christmas.';
}else if (randomNumber === 1){
  eightBall = 'You will find love in 2018.';
}else if (randomNumber === 2){
  eightBall = 'You will find love in 2019.';
}else if(randomNumber === 3){
  eightBall = 'You will find love in 2020.';
}else if(randomNumber === 4){
  eightBall = 'You will find love in 2021.';
}else if(randomNumber === 5){
  eightBall = 'You will find love in 2022.';
}else if(randomNumber === 6){
  eightBall = 'You will find love in 2023.';
}else { 
  eightBall = 'You will never find love.';
}

console.log(userQuestion);

console.log(eightBall);
