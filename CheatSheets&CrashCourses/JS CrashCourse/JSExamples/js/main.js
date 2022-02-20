//string, numbers, boolean, null, undefined

const name1 = "ana maria";
const age = 58;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

// alert("Hello World");

console.log("Hello world");

console.log(typeof name1);

console.log(typeof age);

console.log(typeof rating);

console.log(typeof isCool);

console.log(typeof z);

console.log(typeof y);

console.log(typeof x);

// concatenation

console.log("my name is " + name1 + " and i am " + age + " years old");
console.log(`my name is ${name1} and i am ${age} years old`);
const hello = `my name is ${name1} and i am ${age} years old`;
console.log(hello);

// methods
const s = "hello world";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());

// arrays variables that store multiple values

console.log(s.split('')); //split hello world into individual characters

const v = "technology, computers, it, code"
console.log(v.split(', ')); //split hello world into individual words


const numbers = new Array(1,2,3,4,5,6);// old way
console.log(numbers);

const fruits = ['apples', 'pears', 'oranges', 'nectarines', 'grapes'];
console.log(fruits)//multiple data types can be added in one array

// arrays are zero based
console.log(fruits[1]);

// add to end (may not know number so adds blanks in between)
fruits[7] = 'guavas';

// add to end without deeding to know number
fruits.push('mangos');

// add to beginning
fruits.unshift('strawberries')

// pop off last one
fruits.pop();

console.log(fruits);

//find index location of an array item
console.log(fruits.indexOf('mangos'));//does not exist (-1)
console.log(fruits.indexOf('apples'));//exists in second pos 0 counts as first and 1 as second (1)

// is fruits or hello an array?
console.log(Array.isArray(fruits));

console.log(Array.isArray(hello));

// object literals
const person = {
    firstName: 'john',
    lastName: 'doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'humansdorp',
        state: 'eastern cape'
    }        //embedded objects (object within object)

}
person.email = "john@gmail.com";

console.log(person);
console.log(person.firstName, person.lastName, person.address)

console.log(person.hobbies[1]);// to find movies
console.log(person.address.street);// to get street value

//destructuring where you take an array and assign values from it
const{ FirstName, lastName, address: {city}} = person;
console.log(city)

const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist appointment',
        isCompleted: false
    }
];

console.log(todos)
console.log(todos[1].text)

// convert todos to .JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// for loops

for (let i = 0; i<=10; i++) {
    console.log(i);
    console.log(`for loop number ${i}`);
}

// while loop
let i = 0
while(i <10) {
    console.log(`for while loop number ${i}`);
    i++;
}

// array loop
for (let i = 0; i < todos.length; i++) {
    console.log(i);
    console.log(`todo ${todos[i].text}`);
}
//more readable array loop where t is the variable that has the single array item
for (let t of todos){
    console.log(`todo ${t.text} ${t.id}`)
}
// forEach, map, filter
todos.forEach(function(t) {
    console.log(t.text);
});
// map
const todoText = todos.map(function(t) {
    return t.text;
});
console.log(todoText);

todos.forEach(function(t) {
    console.log(t.text);
});

// filter
const completedText = todos.filter(function(t) {
    console.log(t)
    return t.isCompleted == true;
}).map(function(todo) {
    return todo.text;
})
console.log(completedText);

// conditionals == matches value '10' equivalent to 10
// === matches value and type '10' not equivalent to 10

// const xs = 20;

// || character is equivalent to or
// && and
const xs = 5;

if (xs === 10) {// (xs === 10 && )
    console.log('xs is 10');
} else if(xs > 10) {
    console.log(`xs is greater than 10`);
} else if (xs < 10) {
    console.log(`xs is less than 10`);
} else {
    console.log('xs is not equal to 10')
}
// ternery operator
const color = xs > 10 ? 'red' : 'blue';
// if xs is less than 10 then color=red else color=blue
console.log(color)

switch(color) {
    case 'red':
        console.log(`color is red`);
        break;
    case 'blue':
        console.log(`color is blue`);
        break;
    default:
        console.log(`color is neither red nor blue`);
        break;
}
//functions

const addNumsA = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNumsA(5,5));

//equivalent to
const addNumsB = (num1 = 1, num2 = 1) =>{ 
    return num1 + num2;
}
console.log(addNumsB(5,5));

//equivalent to
function addNumsC(num1 = 1,num2 = 2){
    return num1 + num2
} 

console.log(addNumsC(5,5));

//Constructor function
function People(firstName, lastName, dob) {
    //Capital P and pass properties that you want to be able to set
    this.firstName = firstName;
    this.lastName = lastName;
//  this.dob = dob; makeit a date object so it can be manipulated
    this.dob = new Date(dob);//date object not a string
// *** next 2 functions replaced with prototypes
//  this.getBirthYear = function(){
//      return this.dob.getFullYear();
//  }
//  this.getFullName = function(){
//      return `${this.firstName} ${this.lastName}`;
//  }
}
// *** create prototypes rather than have 
// every person with function attached to them
People.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
People.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}


// lexical this (not covered)
// Intantiate object

const people1 = new People('john', 'doe', '1-3-1980');
const people2 = new People('mary', 'smith', '7-3-1970');

console.log(people1)
console.log(people2.firstName)
console.log(people2.dob)
console.log(people1.getBirthYear())
console.log(people2.getFullName())

