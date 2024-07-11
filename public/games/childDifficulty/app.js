const technologies = [
  {
    techId: 1,
    // technology: "Javascript",
    level: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    techId: 2,
    // technology: "Python",
    level: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    techId: 3,
    // technology: "Visual Studio Code",
    level: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
  },
  {
    techId: 4,
    // technology: "HTML5",
    level: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    techId: 5,
    // technology: "CSS3",
    level: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    techId: 6,
    // technology: "Ruby",
    level: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
  },
  {
    techId: 7,
    // technology: "MySQL",
    level: 2,
    image: "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
  },
  {
    techId: 8,
    // technology: "Postgres",
    level: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
  {
    techId: 9,
    // technology: "Nginx",
    level: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg",
  },
  {
    techId: 10,
    // technology: "Apache",
    level: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Apache_Software_Foundation_Logo_%282016%29.svg",
  },
  {
    techId: 11,
    // technology: "Vim",
    level: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Vimlogo.svg",
  },
  {
    techId: 12,
    // technology: "Emacs",
    level: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Emacs-logo.svg",
  },
  {
    techId: 13,
    // technology: "Java",
    level: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    techId: 14,
    // technology: "Kotlin",
    level: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
  },
  {
    techId: 15,
    // technology: "Swift",
    level: 3,
    image: "https://www.svgrepo.com/show/452110/swift.svg",
  },
  {
    techId: 16,
    // technology: "Dart",
    level: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
  },
  {
    techId: 17,
    // technology: "TypeScript",
    level: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    techId: 18,
    // technology: "Go",
    level: 3,
    image: "https://www.svgrepo.com/show/373635/go-gopher.svg",
  },
  {
    techId: 19,
    // technology: "C#",
    level: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
  },
  {
    techId: 20,
    // technology: "Haskell",
    level: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg",
  },
  {
    techId: 21,
    // technology: "Scala",
    level: 4,
    image: "https://logowik.com/content/uploads/images/scala3486.jpg",
  },
  {
    techId: 22,
    // technology: "Perl",
    level: 4,
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perl-programming-language-icon.png",
  },
  {
    techId: 23,
    // technology: "C",
    level: 5,
    image:
      "https://w7.pngwing.com/pngs/724/306/png-transparent-c-logo-c-programming-language-icon-letter-c-blue-logo-computer-program.png",
  },
  {
    techId: 24,
    // technology: "C++",
    level: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    techId: 25,
    // technology: "Rust",
    level: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
  },
];

let currentIndex = 0;
let revealTechName = false;

const imageElement = document.getElementById("tech-image");
const techNameElement = document.getElementById("tech-name");

function setFirstImg() {
  imageElement.src = technologies[currentIndex].image;
}
setFirstImg();

document.getElementById("next-btn").addEventListener("click", async () => {
  console.log("next button clicked");
  const tech = technologies[currentIndex];

  if (revealTechName) {
    techNameElement.innerHTML = "";
    imageElement.src = tech.image;
    revealTechName = false;
  } else {
    const techId = currentIndex + 1;
    const response = await fetch(
      `http://localhost:3000/answer?techId=${techId}`
    );
    const data = await response.json();
    console.log(data.technology);

    if (currentIndex < technologies.length) {
      techNameElement.innerHTML = await data.technology;

      currentIndex++;
      revealTechName = true;
    }
  }
});
