/* function calcAge(birthAge) {
  const age = 2022 - birthAge;

  function printAge() {
    const output = `You are ${age}, and you are born in ${birthAge}`;
    console.log(output);

    if (birthAge >= 1975 && birthAge <= 1982) {
      const str = `Yes, you are over 40, ${firstName}`;
      console.log(str);
    }
  }

  printAge();
  return age;
}
const firstName = "Marcin";

calcAge(1979);
 */

/* function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge() {
    const str = `You are ${age}, you are born in ${birthYear}`;
    console.log(str);
    if (birthYear >= 1973 && birthYear <= 1982) {
      console.log(`${firstName}, you are over 40`);
    }
  }
  printAge();
  return age;
}

const firstName = "Marcin";
calcAge(1979);
 */
/* function calcAge(birthYear) {
  const age = 2022 - birthYear;
  console.log(`You were born in ${birthYear}, so you are ${age}`);
  if (birthYear >= 1975 && birthYear <= 1982) {
    console.log(`Yes ${firstName}, u r over 40`);
  }

  return age;
}

const firstName = "Marcin";
calcAge(1979); */

/* const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Itly",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Kombatantow",
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); */

// function to smash words to a santance

/* function smash(words) {
  return words.join(" ");
}

console.log(smash(["hello", "world"])); */

// function to find the smallest integer in the array

/* class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}


console.log(SmallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 8])); */

/* function smallestInt(args) {
  return Math.min(...args);
}

console.log(smallestInt([33, 55, 2, 555])); */

/* class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

console.log(SmallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 8])); */

/* function isSquere(n) {
  return Math.sqrt(n) % 1 === 0;
}

console.log(isSquere(16));

console.log(16 % 6); */

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

/* function getCount(str) {
  var vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

console.log(getCount("abracadabra")); */

/* function getCount(str) {
  let vowelsCount = 0;

  const vowels = ["a", "e", "i", "o", "u"];
}
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    vowelsCount++;
  }
  return vowelsCount;
}

console.log(getCount("abracadabra"));

// We have an array: [1,2,3,4,5,6].
// Write a function which takes an array. Find all even numbers. Sum them and return powered by two result

const findAllEvenNum = function (arr) {
  let newArr = [];
  arr.forEach((num) => {
    if (num % 2 === 0) {
      newArr.push(num);
    }
  });
  let sumOfEvenNum = 0;
  newArr.forEach((num) => {
    sumOfEvenNum += num;
  });
  return sumOfEvenNum ** 2;
};

console.log(findAllEvenNum([1, 2, 3, 4, 5, 6])); */

/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car("BMW", 120);
const fiat = new Car("Fiat", 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going with the speed of ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going with the speed of ${this.speed}`);
};

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();

fiat.accelerate();
console.log(fiat.speed); */

/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going with the speed of ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going with the speed of ${this.speed}`);
};

const fiat = new Car("Fiat", 110); */

/* fiat.accelerate();
fiat.accelerate();
fiat.accelerate() */ // const PersonCl = class {};

/* class PersonCl {
  constructor(fullname, birthYear) {
    this.fullname = fullname;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.firstName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
} */

/* PersonCl.prototype.greet = function () {
  console.log(`Hello ${this.firstName}`);
}; */

/* const marcin = new PersonCl("Marcin Kalinowski", 1979);
const jan = new PersonCl("Jan", 1978);
console.log(marcin);
console.log(jan); */
/* console.log(marcin.age);
console.log(marcin.__proto__ === PersonCl.prototype);
marcin.greet(); */

/* class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
    console.log(`The current speed of ${this.make} is ${speed}`);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford); */

/* const person = {
  firstName: "Elvis",
  lastName: "Presley",
};

const prototype = {
  firstName: "Daniel",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Object.setPrototypeOf(person, prototype);
console.log(person.firstName);
delete person.firstName; */

/* console.log(prototype);
delete prototype.getFullName;
console.log(prototype);
console.log(person.getFullName()); */

/* person.age = 100;
console.log(prototype.age); */

// https://restcountries.com/v2/

Promise.any([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Another success"),
])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

arr = [1, 2, 3, 4, 5, 6];

// create a function that takes an array and take only even numbers, sum them and get the square of the result

const findEvenNum = function (arr) {
  let newArr = [];
  arr.forEach((num) => {
    if (num % 2 === 0) {
      newArr.push(num);
    }
  });
  let sumOfEvenNum = 0;
  newArr.forEach((num) => {
    sumOfEvenNum += num;
  });
  return sumOfEvenNum ** 2;
};

