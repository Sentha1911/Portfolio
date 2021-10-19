let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getCompChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

function convertToWord(letter){
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, CompChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(CompChoice)}You win!`;
  duserChoice_div.classList.add('green-glow');
  setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 3000);
}



function lose(userChoice, CompChoice){
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} loses ${convertToWord(CompChoice)}You lose!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 3000);
}

function draw(userChoice, CompChoice){
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} eqauls ${convertToWord(CompChoice)}Tie!`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(function() {userChoice_div.classList.remove('gray-glow')}, 3000);

}

function game(userChoice) {
const CompChoice = getCompChoice();
switch (userChoice + CompChoice) {
  case "rp":
  case "pr":
  case "sp":
    win(userChoice, CompChoice);
    break;
  case "rp":
  case "ps":
  case "sr":
    lose(userChoice, CompChoice);
    break;
  case "rr":
  case "ss":
  case "pp":
    draw(userChoice, CompChoice);
    break;
  }
}


function main(){
rock_div.addEventListener('click', function(){
  game("r");
})

paper_div.addEventListener('click', function(){
  game("p");
})

scissor_div.addEventListener('click', function(){
  game("s");
})
}
