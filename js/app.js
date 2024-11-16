function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

TITLE_NUM = 5

const titleElement = new TypeIt("#can-not-stop", {
  speed: 100,
});

randomNumber = getRandomInt(TITLE_NUM);

if (randomNumber === 0) {
  titleElement.type("Helo!")
    .pause(500)
    .move(-2)
    .type("l", {delay: 400})
    .move(2)
    .type("😆")
    .go();
} else if (randomNumber === 1) {
  titleElement.type("GPU Poor!")
    .pause(500)
    .move(-2)
    .type("ooooooo", {delay: 400})
    .move(2)
    .type("🥹")
    .go();
} else if (randomNumber === 2) {
  titleElement.type("Something's happening!🤨")
    .pause(500)
    .go();
} else if (randomNumber === 3) {
  titleElement.type("Thank you, Internet 😚")
    .pause(500)
    .go();
} else {
  titleElement.type("I hate math... 😩")
    .go();
}

// add last modified date of web page
const repoName = "notoookay/notoookay.github.io";
const url = `https://api.github.com/repos/${repoName}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const lastCommitDate = new Date(data.pushed_at);
    const options = { year: 'numeric', month: 'long', day: 'numeric'};
    document.getElementById("last-modified").textContent = lastCommitDate.toLocaleDateString("en-US", options);
  });

// Theme switcher
document.querySelector('.switch input').addEventListener('change', function() {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

// Set initial theme
document.documentElement.setAttribute('data-theme', 'dark');
