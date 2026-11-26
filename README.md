# 🦖 Agozilla

> Human-friendly date and time formatting for JavaScript.

[![npm version](https://img.shields.io/npm/v/agozilla.svg)](https://www.npmjs.com/package/agozilla)
[![npm downloads](https://img.shields.io/npm/dw/agozilla.svg)](https://www.npmjs.com/package/agozilla)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![CI](https://github.com/Prathvikmehra/agozilla/actions/workflows/test.yml/badge.svg)](https://github.com/Prathvikmehra/agozilla/actions)

Agozilla is a lightweight, zero-dependency JavaScript library for turning dates and time differences into human-readable text. It supports CommonJS, ES modules, TypeScript declarations, and modern bundlers.

## Installation

```bash
npm install agozilla
```

## Quick start

### CommonJS

```js
const agozilla = require("agozilla");

const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

console.log(agozilla(oneHourAgo));
// 1 hour ago

console.log(agozilla.fromNow(oneHourAgo));
// 1 hour ago

console.log(agozilla.duration("2020-01-01", "2025-01-01"));
// 5 years 2 days

console.log(agozilla.smart(new Date()));
// Today

console.log(agozilla.calendar(new Date()));
// Today
```

### ES modules

```js
import agozilla from "agozilla";

const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

console.log(agozilla(oneHourAgo));
// 1 hour ago
```

## Features

- Zero runtime dependencies
- Relative-time formatting
- Duration between two dates
- Time-until formatting
- Smart date descriptions (Today, Yesterday, Tomorrow, or relative time)
- Calendar descriptions (including nearby weekdays)
- English, Spanish, and French locale options
- Short-format and maximum-unit options
- TypeScript declarations
- CommonJS and ESM entry points
- Compatible with modern bundlers

## API

### `agozilla(date, options?)` / `agozilla.fromNow(date, options?)`

Formats a date relative to the current time. Past dates return text such as `1 hour ago`; future dates return text such as `in 2 hours`.

```js
agozilla(new Date(Date.now() - 60 * 60 * 1000));
agozilla.fromNow("2024-01-01");
```

### `agozilla.duration(startDate, endDate, options?)`

Returns the elapsed duration between two dates.

```js
agozilla.duration("2020-01-01", "2025-01-01");
// 5 years 2 days
```

### `agozilla.until(date, options?)`

Returns the remaining time until a future date. If the date has already passed, it returns `Date has already passed`.

```js
agozilla.until(new Date(Date.now() + 60 * 60 * 1000));
```

### `agozilla.smart(date, options?)`

Returns `Today`, `Yesterday`, or `Tomorrow` for those calendar days. For other dates, it uses relative-time formatting.

```js
agozilla.smart(new Date());
// Today
```

### `agozilla.calendar(date)`

Returns `Today`, `Yesterday`, `Tomorrow`, a nearby weekday description such as `Last Monday` or `Next Friday`, or a formatted calendar date for older dates.

```js
agozilla.calendar(new Date());
// Today

agozilla.calendar("2024-01-01");
// January 1, 2024
```

## Options

The relative-time APIs accept an optional options object:

| Option | Type | Description |
| --- | --- | --- |
| `short` | `boolean` | Use compact units such as `1h` or `2d`. |
| `maxUnits` | `number` | Maximum number of time units to include. Defaults to `2`. |
| `locale` | `"en" \| "es" \| "fr"` | Select English, Spanish, or French wording. Defaults to `"en"`. |

```js
agozilla.fromNow("2024-01-01", {
  short: true,
  maxUnits: 1,
  locale: "en"
});

agozilla.duration("2020-01-01", "2025-01-01", {
  locale: "es"
});
```

Invalid date inputs return `Invalid date`.

## TypeScript

Agozilla ships TypeScript declarations for its public APIs and options. Install it as usual:

```bash
npm install agozilla
```

## Contributing

Bug reports, feature requests, and pull requests are welcome. For larger changes, please open an issue first so we can discuss the approach.

## License

MIT © Prathvik Mehra
