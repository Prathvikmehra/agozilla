const howLongAgo = require("./index");

console.log(
  howLongAgo("2024-01-01", {
    maxUnits: 1,
  })
);

console.log(
  howLongAgo("2024-01-01", {
    maxUnits: 3,
  })
);

console.log(
  howLongAgo("2024-01-01", {
    short: true,
    maxUnits: 3,
  })
);