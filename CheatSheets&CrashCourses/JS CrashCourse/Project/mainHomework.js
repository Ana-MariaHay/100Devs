// ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES //
console.log(window) // top level of the DOM (Document object Model)
// ELEMENT SELECTORS

// Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

// // Multiple Element Selectors
// console.log(document.querySelectorAll('.item'));// can run array methods
// console.log(document.getElementsByTagName('li'));// cannot run array methods
// console.log(document.getElementsByClassName('item'));// cannot run array methods

// // Loop through elements array
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));


// // MANIPULATING THE DOM
// const ul = document.querySelector('.items');
// ul.remove();// removes all the li's
// ul.lastElementChild.remove();// removes just the last one
// ul.firstElementChild.textContent = 'Hello';// changes item description to hello
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');// change css
// btn.style.background = 'red';// change css


// EVENTS

//  // Mouse Event
// btn.addEventListener('click', e => {
//     //change click to 'mouseover' or 'mouseout mdndoc
//     e.preventDefault();
//     console.log(e.target.className);
//     document.getElementById('my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
//   });
  
//   // Keyboard Event
//   const nameInput = document.querySelector('#name');
//   nameInput.addEventListener('input', e => {
//     document.querySelector('.container').append(nameInput.value);
//   });

/// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}