// CLOCK
const clockValueElement = document.getElementById("clockValue");
setInterval(function () {
  clockValueElement.innerHTML = parseInt(clockValueElement.innerHTML) + 1;
}, 1000);

// Creating tech id list to randomize technologies
let int = 1;
let technologyIds = [];
while (technologyIds.length < 25) {
  technologyIds.push(int);
  int = int + 1; //int++ gives me a weird error. Skips int = 5
}

let techId;
function randomizeTechId() {
  const techIdIndex = Math.ceil(Math.random() * (technologyIds.length - 1));
  techId = technologyIds[techIdIndex];
  technologyIds = technologyIds.filter((id) => id !== techId);
}
randomizeTechId();

const scoreValueElement = document.getElementById("scoreValue");
const correctAnswerPoints = 1; // This value will change depending on difficulty

let revealTechName = false;
let answer = "";

const imageElement = document.getElementById("tech-image");
const techNameElement = document.getElementById("tech-name");

const optionBtn1Element = document.getElementById("optionBtn1");
const optionBtn2Element = document.getElementById("optionBtn2");

async function setFirstImg() {
  const response = await fetch(`http://localhost:3000/answer?techId=${techId}`);
  const data = await response.json();

  imageElement.src = data.image;
}
setFirstImg();

// Sets innerHTML content for the buttons
// Wont be able to tell the answer once I shuffle techId and its corresponding image
async function setOptions() {
  // Getting random tech name for other options
  const randomNumber0To25 = Math.ceil(Math.random() * 25);
  const randomTechNameResponse = await fetch(
    `http://localhost:3000/answer?techId=${randomNumber0To25}`
  );
  const randomTechName = await randomTechNameResponse.json();

  // Grabbing answer for option

  const response = await fetch(`http://localhost:3000/answer?techId=${techId}`);
  const data = await response.json();
  // console.log(data);
  answer = data.technology;

  if (Math.floor(Math.random() * 2)) {
    optionBtn1Element.innerHTML = randomTechName.technology;
    optionBtn2Element.innerHTML = data.technology;
  } else {
    optionBtn1Element.innerHTML = data.technology;
    optionBtn2Element.innerHTML = randomTechName.technology;
  }
}
setOptions();

async function correctAnswerChosen() {
  scoreValueElement.innerHTML =
    parseInt(scoreValueElement.innerHTML) + correctAnswerPoints;

  if (technologyIds.length == 0) {
    const finalScore = scoreValueElement.innerHTML;

    // Get player name from URL
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const params = new URLSearchParams(url.search);
    const playerName = params.get("playerName");

    window.location.href = `./../endGame.html?score=${finalScore}&playerName=${playerName}`;
    console.log("END GAME");
    return;
  }

  // Change for next technology. Will need to adapt this to randomise
  // For now I will keep it simple
  // techId++;
  randomizeTechId();
  const response = await fetch(`http://localhost:3000/answer?techId=${techId}`);
  const data = await response.json();
  if (!response.ok) {
    console.log("technologyIds: ", technologyIds);
    console.log("techId: ", techId);
  }
  imageElement.src = data.image;
  setOptions();
}

optionBtn1Element.addEventListener("click", async () => {
  if (optionBtn1Element.innerHTML == answer) {
    correctAnswerChosen();
    console.log("CORRECT");
  } else {
    alert("Wrong, try again");
  }
});

optionBtn2Element.addEventListener("click", async () => {
  if (optionBtn2Element.innerHTML == answer) {
    correctAnswerChosen();
  } else {
    alert("Wrong, try again");
  }
});

// OLD
// document.getElementById("next-btn").addEventListener("click", async () => {
//   console.log("next button clicked");
//   const tech = technologies[currentIndex];

//   if (revealTechName) {
//     techNameElement.innerHTML = "";
//     imageElement.src = tech.image;
//     revealTechName = false;
//   } else {
//     const techId = currentIndex + 1;
//     const response = await fetch(
//       `http://localhost:3000/answer?techId=${techId}`
//     );
//     const data = await response.json();
//     console.log(data.technology);

//     if (currentIndex < technologies.length) {
//       techNameElement.innerHTML = await data.technology;

//       currentIndex++;
//       revealTechName = true;
//     }
//   }
// });
