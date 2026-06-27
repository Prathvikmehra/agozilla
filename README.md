# 🦖 Agozilla

> **Human-friendly date & time formatting for JavaScript.**

![Node](https://img.shields.io/badge/Node-%3E%3D18-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)
[![npm version](https://img.shields.io/npm/v/agozilla.svg)](https://www.npmjs.com/package/agozilla)
[![npm downloads](https://img.shields.io/npm/dw/agozilla.svg)](https://www.npmjs.com/package/agozilla)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![CI](https://github.com/Prathvikmehra/agozilla/actions/workflows/test.yml/badge.svg)](https://github.com/Prathvikmehra/agozilla/actions)

A lightweight JavaScript library for formatting dates into natural, human-readable expressions.

No dependencies. Fast. TypeScript ready.

---

## 📦 Installation

```bash
npm install agozilla
```

---

## 🚀 Quick Start

```javascript
const agozilla = require("agozilla");

console.log(agozilla("2024-01-01"));
// 2 years ago

console.log(agozilla.fromNow("2024-01-01"));
// 2 years ago

console.log(
  agozilla.duration(
    "2020-01-01",
    "2025-01-01"
  )
);
// 5 years

console.log(
  agozilla.until("2030-01-01")
);
// in 3 years

console.log(
  agozilla.smart(new Date())
);
// Today
```

---

## ✨ Features

- ⚡ Zero dependencies
- 🌍 Locale support
- 📦 TypeScript definitions
- ⏱ Relative time formatting
- 📅 Human-friendly dates
- 🧪 Jest tested
- ✅ GitHub Actions CI

---

## 📚 API

### fromNow()

```javascript
agozilla.fromNow(date);
```

Returns:

```
2 years ago
```

---

### duration()

```javascript
agozilla.duration(start, end);
```

Returns:

```
5 years 3 months
```

---

### until()

```javascript
agozilla.until(date);
```

Returns:

```
in 2 months
```

---

### smart()

```javascript
agozilla.smart(date);
```

Returns:

```
Today

Yesterday

Tomorrow

5 years ago
```

---

## 🌍 Locales

```javascript
agozilla.fromNow(date, {
    locale: "en"
});

agozilla.fromNow(date, {
    locale: "es"
});

agozilla.fromNow(date, {
    locale: "fr"
});
```

---

## 🗺 Roadmap

- ✅ fromNow()
- ✅ duration()
- ✅ until()
- ✅ smart()
- ⏳ calendar()
- ⏳ live()
- ⏳ browser bundle
- ⏳ React package

---

## 🤝 Contributing

Contributions, feature requests and bug reports are welcome.

If you'd like to contribute, feel free to open an issue or submit a pull request.

---

## 📄 License

MIT © Prathvik Mehra