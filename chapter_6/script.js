// const para = document.querySelector('body > h1')

// console.log(para)

// const paras = document.querySelectorAll('p')
// const errors = document.querySelectorAll('.error')

// paras.forEach(para => {
//     // console.log(para)
// })
// console.log(errors)

// get an element by ID
// const title = document.getElementById('page-title')
// console.log(title)

// // get elements by their  class name

// const errors = document.getElementsByClassName('error')
// console.log(errors[0])

// get elements by their tag name

// const paras= document.getElementsByTagName('p')
// console.log(paras[1])

// const para = document.querySelector('p')

// console.log(para.innerText)
// para.innerText = 'new text for first p tag'
// console.log(para)

// const paras = document.querySelectorAll('p')

// paras.forEach(para => {
//     console.log(para.innerText)
//     para.innerText += ' , new text'
// })

// const content = document.querySelector('.content')

// console.log(content.innerHTML)

// content.innerHTML = '<h2>This is a new h2 element</h2>'

// const people = ['marcin', 'jan', 'grzegorz']

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// })

const link = document.querySelector('a')
console.log(link)

console.log(link.getAttribute('href'))

link.setAttribute('href', 'https:www.pord.pl')