// for loops

// for(let i = 0; i<5; i++){
//     console.log('in loop:', i)
// }

// console.log('loop finished')

// const names = ['marcin', 'jan', 'grzegorz']

// for(let i = 0; i < names.length; i++){
//     // console.log(names[i])
//     let html = `<div>${names[i]}</div>`
//     console.log(html)
// }

// while loops

// const names = ["marcin", "jan", "grzegorz"];

// let i = 0;

// while(i < 5){
//     console.log('in loop: ', i);
//     i++;
// }

// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// do while loops

// do{
//     console.log('val of i is: ', i);
//     i++;
// } while(i < 5)

// if statement

// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old')
// }

// const names = ['marcin', 'jan,', 'roman']

// if(names.length > 2){
//     console.log("that's a lot of names")
// }

// const password = 'pass@as';


// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong')
// } else if(password.length >= 8 || password.includes('@')){
//     console.log('that password is long enough')
// } else {
//     console.log('Password is not long enough')
// }

// const scores = [50, 25, 0, 30, 100, 20, 10]

// for(let i = 0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('your score is: ', scores[i])

//     if(scores[i] === 100){
//         console.log('congrats, you get the top score!')
//         break;
//     }
// }

const grade = 'C';

switch(grade){
    case 'A':
        console.log('you got an A!')
        break;
    case 'B':
        console.log('you got an B!')
        break
    case 'C':
        console.log('you got an C!')
        break
    case 'D':
        console.log('you got an D!')
        break
    case 'E':
        console.log('you got an E!')
        break
    default:
        console.log('not a valid grade')
}
