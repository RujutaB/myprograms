//basic vanilla javascript 
//let and const
let x=30;
x = 31;
const name = 'Rujuta';
const age = 21;
const isFemale = true;
console.log(age);
//concatenation
console.log('1. I am ' + name + ' and i am ' + age + ' years old'); 
//template string (ES6)- this is a better way to concatenate 
console.log(`2. I am ${name} and i am ${age} years old`); 
//or
const hello=`3. I am ${name} and i am ${age} years old`;
console.log(hello);
//---------------------
//string, its properties and methods
const s = 'Hello World';
console.log(s.substr(0,5).toUpperCase());//this will convert 1st 5 char of string to uppercase
console.log(s.split(''));
//-------------------
//arrays
/*1*/ const fruits = ['apples','mangoes', 'pears'];
/*2*/ const xyz = new Array(1,10,'apples', 'mangoes');
console.log(fruits[2]);
console.log(xyz);
//---------------------
//object literals
const person = {
    name1 : 'Jodie Comer', //dont write semi-colon out of habit here instead of comma
    profession : 'actress', //its colon and not an equal to sign in between
    age : 28,
    address : {
    city : 'Liverpool',
    country : 'England',
    }
}
console.log(person.address.city);
//object array
const todolist = [
    {
        id : 1,
        activity : 'brush',
        time : '9:00am',
    }, //dont forget comma here
    {
        id : 2,
        activity : 'bath',
        time : '9:30am',
    }
]
console.log(todolist[1].activity);
//--------------------------------
//conitional statemnets: Switch, if-else... DIY
//for loop , while... DIY
//-----------------------------------
//functions and arrow functions
function addNum(num1, num2){
    return num1 + num2;
}
console.log(addNum(2,9));
//arrow function can simplify the function and minimize the syntax
const addNums = (num1, num2) => { return num1 + num2}; //or just num1 + num2 will also work
console.log(addNum(5,9));
//--------------------------
// object oriented javascript
// constructors
