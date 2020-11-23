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

for (let i = 0; i < myPerson.length; i++) {
  console.log(
    `pozitia: ${i}, valoarea: ${myPerson[i]}, tipul: ${typeof myPerson[i]}`
  );
}

// TASKS 3 & 4
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
  context.clearRect(0, 0, 600, 600);

  switch (event.key) {
    case "ArrowUp":
      if (georgeY > 0) {
        georgeY -= 10;
      }
      break;
    case "ArrowDown":
      if (georgeY < 550) {
        georgeY += 10;
      }
      break;
    case "ArrowLeft":
      if (georgeX > 0) {
        georgeX -= 10;
      }
      break;
    case "ArrowRight":
      if (georgeX < 550) {
        georgeX += 10;
      }
      break;

    case "w":
      if (marioY > 0) {
        marioY -= 10;
      }
      break;
    case "s":
      if (marioY < 565) {
        marioY += 10;
      }
      break;
    case "a":
      if (marioX > 0) {
        marioX -= 10;
      }
      break;
    case "d":
      if (marioX < 565) {
        marioX += 10;
      }
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
// import { Person } from "./person.js";

class Person {
  constructor(name, age, weight, height, drivingLicense, location) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.drivingLicense = drivingLicense;
    this.location = location;
  }

  bmi() {
    console.log(
      `${this.name}, your BMI is ${
        this.weight / Math.round(Math.pow(this.height, 2))
      }.`
    );
  }

  canDrive() {
    console.log(
      `${this.name} is ${this.age} years old, has a ${this.drivingLicense}, so he can drive.`
    );
  }

  greeting() {
    console.log(`${this.name} sends greetings from ${this.location}!`);
  }
}

const firstPerson = new Person("Mike", "", 75, 1.8);
firstPerson.bmi();

const secondPerson = new Person("Randy", 21, "", "", "driving license");
secondPerson.canDrive();

const thirdPerson = new Person("Lisa", "", "", "", "", "Amsterdam");
thirdPerson.greeting();
