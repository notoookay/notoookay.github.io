function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

TITLE_NUM = 3

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
  titleElement.type("More power!")
    .pause(500)
    .move(-6)
    .type("compute ", {delay: 400})
    .move(6)
    .type("👀")
    .go();
} else if (randomNumber === 2) {
  titleElement.type("Something's happening!🤨")
    .pause(500)
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
