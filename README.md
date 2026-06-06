# Agozilla 🦖

Turn boring dates into human-readable time.

## Installation

```bash
npm install agozilla
```

## Usage

```js
const agozilla = require("agozilla");

console.log(agozilla("2024-01-01"));
// 2 years 5 months ago
```

### Short Format

```js
agozilla("2024-01-01", {
  short: true,
});
```

Output:

```txt
2y 5mo ago
```

### Limit Units

```js
agozilla("2024-01-01", {
  maxUnits: 1,
});
```

Output:

```txt
2 years ago
```

## Features

* Past dates
* Future dates
* Short format
* Multi-unit output
* Invalid date handling
* Lightweight
* Zero dependencies

## License

MIT
