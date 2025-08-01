const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");

const imageMap = {
  STONE: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

options.forEach((option) => {
  option.addEventListener("click", () => {
    computer.classList.add("shakeComputer");
    player.classList.add("shakePlayer");

    setTimeout(() => {
      computer.classList.remove("shakeComputer");
      player.classList.remove("shakePlayer");

      const playerChoice = option.innerHTML;
      const choices = ["STONE", "PAPER", "SCISSORS"];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      // Set the correct image sources
      player.src = `./assets/${imageMap[playerChoice]}Player.png`;
      computer.src = `./assets/${imageMap[computerChoice]}Computer.png`;

      // Scoring logic
      let cPoints = parseInt(computerPoints.innerHTML);
      let pPoints = parseInt(playerPoints.innerHTML);

      if (playerChoice === "STONE") {
        if (computerChoice === "PAPER") computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "SCISSORS") playerPoints.innerHTML = pPoints + 1;
      } else if (playerChoice === "PAPER") {
        if (computerChoice === "SCISSORS") computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "STONE") playerPoints.innerHTML = pPoints + 1;
      } else {
        if (computerChoice === "STONE") computerPoints.innerHTML = cPoints + 1;
        else if (computerChoice === "PAPER") playerPoints.innerHTML = pPoints + 1;
      }
    }, 900);
  });
});
