
# 🦖 Agozilla

> Human-friendly date and time formatting for JavaScript.

[![npm version](https://img.shields.io/npm/v/agozilla.svg)](https://www.npmjs.com/package/agozilla)
[![npm downloads](https://img.shields.io/npm/dw/agozilla.svg)](https://www.npmjs.com/package/agozilla)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![CI](https://github.com/Prathvikmehra/agozilla/actions/workflows/test.yml/badge.svg)](https://github.com/Prathvikmehra/agozilla/actions)

Agozilla is a lightweight, zero-runtime-dependency JavaScript library for converting dates and time differences into human-readable text.

It supports CommonJS, ES modules, TypeScript declarations, modern bundlers, and English, Spanish, and French localization.

## Installation

```bash
npm install agozilla
```

## Quick Start

### CommonJS

```js
const agozilla = require("agozilla");

const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

console.log(agozilla(oneHourAgo));
// 1 hour ago

console.log(agozilla.fromNow(oneHourAgo));
// 1 hour ago

console.log(agozilla.duration("2025-01-31", "2025-02-28"));
// 1 month

console.log(agozilla.smart(new Date()));
// Today

console.log(agozilla.calendar(new Date()));
// Today
```

### ES Modules

```js
import agozilla from "agozilla";

const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

console.log(agozilla(oneHourAgo));
// 1 hour ago
```

## Features

- Zero runtime dependencies
- Relative-time formatting for past and future dates
- Calendar-aware duration calculations
- Time-until formatting
- Smart date descriptions
- Calendar descriptions with nearby weekdays
- English, Spanish, and French localization
- Short-format output
- Configurable maximum time units
- Custom reference dates for predictable results
- TypeScript declarations
- CommonJS and ES module support
- Compatible with modern bundlers

## API Reference

### `agozilla(date, options?)`

Formats a date relative to the current time.

```js
agozilla("2025-01-14T12:00:00Z");
```

### `agozilla.fromNow(date, options?)`

Formats past or future dates relative to the current time.

```js
agozilla.fromNow("2025-01-14T12:00:00Z");
// Example: 1 day ago
```

### `agozilla.duration(startDate, endDate, options?)`

Calculates the duration between two dates using calendar-aware years and months.

```js
agozilla.duration("2025-01-31", "2025-02-28");
// 1 month
```

The calculation handles different month lengths and leap years.

### `agozilla.until(date, options?)`

Returns the remaining time until a future date.

```js
agozilla.until("2025-12-31T23:59:59Z");
```

If the date has already passed, it returns a localized message.

### `agozilla.smart(date, options?)`

Returns a friendly description such as Today, Yesterday, or Tomorrow. Other dates use relative-time formatting.

```js
agozilla.smart(new Date());
// Today
```

### `agozilla.calendar(date, options?)`

Returns Today, Yesterday, Tomorrow, a nearby weekday, or a formatted calendar date.

```js
agozilla.calendar(new Date());
// Today
```

## Options

The APIs accept an optional options object.

| Option | Type | Description |
| --- | --- | --- |
| `short` | `boolean` | Uses compact units such as `1h`, `2d`, and `1mo`. |
| `maxUnits` | `number` | Maximum number of time units to display. Defaults to `2`. |
| `locale` | `"en" \| "es" \| "fr"` | Selects the output language. Defaults to `"en"`. |
| `now` | `string \| number \| Date` | Sets a custom reference date for relative and calendar APIs. |

The `now` option is available for `agozilla`, `fromNow`, `until`, `smart`, and `calendar`. It is not used by `duration`.

### Short Format

```js
agozilla.fromNow("2025-01-14T12:00:00Z", {
  short: true
});
```

### Maximum Units

```js
agozilla.duration("2020-01-01", "2025-01-01", {
  maxUnits: 1
});
```

### Localization

```js
agozilla.fromNow("2025-01-14T12:00:00Z", {
  locale: "es"
});

agozilla.fromNow("2025-01-14T12:00:00Z", {
  locale: "fr"
});
```

### Custom Reference Date

Use `now` when you need predictable output, such as in tests or scheduled applications.

```js
const referenceDate = new Date("2025-01-15T12:00:00Z");

agozilla.fromNow("2025-01-14T12:00:00Z", {
  now: referenceDate
});
// 1 day ago
```

## TypeScript

Agozilla includes TypeScript declarations for all its public APIs and options.

```ts
import agozilla = require("agozilla");

const result: string = agozilla.fromNow(
  new Date(),
  { locale: "en" }
);
```

## Contributing

Bug reports, feature requests, and pull requests are welcome.

For larger changes, please open an issue first to discuss the proposed approach.

## License

MIT © Prathvik Mehra