console.log(findEvenNum(arr));

const passanger = "marCin";
const passangerToLower = passanger.toLowerCase();
const correctPassanger =
  passangerToLower[0].toUpperCase() + passangerToLower.slice(1);
console.log(correctPassanger);

/* const email = "marcin@marcin.pl";
const badEmail = "  marCIn@marcin.pl  ";
const correctEmail = badEmail.toLowerCase().trim();
console.log(correctEmail === email); */

const compareEmails = (email, loginEmail) => {
  const loginEmailToLower = loginEmail.toLowerCase().trim();
  const emailToLower = email.toLowerCase().trim();
  return emailToLower === loginEmailToLower;
};

console.log(compareEmails("marcin@marcin.pl", "  marCIn@marcin.pl  "));

const priceGB = "29,8,6,Ł";
const priceUs = priceGB.replace("Ł", "$").replaceAll(",", ".");
console.log(priceUs);

const checkBaggage = (items) => {
  const baggage = items.toLowerCase();
  if (baggage.includes("Knife") || baggage.includes("gun"))
    console.log("You are not allowed on board");
  else console.log("Welcome on board! 🎯");
};

checkBaggage(
  "I have a laptom, some food, pocket knife and small gun for protection"
);

const capitalizeName = (name) => {
  const names = name.split(" ");
  const namesUpper = [];
  console.log(names);
  for (const n of names) {
    console.log(namesUpper);
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    console.log(n);
    console.log(namesUpper.join(" "));
  }
  namesUpper.join(" ");
};

console.log(capitalizeName("marcin kalinowski"));

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
greet("Hey")("Marcin");

console.log(Math.max(50, (Math.random() * 200) ^ 0));
console.log(Math.max(50, (Math.random() * 200) ^ 0));
console.log(Math.max(50, (Math.random() * 200) ^ 0));
console.log(Math.max(50, (Math.random() * 200) ^ 0));

const carElement = document.createElement("li");
carElement.classList.add("car-element");
const carElementModify = document.createElement("div");
carElementModify.classList.add("car-element-modify");
const carElementModifyForm = document.createElement("form");
carElementModifyForm.classList.add("car-element-modify__form");
const carElementModifyFormNameLabel = document.createElement("label");
carElementModifyFormNameLabel.setAttribute("for", "name");
carElementModifyFormNameLabel.textContent = "Change name";
const carElementModifyFormNameInput = document.createElement("input");
carElementModifyFormNameInput.classList.add("new-car__name");
carElementModifyFormNameInput.setAttribute("type", "text");
carElementModifyFormNameInput.setAttribute("name", "name");
carElementModifyFormNameInput.setAttribute("id", "name");
const carElementModifyFormColorLabel = document.createElement("label");
carElementModifyFormColorLabel.setAttribute("for", "color");
carElementModifyFormColorLabel.textContent = "Change color";
const carElementModifyFormColorInput = document.createElement("input");
carElementModifyFormColorInput.classList.add("new-car__color");
carElementModifyFormColorInput.setAttribute("type", "color");
carElementModifyFormColorInput.setAttribute("name", "color");
carElementModifyFormColorInput.setAttribute("id", "color");
const carElementModifyFormUpdateBtn = document.createElement("button");
carElementModifyFormUpdateBtn.classList.add("btn", "update-btn");
carElementModifyFormUpdateBtn.textContent = "Update car";
const carElementDeleteBtn = document.createElement("button");
carElementDeleteBtn.classList.add("btn", "delete-btn");
carElementDeleteBtn.textContent = "Delete car";

carElementModifyForm.append(
  carElementModifyFormNameLabel,
  carElementModifyFormNameInput,
  carElementModifyFormColorLabel,
  carElementModifyFormColorInput,
  carElementModifyFormUpdateBtn
);
carElementModify.append(carElementModifyForm, carElementModifyFormUpdateBtn);
carElement.append(carElementModify, carElementDeleteBtn);

/* function areEqualCaseIntensitive(str1, str2) {
  return str1.toLowerCase === str2.toLowerCase;
}

console.log(areEqualCaseIntensitive("mar", "Mar")); */

function areEqualCaseIntensitive(str1, str2) {
  return str1.toLowerCase === str2.toLowerCase;
}

function getStringLength(value) {
  return value.length;
}

