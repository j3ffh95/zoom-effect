const { body } = document;

let zoomActivated = false;

window.addEventListener("keydown", (e) => {
  if (e.key === "z") zoomActivated = !zoomActivated;
});
