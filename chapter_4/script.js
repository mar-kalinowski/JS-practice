// function declaration

// function greet() {
//   console.log("hello there");
// }

// function expression

// const speak = (name = 'jan', time = 'night') => {
//   console.log(`good ${time} ${name}!`);
// };

// greet();

// speak();
// speak('john', 'night');

// const calcArea = (radius) => {
// let area = 3.14 *radius**2;
// return area
// return 3.14 * radius**2
// }

// const calcArea = (radius) => 3.14 * radius ** 2;

// const area = calcArea(5);
// console.log("area is: ", area);

// const greet = () => "hello, world";
// const result = greet();
// console.log(greet());

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// console.log(bill([10, 15, 30], 0.2));

// let people = ['marcin', 'jan', 'grzegorz', 'roman']

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`)
// }

// people.forEach(logPerson)

// people.forEach((person, index, array) => {
//     console.log(person, index, array)
// })

// get a reference to the 'ul'

const ul = document.querySelector('.people')

const people = ['marcin', 'jan', 'grzegorz', 'marek']

let html = ''
people.forEach(person => {
    html += `<li style="color: red">${person}</li>`
})

console.log(html)

ul.innerHTML = html



