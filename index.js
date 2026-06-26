const fromNow = require("./lib/fromNow");

const duration = require("./lib/duration");
const until = require("./lib/until");
const smart = require("./lib/smart");
const calendar = require("./lib/calendar");
const countdown = require("./lib/countdown");

// Backward compatibility
fromNow.fromNow = fromNow;

// New APIs
fromNow.duration = duration;
fromNow.until = until;
fromNow.smart = smart;
fromNow.calendar = calendar;
fromNow.countdown = countdown;

module.exports = fromNow;