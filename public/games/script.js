// Retrieve information from URL (pulled from gpt);
const currentUrl = window.location.href;
const url = new URL(currentUrl);
const params = new URLSearchParams(url.search);
const score = params.get("score");
const playerName = params.get("playerName");

// Example usage
// console.log("Current URL:", currentUrl);
// console.log("Value of paramName:", playerName);

const scoreElement = document.getElementById("score");

scoreElement.innerHTML = `${playerName} scored a total of ${score} points!`;

//Pulling scoreboard data from Supabase
const data = fetch("http://localhost:3000/supabaseAPI")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((data) => {
      const scoreboardRow = document.createElement("tr");
      scoreboardRow.innerHTML = `
            <td>${data.player_name}</td>
            <td>${data.score}</td>
            <td>${data.difficulty}</td>
            <td>${data.created_at}</td>
        `;
      document.getElementById("scoreboardTableBody").appendChild(scoreboardRow);
      // console.log(data);
    });
  });
