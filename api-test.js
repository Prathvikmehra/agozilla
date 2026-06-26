const agozilla = require("./index");

console.log("=== API ===");

console.log(typeof agozilla);
console.log(typeof agozilla.fromNow);
console.log(typeof agozilla.duration);

console.log();

console.log("=== Duration ===");

console.log(
    agozilla.duration(
        "2020-01-01",
        "2025-06-08"
    )
);

console.log(
    agozilla.duration(
        "2025-01-01",
        "2025-01-10"
    )
);

console.log(
    agozilla.duration(
        "2024-01-01",
        "2025-06-08",
        {
            short: true
        }
    )
);

console.log();

console.log("=== Until ===");

console.log(
    agozilla.until("2030-01-01")
);

console.log(
    agozilla.until("2000-01-01")
);

console.log();
console.log("=== Smart ===");

console.log(agozilla.smart(new Date()));

console.log(
    agozilla.smart(
        new Date(Date.now() - 86400000)
    )
);

console.log(
    agozilla.smart(
        new Date(Date.now() + 86400000)
    )
);

console.log(
    agozilla.smart("2020-01-01")
);