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
