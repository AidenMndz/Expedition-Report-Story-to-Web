// These names match the starter script.js.
// Inside showScene, update BOTH visibility and the CSS class:
scenes.forEach((scene, sceneIndex) => {
  const isCurrent = sceneIndex === currentScene;
  scene.hidden = !isCurrent;
  scene.classList.toggle("is-active", isCurrent);
});

// The starter already connects this event; do not add it twice.
nextButton.addEventListener("click", () => showScene(currentScene + 1));