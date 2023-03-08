// Task 1

var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (let items of dairy) {
    console.log(items);
  }
}

// Task 2

const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (let prop of Object.keys(bird)) {
    console.log(prop + ": " + bird[prop]);
  }
}

// Task 3

function animalCan() {
  for (let prop of Object.keys(bird)) {
    console.log(prop + ": " + bird[prop]);
  }
  for (let prop of Object.keys(animal)) {
    console.log(prop + ": " + animal[prop]);
  }
}

logDairy();
birdCan();
animalCan();
