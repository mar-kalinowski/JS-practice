// object literals

// const blogs = [
//     { title: 'Tytuł postu nr 1', likes: 60},
//     { title: 'Tytuł postu nr 2', likes: 55}
// ]

// let user = {
//   name: "marcin",
//   age: "42",
//   email: "mjk.gdansk@gmail.com",
//   location: "gdansk",
//   blogs: [
//     { title: "Tytuł postu nr 1", likes: 60 },
//     { title: "Tytuł postu nr 2", likes: 55 },
//   ],
//   login: function () {
//     console.log("the user logged in");
//   },
//   logout: function () {
//     console.log("the user logged out");
//   },
//   logBlogs: function () {
//     //console.log(this.blogs)
//     console.log("this user has written the following blogs:");
//     this.blogs.forEach((blog) => {
//       console.log(blog.title, blog.likes);
//     });
//   },
// };

// user.logBlogs();

// user.login();

// console.log(user.blogs[0]);

// console.log(user);
// console.log(user.name);

// console.log(user["email"]);

// console.log(typeof user);

// Math object

console.log(Math.PI);
console.log(Math.E);

const area = 7.8;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random nubmers

const random = Math.random()

console.log(random)
console.log(Math.round(random * 100))

