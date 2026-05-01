function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Typed title: only runs on pages that include the #can-not-stop element
// and have loaded the TypeIt library.
const titleTarget = document.getElementById("can-not-stop");
if (titleTarget && typeof TypeIt !== "undefined") {
  const TITLE_NUM = 5;
  const titleElement = new TypeIt("#can-not-stop", {
    speed: 100,
  });
  const randomNumber = getRandomInt(TITLE_NUM);

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
}

// Last modified date: only runs on pages that include the #last-modified element.
const lastModifiedEl = document.getElementById("last-modified");
if (lastModifiedEl) {
  const repoName = "notoookay/notoookay.github.io";
  const url = `https://api.github.com/repos/${repoName}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const lastCommitDate = new Date(data.pushed_at);
      const options = { year: 'numeric', month: 'long', day: 'numeric'};
      lastModifiedEl.textContent = lastCommitDate.toLocaleDateString("en-US", options);
    });
}

// Theme switcher: only bind if the toggle exists on this page.
const themeToggle = document.querySelector('.switch input');
if (themeToggle) {
  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });
}

// Set initial theme
document.documentElement.setAttribute('data-theme', 'dark');

// Click anywhere inside a BibTeX block to select all of its content.
// If the user is making a manual selection (drag), don't override it.
document.querySelectorAll('.paper-entry details.bibtex pre').forEach(pre => {
  pre.addEventListener('click', () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) return;
    const range = document.createRange();
    range.selectNodeContents(pre);
    selection.removeAllRanges();
    selection.addRange(range);
  });
});