console.log(getStringLength("marcin"));

console.log(8 % 2);

const firstName = "Marcin";
const lastName = "Kalinowski";
console.log(firstName + " " + lastName);
let x = 10 + 5;
x += 10; // x = x + 10;
x *= 4;
x++;
x--;
console.log(x);

const zuzannaFirstName = "Zuzanna";
const zuzannaLastName = "Witkiewicz";
const zuzannaBirthYear = 1982;
const currentYear = new Date().getFullYear();
console.log(currentYear);
const zuzannaAge = currentYear - zuzannaBirthYear;
console.log(zuzannaAge);

if (zuzannaAge >= 18) {
  // alert("Zuzanna is over 18");
}

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`Yes, Mark's BMI is ${markBMI}, and your BMI John is ${johnBMI}`);
} else {
  console.log(
    `Sorry John, your BMI${johnBMI} is lawer then BMI of Mark${markBMI} `
  );
}

/* const markHigherBMI =
  markWeight / markHeight ** 2 > johnWeight / johnHeight ** 2; */

const markHigherBMI =
  markWeight / (markHeight * markHeight) >
  johnWeight / (johnHeight * johnHeight);

console.log(markHigherBMI);

const birthYear = 1979;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

const scoreDolhins1 = 96;
const scoreDolhins2 = 108;
const scoreDolhins3 = 89;
const scoreKoalas1 = 88;
const scoreKoalas2 = 91;
const scoreKoalas3 = 110;

const avarageDolhins = (96 + 108 + 89) / 3;
const avarageKoalas = (88 + 91 + 110) / 3;
console.log(avarageDolhins);
console.log(avarageKoalas);
if (avarageDolhins > avarageKoalas) {
  console.log(`The winner is the Dolhins team with ${avarageDolhins} points`);
} else {
  console.log(`The winner is the Koalas team with ${avarageKoalas} points`);
}

if (avarageDolhins > avarageKoalas && avarageDolhins >= 100) {
  console.log(`The Dolhins wins`);
} else if (avarageKoalas > avarageDolhins && avarageKoalas >= 100) {
  console.log(`The Koalas wins`);
} else {
  console.log(`Nobody wins today`);
}

const day = "wednesday";

switch (day) {
  case "monday":
    console.log("Make the plan for the whole week");
    break;
  case "tuesday":
    console.log("Prepare the videos");
    break;
  case "wednesday":
    console.log("Record a new videos");
    break;
  case "thursday":
  case "friday":
    console.log("Work with the videos");
    break;
  default:
    "Not a valid day";
}

if (day === "monday") {
  console.log("Make the plan for the whole week");
} else if (day === "tuesday") {
  console.log("Prepare the videos");
} else if (day === "wednesday") {
  console.log("Record a new videos");
} else if (day === "thursday" || day === "friday") {
  console.log("Work with the videos");
} else {
  ("Not a valid day");
}

const age = 43;

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "juice"}`);

const bill = 430;

/* const tip = bill * 1.15;
console.log(tip); */

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  } `
);

function logger() {
  console.log("My name is Marcin");
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function calcAge1(birthYear) {
  return new Date().getFullYear() - birthYear;
}

const myAge1 = calcAge1(1979);

const calcAge2 = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};
const myAge2 = calcAge2(1979);

const calcAge3 = (birthYear) => new Date().getFullYear() - birthYear;

const myAge3 = calcAge3(1979);

console.log(myAge1, myAge2, myAge3);

/* const yearsUntilRetirement = (birthYear, firstName) => {
  const age = new Date().getFullYear() - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1979, "Marcin")); */

/* const cutFruitPieces = (fruit) => fruit * 4;

const fruitJuicer = (apples, oranges) => {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice made of ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
};

console.log(fruitJuicer(10, 6)); */

const cutFruitPieces = (fruit) => fruit * 4;

const fruitJuicer = (apples, oranges) => {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice made of ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
};

console.log(fruitJuicer(6, 1));

// we want to calc how many years left until ritirement based on birthYear and name

const calcAge = (birthYear) => new Date().getFullYear() - birthYear;

const yearsUntilRetirment = (birthYear, firstName) => {
  const retirement = 65 - calcAge(birthYear);

  return `${firstName.toUpperCase()} retires in ${retirement} years`;
};

console.log(yearsUntilRetirment(1979, "marcin"));

const calcAvarage = (a, b, c) => (a + b + c) / 3;

