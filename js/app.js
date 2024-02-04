const titleElement = new TypeIt("#can-not-stop", {
  speed: 200,
});

titleElement.type("Helo!")
  .pause(500)
  .move(-2)
  .type("l", {delay: 400})
  .move(2)
  .go();
