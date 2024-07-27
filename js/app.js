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
    .type("ooooooo ", {delay: 400})
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

document.addEventListener('DOMContentLoaded', (event) => {
  const themeSwitch = document.getElementById('theme-switch');
  const body = document.body;
  const container = document.querySelector('.container');

  // Check for saved theme preference or default to light-mode
  const currentTheme = localStorage.getItem('theme') || 'light-mode';
  body.classList.add(currentTheme);
  themeSwitch.checked = currentTheme === 'dark-mode';

  // Theme switch event listener
  themeSwitch.addEventListener('change', function() {
    const newTheme = this.checked ? 'dark-mode' : 'light-mode';
    const oldTheme = this.checked ? 'light-mode' : 'dark-mode';

    // Add transition classes
    body.classList.add('theme-transition');
    container.classList.add('theme-transition');

    // Create and add Impressionist-inspired brush strokes
    const brushStrokes = createImpressionistBrushStrokes();
    body.appendChild(brushStrokes);

    // Apply theme change with a smooth transition
    setTimeout(() => {
      body.classList.remove(oldTheme);
      body.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);

      // Update colors of brush strokes based on the new theme
      updateBrushStrokeColors(newTheme);

      // Remove transition classes and brush strokes after animation
      setTimeout(() => {
        body.classList.remove('theme-transition');
        container.classList.remove('theme-transition');
        body.removeChild(brushStrokes);
      }, 2000); // Increased duration for a more noticeable effect
    }, 50);
  });
});

function createImpressionistBrushStrokes() {
  const brushStrokes = document.createElement('div');
  brushStrokes.className = 'impressionist-brush-strokes';
  const colors = ['#F4A460', '#DAA520', '#CD853F', '#D2691E', '#8B4513']; // Earthy, Impressionist-inspired colors
  for (let i = 0; i < 8; i++) { // Increased number of brush strokes
    const stroke = document.createElement('div');
    stroke.className = 'impressionist-brush-stroke';
    stroke.style.left = `${Math.random() * 100}%`;
    stroke.style.top = `${Math.random() * 100}%`;
    stroke.style.transform = `rotate(${Math.random() * 360}deg)`;
    stroke.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    stroke.style.animationDelay = `${i * 0.15}s`; // Slightly increased delay between strokes
    brushStrokes.appendChild(stroke);
  }
  return brushStrokes;
}

function updateBrushStrokeColors(theme) {
  const strokes = document.querySelectorAll('.impressionist-brush-stroke');
  const lightColors = ['#F4A460', '#DAA520', '#CD853F', '#D2691E', '#8B4513'];
  const darkColors = ['#4B0082', '#483D8B', '#6A5ACD', '#7B68EE', '#9370DB'];
  const colors = theme === 'dark-mode' ? darkColors : lightColors;
  strokes.forEach(stroke => {
    stroke.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  });
}
