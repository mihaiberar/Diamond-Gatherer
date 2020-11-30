// TASK 1
let myArray = ["Love", "I", "Javascript"];

// // 1st way:
// myArray[0]='I';
// myArray[1]='Love';

// 2nd way:
myArray.shift();
myArray.pop();
myArray.push("Love", "Javascript");

console.log(myArray);

// TASK 2
let myPerson = [
  "Paul",
  1,
  false,
  { name: "Jon Snow" },
  [1, 2, 3],
  null,
  undefined,
  function () {
    console.log("Test");
  },
];

myPerson.forEach(function (val, poz) {
  console.log(`pozitia: ${poz}, valoarea: ${val}, tipul: ${typeof val}`);
});

// TASKS 3 & 4
import { Validator } from "./validator.js";

const canvas = document.querySelector("#canvasId");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext("2d");

const george = new Image();
george.src = "assets/george.png";
const georgeWidth = 40;
const georgeHeight = 45;

let georgeX = 0;
let georgeY = 555;

george.onload = () => {
  context.drawImage(
    george,
    0 * georgeWidth,
    0 * georgeHeight,
    georgeWidth,
    georgeHeight,
    georgeX,
    georgeY,
    georgeWidth,
    georgeHeight
  );
};

const mario = new Image();
mario.src = "assets/mario.png";
const marioWidth = 30;
const marioHeight = 35;

let marioX = 0;
let marioY = 0;

mario.onload = () => {
  context.drawImage(
    mario,
    0 * marioWidth,
    0 * marioHeight,
    marioWidth,
    marioHeight,
    marioX,
    marioY,
    marioWidth,
    marioHeight
  );
};

document.addEventListener("keydown", function (event) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  switch (event.key) {
    case "ArrowUp":
      georgeY = Validator.validateUp(georgeY);
      break;
    case "ArrowDown":
      georgeY = Validator.validateDown(georgeY);
      break;
    case "ArrowLeft":
      georgeX = Validator.validateLeft(georgeX);
      break;
    case "ArrowRight":
      georgeX = Validator.validateRight(georgeX);
      break;

    case "w":
      marioY = Validator.validateUp(marioY);
      break;
    case "s":
      marioY = Validator.validateDown(marioY);
      break;
    case "a":
      marioX = Validator.validateLeft(marioX);
      break;
    case "d":
      marioX = Validator.validateRight(marioX);
      break;

    default:
      console.log("msg");
  }

  context.drawImage(
    mario,
    0 * marioWidth,
    0 * marioHeight,
    marioWidth,
    marioHeight,
    marioX,
    marioY,
    marioWidth,
    marioHeight
  );

  context.drawImage(
    george,
    0 * georgeWidth,
    0 * georgeHeight,
    georgeWidth,
    georgeHeight,
    georgeX,
    georgeY,
    georgeWidth,
    georgeHeight
  );
});

// TASK 5
const button = document.querySelector("#myButton");

button.addEventListener("click", function () {
  window.open("./new-canvas-task/index-2.html", "_blank");
});

// TASK 6
import { Person } from "./person.js";

const firstPerson = new Person("Mike", "", 75, 1.8);
firstPerson.bmi();

const secondPerson = new Person("Randy", 21, "", "", "driving license");
secondPerson.canDrive();

const thirdPerson = new Person("Lisa", "", "", "", "", "Amsterdam");
thirdPerson.greeting();
