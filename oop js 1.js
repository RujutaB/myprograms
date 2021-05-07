console.log(window);
console.log(navigator.appVersion);
const s1 = "helloo";
console.log(typeof s1);
const s2 = new String("helllooo");
console.log(typeof s2);

// 1. creating object literals
const book1 = {
    title: 'famous five',
    author: 'enid blyton',
    year: 1940,
    getSummary: function(){
        return `${this.title} was written by  ${this.author} in ${this.year}`;
    }
}
const book2 = {
    title: 'harry potter',
    author: 'j. k. rowling',
    year: 1999,
    getSummary: function(){
        return `${this.title} was written by  ${this.author} in ${this.year}`;
    }
}

console.log(book2.getSummary());

//to get all the values and just values
console.log(Object.values(book1));

//to get all the keys and just keys
console.log(Object.keys(book2));

// 2. creating a constructor
function Book(title,author,year)
{
    this.title = title;
    this.author = author;
    this.year = year;
}

//Instantiate an object
const book3 = new Book ('Sapiens', 'Yuval Noah Harari', '2005');
const book4 = new Book ('harry potter', 'J. K. Rowling', '1999');

console.log(book3.title);

// 3. prtotype

// 4. inheritance

// 5. object create

// 6. classes

// 7. sub classes


