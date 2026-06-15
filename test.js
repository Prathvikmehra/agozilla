const agozilla = require("./index");

console.log("English:");
console.log(agozilla("2024-01-01"));
console.log();

console.log("Spanish:");
console.log(
  agozilla("2024-01-01", {
    locale: "es"
  })
);
console.log();

console.log("French:");
console.log(
  agozilla("2024-01-01", {
    locale: "fr"
  })
);
console.log();

console.log("Short Format:");
console.log(
  agozilla("2024-01-01", {
    short: true
  })
);
console.log();

console.log("One Unit Only:");
console.log(
  agozilla("2024-01-01", {
    maxUnits: 1
  })
);
console.log();

console.log("Future Date:");
console.log(
  agozilla("2030-01-01")
);