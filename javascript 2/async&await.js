// let person1 = {
//   firstName: 'John',
//   lastName: 'Doe'
// };

let person2 = {
  firstName: 'Jane',
  lastName: 'Doe'
};

function greet(greeting) {
  console.log(greeting ,this.firstName ,this.lastName);
}

greet("gd moring")
 greet.call(person1, 'Hello'); // Hello, John Doe
 greet.call(person2, 'Hi'); // Hi, Jane Doe
 //Using apply
 //Using call
 greet.apply(person1, ['Hey']); // Hey, John Doe
 greet.apply(person2, ['Hi there']); // Hi there, Jane Doe
//  Using bind
 let greetPerson1 = greet.bind(person1);
 greetPerson1('Greetings'); // Greetings, John Do
 let greetPerson2 = greet.bind(person2, 'Good day');
 greetPerson2(); // Good day, Jane Doe
