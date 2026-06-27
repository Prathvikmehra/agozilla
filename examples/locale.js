const agozilla = require("../index");

console.log(
    agozilla.fromNow("2024-01-01", {
        locale: "en"
    })
);

console.log(
    agozilla.fromNow("2024-01-01", {
        locale: "es"
    })
);

console.log(
    agozilla.fromNow("2024-01-01", {
        locale: "fr"
    })
);