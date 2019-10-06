$(document).ready(function() {
  let firstNumber = Math.floor(Math.random() * Math.floor(100));
  let playerScore = 0;
  let wins = 0;
  let losses = 0;

  $("#greenBox").append("<h1>" + firstNumber + "</h1>");

  $("#redRuby").on("click", function() {
    if (playerScore > firstNumber) {
      alert("You lose!");
      playerScore = 0;
      losses++;
      $("#lossehs").html("<p> Losses: " + losses + "</p>");
    } else if (playerScore === firstNumber) {
      alert("You win!");
      playerScore = 0;
      wins++;
      $("#weens").html("<p> Wins: " + wins + "</p>");
    } else {
      playerScore += 5;
      $("#scoreCount").html("<h1>" + playerScore + "</h1>");
    }
  });

  $("#blueDiamond").on("click", function() {
    if (playerScore > firstNumber) {
      alert("You lose!");
      playerScore = 0;
      losses++;
      $("#lossehs").html("<p> Losses: " + losses + "</p>");
    } else if (playerScore === firstNumber) {
      alert("You win!");
      playerScore = 0;
      wins++;
      $("#weens").html("<p> Wins: " + wins + "</p>");
    } else {
      playerScore += 3;
      $("#scoreCount").html("<h1>" + playerScore + "</h1>");
    }
  });

  $("#yellowGem").on("click", function() {
    if (playerScore > firstNumber) {
      alert("You lose!");
      playerScore = 0;
      losses++;
      $("#lossehs").html("<p> Losses: " + losses + "</p>");
    } else if (playerScore === firstNumber) {
      alert("You win!");
      playerScore = 0;
      wins++;
      $("#weens").html("<p> Wins: " + wins + "</p>");
    } else {
      playerScore += 2;
      $("#scoreCount").html("<h1>" + playerScore + "</h1>");
    }
  });
  $("#greenGem").on("click", function() {
    if (playerScore > firstNumber) {
      alert("You lose!");
      playerScore = 0;
      losses++;
      $("#lossehs").html("<p> Losses: " + losses + "</p>");
    } else if (playerScore === firstNumber) {
      alert("You win!");
      playerScore = 0;
      wins++;
      $("#weens").html("<p> Wins: " + wins + "</p>");
    } else {
      playerScore += 7;
      $("#scoreCount").html("<h1>" + playerScore + "</h1>");
    }
  });
});
