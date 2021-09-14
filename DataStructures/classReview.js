// ES2015 introduced class Syntax. We're going to use it here. 

// What is a class? It's a blueprint for creating objects with pre-defined properties and methods. 

class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.scores = [];
  }
  // here is an instance method
  greeting(){
    return `Hi! My name is ${this.firstName}!`
  }
  markLate(){
    this.tardies++;
    if (this.tardies >= 3){
      return "YOU ARE EXPELLED!!!!"
    }
    return `${this.firstName} has been late ${this.tardies} times.`
  }
  addScore(score){
    this.scores.push(score)
    return this.scores
  }

  // class methods get the static keyword

  static enrollStudents(...students){
    // does something to all the students
  }

}

let zoe = new Student("Zoe", "Friedman")
let charlie = new Student("Charlie", "DeChants")

console.log(zoe.markLate())