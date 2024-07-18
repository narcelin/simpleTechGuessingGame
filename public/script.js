// For testing purposes only

const testBtnElement = document.getElementById("testBtn");
testBtnElement.addEventListener("click", async () => {
  // const data = await fetch("http://localhost:3000/supabaseAPI");
  // const convertedData = await data.json();
  // console.log(convertedData);

  const score = 100000;
  const playerName = "Jack Black";

  try {
    const response = await fetch("http://localhost:3000/supabaseAPI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ score, playerName }),
    });
    console.log(response);
  } catch (error) {
    console.error("Error: ", error.message);
  }
});
/*














*/

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

  window.location.href = `./games/${difficulty}/game.html?playerName=${playerName}`;
});
