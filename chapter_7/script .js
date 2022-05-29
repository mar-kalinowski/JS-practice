const form = document.querySelector(".signup-form");
// const username = document.querySelector('#username')
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

//   console.log(form.username.value);
//   // console.log(username.value)
//   e.target.reset();

  // validation
  const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  // console.log(usernamePattern.test(username))

  if (usernamePattern.test(username)) {
    // feedback good info
    feedback.textContent = "that username is valid!";
  } else {
    // feedback help info
    feedback.textContent =
      "username must contain letters only & be between 6 & 12 characters long";
  }
  e.target.reset()
});

// testing RegEx

// const username = 'marcin'
// const pattern = /^[a-zA-Z]{6,12}$/

// let result = pattern.test(username)
// console.log(result)

// if(result){
//     console.log('regex test passed :)')
// } else {
//     console.log('regex test failed :(')
//}

// let result = username.search(pattern)
// console.log(result)
