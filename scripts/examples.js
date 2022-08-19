const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite…');
}

document.querySelector('html').addEventListener('click', function () {
    alert('Ouch! Stop poking me!');
  });

// A longer version is below for the click event handler
/*
let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function () {
  alert('Ouch! Stop poking me!');
});
*/

// This is the arrow function version of the above event handler
// document.querySelector('html').addEventListener('click', () => {
//     alert('Ouch! Stop poking me!');
//   });
  