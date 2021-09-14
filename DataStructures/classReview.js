// ES2015 introduced class Syntax. We're going to use it here. 

// What is a class? It's a blueprint for creating objects with pre-defined properties and methods. 

class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.greeting = () => {
      return `Hi, my name is ${firstName} ${lastName}`
    }
  }
}

let zoe = new Student("Zoe", "Friedman")
let charlie = new Student("Charlie", "DeChants")
console.log(zoe.greeting())
console.log(charlie.greeting())