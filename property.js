const person = {
    name : "rakib",
    age :22,
    profession : 'Developer',
    salary : 2500,
    married : true,
    'fav place' :['bandorban','rongpur','nillpur']
}

// dot notation
// dot symbol diya objects er property er value access kora
// console.log(person.profession);

const income = person.salary;
// console.log(income)


//bracket notation

//third bracket diya access kora

// console.log(person['age']);
// const boyos = person['age'];
// console.log(boyos);

//error
//console.log(person.'fav places')
console.log(person['fav place']);

const keyName = 'profession';
console.log(person[keyName]);