const titleElement = new TypeIt("#can-not-stop", {
  speed: 200,
});

titleElement.type("Helo!")
  .pause(500)
  .move(-2)
  .type("l", {delay: 400})
  .move(2)
  .go();

// add last modified date of web page
const repoName = "notoookay/notoookay.github.io";
const url = `https://api.github.com/repos/${repoName}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const lastCommitDate = new Date(data.pushed_at);
    document.getElementById("last-modified").textContent = lastCommitDate.toLocaleDateString();
  });
