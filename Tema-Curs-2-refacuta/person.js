export class Person {
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
