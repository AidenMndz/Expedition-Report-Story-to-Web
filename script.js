const scenes = document.querySelectorAll(".scene");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");

let currentScene = 0;

function showScene(index) {
  if (index < 0) {
    currentScene = scenes.length - 1;
  } else if (index >= scenes.length) {
    currentScene = 0;
  } else {
    currentScene = index;
  }

  scenes.forEach((scene, sceneIndex) => {
    const isCurrent = sceneIndex === currentScene;

    scene.hidden = !isCurrent;
    scene.classList.toggle("is-active", isCurrent);
  });
}

previousButton.addEventListener("click", () => {
  showScene(currentScene - 1);
});

nextButton.addEventListener("click", () => {
  showScene(currentScene + 1);
});

showScene(currentScene);