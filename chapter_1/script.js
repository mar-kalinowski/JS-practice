let age = 25;
let year = 2022;
let email = "jan@nowak.pl";

age = 30;

console.log(age, year);

const points = 100;
// points = 50
console.log(points);

let firstName = "Jan";
let lastName = "Nowak";
let fullName = firstName + " " + lastName;
console.log(fullName);

console.log(fullName[0]);
console.log(fullName.length);

console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf("@");
console.log(index);

let email_2 = "john@smith.co.uk";

let result_2 = email_2.lastIndexOf("h");
console.log(result_2);

let result_3 = email_2.slice(2, 5);
console.log(result_3);

let resSubstr = email.substr(2,5);
