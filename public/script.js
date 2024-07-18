const startBtnElement = document.getElementById("startBtn");
const playerNameInputElement = document.getElementById("playerNameInput");

const difficultyDrowdownElement = document.getElementById("difficultyDropdown");

startBtnElement.addEventListener("click", () => {
  const difficulty =
    difficultyDrowdownElement[difficultyDrowdownElement.selectedIndex].value;

  let playerName = playerNameInputElement.value;
  if (playerName == "") {
    playerName = "Skywalker";
  }

  // console.log(difficulty);

  window.location.href = `./games/${difficulty}/game.html?playerName=${playerName}&difficulty=${difficulty}`;
});
