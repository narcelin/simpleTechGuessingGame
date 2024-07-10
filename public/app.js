// technonoly name would need to be removed from the object below
const technologies = [
  {
    technology: "Javascript",
    level: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    technology: "Python",
    level: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    technology: "Visual Studio Code",
    level: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
  },
  {
    technology: "HTML5",
    level: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    technology: "CSS3",
    level: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    technology: "Ruby",
    level: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
  },
  {
    technology: "MySQL",
    level: 2,
    image: "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
  },
  {
    technology: "Postgres",
    level: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
  {
    technology: "Nginx",
    level: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg",
  },
  {
    technology: "Apache",
    level: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Apache_Software_Foundation_Logo_%282016%29.svg",
  },
  {
    technology: "Vim",
    level: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Vimlogo.svg",
  },
  {
    technology: "Emacs",
    level: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Emacs-logo.svg",
  },
  {
    technology: "Java",
    level: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    technology: "Kotlin",
    level: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
  },
  {
    technology: "Swift",
    level: 3,
    image: "https://www.svgrepo.com/show/452110/swift.svg",
  },
  {
    technology: "Dart",
    level: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
  },
  {
    technology: "TypeScript",
    level: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    technology: "Go",
    level: 3,
    image: "https://www.svgrepo.com/show/373635/go-gopher.svg",
  },
  {
    technology: "C#",
    level: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
  },
  {
    technology: "Haskell",
    level: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg",
  },
  {
    technology: "Scala",
    level: 4,
    image: "https://logowik.com/content/uploads/images/scala3486.jpg",
  },
  {
    technology: "Perl",
    level: 4,
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perl-programming-language-icon.png",
  },
  {
    technology: "C",
    level: 5,
    image:
      "https://w7.pngwing.com/pngs/724/306/png-transparent-c-logo-c-programming-language-icon-letter-c-blue-logo-computer-program.png",
  },
  {
    technology: "C++",
    level: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    technology: "Rust",
    level: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
  },
];

let currentIndex = 0;
let revealTechName = false;

document.getElementById("next-btn").addEventListener("click", async () => {
  const image = document.getElementById("tech-image");
  const techName = document.getElementById("tech-name");

  if (revealTechName) {
    techName.style.opacity = 1;
    revealTechName = false;
  } else {
    const techId = "25";
    const response = await fetch(
      `http://localhost:3000/answer?techId=${techId}`
    );
    const data = await response.json();
    console.log(data);

    if (currentIndex < technologies.length) {
      const tech = technologies[currentIndex];

      image.src = tech.image;
      image.style.opacity = 1;
      techName.style.opacity = 0;
      techName.textContent = tech.technology;

      currentIndex++;
      revealTechName = true;
    }
  }
});
