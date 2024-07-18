// Retrieve information from URL (pulled from gpt);
const currentUrl = window.location.href;
const url = new URL(currentUrl);
const params = new URLSearchParams(url.search);
const score = params.get("score");
const playerName = params.get("playerName");

// Example usage
console.log("Current URL:", currentUrl);
console.log("Value of paramName:", playerName);

const heading1Element = document.getElementById("heading1");
const scoreElement = document.getElementById("score");

heading1Element.innerHTML = `Congradulations, ${playerName} for finishing the game!`;
scoreElement.innerHTML = `You scored a total of ${score} points!`;

try {
  console.log("RUNNING POST TRY BLOCK");
  const response = await fetch("http://localhost:3000/supabaseAPI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ score, playerName }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error posting data:", error);
}
