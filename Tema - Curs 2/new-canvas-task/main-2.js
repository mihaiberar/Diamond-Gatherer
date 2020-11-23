const canvas = document.querySelector("#canvasId");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext("2d");

const button = document.querySelector("#myButton");

function randomColor() {
  color =
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")";

  return color;
}

button.addEventListener("click", function () {
  context.fillStyle = randomColor();
  context.fillRect(
    Math.random() * (600 - 70),
    Math.random() * (400 - 70),
    70,
    70
  );
});
