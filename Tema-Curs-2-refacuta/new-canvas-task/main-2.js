const canvas = document.querySelector("#canvasId");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext("2d");

const button = document.querySelector("#myButton");

function randomColor() {
  let color =
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
    Math.random() * (canvas.width - 70),
    Math.random() * (canvas.height - 70),
    70,
    70
  );
});
