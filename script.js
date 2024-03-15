// "use strict";
// /*
// -------->> this keyword <<-----------

// Default Binding (this comes into play when standalone function is invoked. this keyword thus points to global context)
function myFunction() {
  console.log(this);
}
myFunction();

// Implicit Binding (1) (As we're invoking function through an object using dot notation, it'll naturally point to obj as it's invoker since it's used as value inside object)
function disFunction() {
  console.log(this);
}
const exmObj = {
  disFunction: disFunction,
};
exmObj.disFunction();

// Implicit Binding (2) (In this unique example, we're invoking a standalone function immediately and it's wrapped inside another function which is a value of object so this keyword will first look at inner func which is standalone so naturally, it'll select global context which is window)
const newObj = {
  outer: function () {
    function inner() {
      console.log(this);
    }
    inner();
  },
};

newObj.outer();

// Explicit Binding (use of call, play, bind)

// Call (person is simple obj comprised of first name, last name and a function which returns first name and last name concatenated. Greet is a function which takes in greeting argument and log greeting then use this.fullName which it takes thorugh provided context from call method when greet func is invoked. It means when greet function is called, call method is used on it which gives first argument as context from which our func is going to take this keyword context from and second argument is just regular argument that function normally takes)
const person = {
  firstName: "Faizan",
  lastName: "Raza",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const greet = function (greetings) {
  console.log(greetings + ", " + this.fullName());
};

greet.call(person, "Hello");

// Apply (when we want to give this keyword context to a function in form of array)
const nums = [42, 23, 57, 94, 23];
const nums2 = [42, 23, 57, 94, 23];
const calcSum = function () {
  return this.reduce((acc, num) => {
    return acc + num;
  }, 0);
};
const sum = calcSum.apply(nums);
const sum2 = calcSum.apply(nums2);
console.log(sum);
console.log(sum2);
// */

// -------->> Array methods <<-----------

// Reduce Method
/*
  // Example 1 (reducing to single value)
  const items = [
    { name: "Apple", price: 100 },
    { name: "Banana", price: 30 },
    { name: "Chocolate", price: 340 },
  ];
  
  const calcItem = items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
  
  console.log(calcItem);
  
  
  // Example 2 (by category; still confusing)
  const foods = [
    { name: "Apple", category: "Fruit" },
    { name: "Lettuce", category: "Vegetable" },
    { name: "Banana", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
  ];
  
  const catFood = foods.reduce((acc, food) => {
    const category = food.category;
    if (!acc[category]) {
        acc[category] = [];
      }
    acc[category].push(food.name);
    return acc;
  }, {});
  
  console.log(catFood);
  
  */
