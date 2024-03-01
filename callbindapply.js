// object binding in javascript

// 2 types implicit binding and explicit binding

// implicit binding

const person = {
  name: "ganeshmsk",
  greeting(){
    console.log(`Hello, my name is ${this.name}`)
  }
}

console.log(person.name)
person.greeting();


//explicit binding

const person1 = {
  name: "sai krishna"
}

// call 

function greeting1(message){
  console.log(`Hello, my name is ${this.name}. ${message}`)
}

greeting1.call(person1, "welcome to my world");

// apply

const obj1 = {
  name: "ganesh",
  age: 22
}

console.log(obj1);

function changeAgeandName(newName,newAge){
   console.log(`${this.name} and ${this.age}`)
  this.name = newName;
  this.age = newAge;
  
  console.log(`${this.name} and ${this.age}`)
}

changeAgeandName.apply(obj1, ["ganeshnew", 28]);

console.log(obj1);


//bind function

const obj2 = {
  name: "mybigname",
  age: 10
}

function changeAge(age){
  this.age = age;
  console.log(this);
}

const result = changeAge.bind(obj2);

result(20);
result(30);













