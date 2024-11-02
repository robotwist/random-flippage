document.getElementById("headsBtn").addEventListener("click", () => playGame("Heads"));
document.getElementById("tailsBtn").addEventListener("click", () => playGame("Tails"));

function playGame(playerChoice) {
  const options = ["Heads", "Tails"];
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  const resultDiv = document.getElementById("result");
  const coinImage = document.getElementById("coinImage");
  coinImage.style.transform = "rotateY(180deg)"; // Flip the coin

  setTimeout(() => {
      coinImage.style.transform = "rotateY(0deg)";
  }, 1000);

  if (playerChoice === computerChoice) {
    resultDiv.textContent = `It's ${computerChoice}! You win!`;
  } else {
    resultDiv.textContent = `It's ${computerChoice}. You suck :.()`;
    document.getElementById("loseSound").play();
  }
}