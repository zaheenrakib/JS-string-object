const person = {
    name : "rakib",
    age :22,
    profession : 'Developer',
    salary : 2500,
    married : true,
    'fav place' :['bandorban','rongpur','nillpur']
}

person.salary = 3000;
person['age'] = 26;
person['fav place'] = ['maldiv','bali','pataya'];
console.log(person);


const propname= 'profession';
person[propname] = 'devops';
console.log(person);