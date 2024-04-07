"use strict";

// #These notes are taken from jonas course after yet another rewatch

// Higher order function vs First class function
// - First class functions means functions which are obj and obj are values in js are just on high priority when hoisted. Higher order functions are functions which either receives a func or return a function

// Callback functions (DOM)
function upperCase(str) {
  return str.toUpperCase();
}
function greet(str) {
  // This func is calling another function from global context
  console.log(`Hello, ${upperCase(str)}`);
}
greet("Faizan");
// Functions returning functions
// - Example 1: Currying
function say(speech) {
  return function (name) {
    console.log(`${speech}, ${name}`);
  };
}
// -- Method 1
const saySth = say("To my fellow friend");
saySth("Faizan");
// -- Method 2
say("To my fellow foe")("Fazy");

// - Example 2: DOM (make sure script tag given after body tag or use defer if not below body)
function wave() {
  console.log("👋");
}
const bodyEl = document.querySelector("body");
bodyEl.addEventListener("click", wave);
// Call, Apply and Bind method (Lufthansa) (call for this keyword, apply for array but could also be done with call with rest op, bind for ret new func & dom example and partial application for preset)
const flight = {
  flightName: "Airblue",
  flightAbbr: "AR",
  booking: [],
  book(fullName, passport) {
    this.booking.push({
      flightDetail: `${fullName} has booked ${this.flightName} flight at registered number ${this.flightAbbr}${passport}.`
    });
  },
};
flight.book("Faizan", 31209389012);
console.log(flight.booking);
const flight2 = {
  flightName: "Eurowing",
  flightAbbr: "EW",
  booking: [],
};

const book = flight.book;
book.call(flight2, "Hassan", 231241421);
console.log(flight2.booking);

console.log(flight);

const flight3 = {
  flightName: "Swiss", 
  flightAbbr: "SW",
  booking: [],
};
const personDetail = ['Cooper', 2141215912]
const personDetail2 = ['Cooper', 2141215912]
book.apply(flight3, personDetail);
book.call(flight3, ...personDetail2);
console.log(flight3.booking);


const flight4 = {
  flightName: 'Pakistan International Airlines',
  flightAbbr: 'PIA',
  booking: [],
};

const bookPIA = book.bind(flight4);
bookPIA('Hamza', 21941204);
console.log(flight4.booking)
// using preset
const flight5 = {
  flightName: 'Serine Airline',
  flightAbbr: 'SA',
  booking: [],
};
const bookSA = book.bind(flight5, 'Random');
bookSA(3012399123);
console.log(flight5.booking);