const avgDolphins = calcAvarage(85, 54, 41);
const avgKoalas = calcAvarage(23, 34, 27);

console.log(avgDolphins, avgKoalas);

const checkWinner = (team1, team2) => {
  if (team1 / team2 >= 2) {
    return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
  } else if (team2 / team1 >= 2) {
    return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
  } else {
    return `Nobody wins`;
  }
};

console.log(checkWinner(avgDolphins, avgKoalas));

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1999, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const marcinName = "Marcin";
const marcinBirthYear = 1979;
const marcin = [
  marcinName,
  "Kalinowski",
  new Date().getFullYear() - marcinBirthYear,
  "developer",
  friends,
];

console.log(marcin);

const calcPersonAge = (birthYear) => new Date().getFullYear() - birthYear;
console.log(calcPersonAge(1979));
const birthYears = [2005, 2013, 1982, 1997];

const personAges = [
  calcPersonAge(birthYears[0]),
  calcPersonAge(birthYears[1]),
  calcPersonAge(birthYears[birthYears.length - 1]),
];

console.log(personAges);

const myFriends = ["Jan", "Grzegorz"];
myFriends.push("Kevin");
console.log(myFriends);

const newLenght = myFriends.unshift("Bob");
console.log(newLenght);

const popped = myFriends.pop();
console.log(popped);
console.log(myFriends.indexOf("Grzegorz"));

console.log(myFriends.includes("Grzegorz"));
console.log(myFriends.includes("Bob"));

if (myFriends.includes("Grzegorz")) {
  console.log("You have a friend Grzegorz");
}

const calcTip = (bill) =>
  bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(200));

const bills = [125, 555, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
console.log(tips);
const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];
console.log(total);

const newBills = [80, 120, 20];

/* const calcTips = (bills) => {
  let tips = [];
  const tip = bills.forEach((bill) =>
    bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
  );
  console.log(tip);
};

calcTips(newBills); */

const marcinObject = {
  firstName: "Marcin",
  lastName: "Kalinowski",
  birthYear: 1979,
  age: new Date().getFullYear() - birthYear,
  job: "developer",
  friends: ["Jan", "Grzegorz", "Paweł"],
  hasDrivingLicense: true,

  // calcAge: function (birthYear) {
  //   return new Date().getFullYear() - birthYear;
  // },

  // calcAge: (birthYear) => new Date().getFullYear() - birthYear,

  // calcAge: function () {
  //   // console.log(this);
  //   return new Date().getFullYear() - this.birthYear;
  // },

  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    // const drivingLicense = this.hasDrivingLicense ? a : no;
    this.summary = `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.hasDrivingLicense ? "a" : "no"} driver's license`;
    return this.summary;
  },
};

console.log(marcinObject.lastName);
console.log(marcinObject["lastName"]);

/* const interestedIn = prompt(
  "What do you want to know about marcinObject? Choose between firstName, lastName, age, job or friends "
); */

// console.log(marcinObject[interestedIn]);

/* if (marcinObject[interestedIn]) {
  console.log(marcinObject[interestedIn]);
} else {
  console.log("Wrong request");
} */

marcinObject.location = "Poland";
marcinObject["email"] = "";
console.log(marcinObject);

console.log(
  `${marcinObject.firstName} has ${marcinObject.friends.length} friends, and his best friend is called ${marcinObject.friends[0]}`
);

console.log(marcinObject.calcAge());
console.log(marcinObject.age);
console.log(marcinObject.getSummary());

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(
  `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s (${john.bmi})! `
);

console.log(mark);

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetion ${rep} 🏋️‍♂️`);
}

const array = ["marcin", "kalinowski", 1979, true];
const types = [];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  types.push(typeof array[i]);
}
console.log(types);
console.log(years);
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(new Date().getFullYear() - years[i]);
}
console.log(ages);

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifging weight repetiotion ${rep} 🏋️‍♂️`);
  }
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

const billsLoop = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tipsLoop = [];
const totalsLoop = [];

const calcTipLoop = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < billsLoop.length; i++) {
  const tip = calcTipLoop(billsLoop[i]);
  tipsLoop.push(tip);
  totalsLoop.push(billsLoop[i] + tip);
}

console.log(tipsLoop);
console.log(totalsLoop);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  const average = sum / arr.length;
  return average;
};

calcAverage(totalsLoop);

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, -4];
//

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days... `;
  }
  console.log("..." + str);
};

printForecast(data1);
