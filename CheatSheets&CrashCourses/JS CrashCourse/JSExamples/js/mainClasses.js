// //Constructor function
// function People(firstName, lastName, dob) {
//     //Capital P and pass properties that you want to be able to set
//     this.firstName = firstName;
//     this.lastName = lastName;
// //  this.dob = dob; makeit a date object so it can be manipulated
//     this.dob = new Date(dob);//date object not a string
// // *** next 2 functions replaced with prototypes
// //  this.getBirthYear = function(){
// //      return this.dob.getFullYear();
// //  }
// //  this.getFullName = function(){
// //      return `${this.firstName} ${this.lastName}`;
// //  }
// }
// // *** create prototypes rather than have 
// // every person with function attached to them
// People.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }
// People.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// // Intantiate object

// const people1 = new People('john', 'doe', '1-3-1980');
// const people2 = new People('mary', 'smith', '7-3-1970');

// console.log(people1)
// console.log(people2.firstName)
// console.log(people2.dob)
// console.log(people1.getBirthYear())
// console.log(people2.getFullName())

// Classes work exactly as with prototypes but syntax
// is simplified for people coming from other languages
// Class
class People {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
//  this.dob = dob; makeit a date object so it can be manipulated
        this.dob = new Date(dob);//date object not a string   
    }
    getBirthYear = function(){
        return this.dob.getFullYear();
    }
    getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
// Intantiate object

const people1 = new People('john', 'doe', '1-3-1980');
const people2 = new People('mary', 'smith', '7-3-1970');

console.log(people1)
console.log(people2.firstName)
console.log(people2.dob)
console.log(people1.getBirthYear())
console.log(people2.getFullName())
