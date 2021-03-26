//object oriented javascript


// constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}


//Class in JS
class Person1{
    constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

}
//Instantiate function
const person1 = new Person('Jodie', 'Comer', '11-3-1993');
const person2 =  new Person('Claire', 'Foy', '6-9-1988');
const person3 = new Person('Zayn', 'malik', '12-1-1990') ;
 
//Instantiate class
const personX = new Person1('Jodie', 'Comer', '11-3-1993');
const personY =  new Person1('Claire', 'Foy', '6-9-1988');
const personZ = new Person1('Zayn', 'malik', '12-1-1990') ;

//output for function
console.log(person3);
console.log(person1.getFullName() + " " + person1.getBirthYear());

// output for class
console.log(personZ);
console.log(personY.getFullName() + " " + personY.getBirthYear());

