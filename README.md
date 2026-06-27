![npm version]
![downloads]
![license]
![build]
![typescript]

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

## Future Dates

```js
agozilla("2030-01-01");

// in 3 years 6 months
```

## Short Format

```js
agozilla("2024-01-01", {
  short: true
});

// 2y 5mo ago
```

## Limit Units

```js
agozilla("2024-01-01", {
  maxUnits: 1
});

// 2 years ago
```

## TypeScript

```ts
import agozilla = require("agozilla");

const result = agozilla("2024-01-01");
```

## Features

- Past dates
- Future dates
- Short format support
- Multi-unit formatting
- Seconds support
- TypeScript support
- Zero dependencies

## Locale Support

```js
agozilla("2024-01-01", {
  locale: "es"
});
// hace 2 años 5 meses

agozilla("2024-01-01", {
  locale: "fr"
});
// il y a 2 ans 5 mois
```

## License

MIT
