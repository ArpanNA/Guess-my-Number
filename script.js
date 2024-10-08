"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number🎉";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 30;
// document.querySelector(".score").textContent = 11;

// document.querySelector(".guess").value = 232;
// console.log(document.querySelector(".guess").value);
let myNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector(".message").textContent =
    //   "Guess the Number SmartAss👹";
    displayMessage("Guess the Number SmartAss👹");
  } else if (guess === myNumber) {
    // document.querySelector(".message").textContent =
    //   "You guessed The correct Number🎉";
    displayMessage("You guessed The correct Number🎉");
    document.querySelector("body").style.backgroundColor = "#68b347";
    document.querySelector(".number").textContent = myNumber;

    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== myNumber) {
    if (score > 0) {
      // document.querySelector(".message").textContent =
      //   guess > myNumber ? "Too High📈 " : "Too Low📉 ";
      displayMessage(guess > myNumber ? "Too High📈 " : "Too Low📉 ");
      score--;

      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You are a Loser🤡");
      // document.querySelector(".message").textContent = "You are a Loser🤡";
      document.querySelector(".score").textContent = 0;
    }
  }
  // } else if (guess > myNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "Too Low 📈";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You are a Loser🤡";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  //  else if (guess < myNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "Too Low📉";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You are a Loser🤡";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    myNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector(".message").textContent = "Start Guessing...";
    displayMessage("Start Guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".number").style.width = "15rem";
  });
});
