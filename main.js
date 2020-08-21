const { body } = document;

let zoomActivated = false;

window.addEventListener("keydown", (e) => {
  if (e.key === "z") zoomActivated = !zoomActivated;
});

window.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
});
