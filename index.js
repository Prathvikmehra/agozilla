const locales = require("./lib/locale");


function formatUnit(value, unit, localeData, short = false) {
    const shortMap = {
        year: "y",
        month: "mo",
        day: "d",
        hour: "h",
        minute: "m",
        second: "s",
    };

    if (short) {
        return `${value}${shortMap[unit]}`;
    }

   let label = localeData[unit];

if (Array.isArray(label)) {
    label = value === 1 ? label[0] : label[1];
    return `${value} ${label}`;
}

    // French special case
    if (localeData === locales.fr && unit === "month") {
        return `${value} ${label}`;
    }

    return `${value} ${label}${value === 1 ? "" : "s"}`;
}

function howLongAgo(dateString, options = {}) {
    const locale = options.locale || "en";
    const localeData = locales[locale] || locales.en;

    const inputDate = new Date(dateString);

    if (isNaN(inputDate.getTime())) {
        return "Invalid date";
    }

    const now = new Date();

    let diffSeconds = Math.floor((now - inputDate) / 1000);

    if (Math.abs(diffSeconds) < 5) {
        return "just now";
    }

    const isFuture = diffSeconds < 0;
    diffSeconds = Math.abs(diffSeconds);

    const years = Math.floor(diffSeconds / (365 * 24 * 60 * 60));
    diffSeconds %= 365 * 24 * 60 * 60;

    const months = Math.floor(diffSeconds / (30 * 24 * 60 * 60));
    diffSeconds %= 30 * 24 * 60 * 60;

    const days = Math.floor(diffSeconds / (24 * 60 * 60));
    diffSeconds %= 24 * 60 * 60;

    const hours = Math.floor(diffSeconds / (60 * 60));
    diffSeconds %= 60 * 60;

    const minutes = Math.floor(diffSeconds / 60);
    const seconds = diffSeconds % 60;

    const parts = [];

    if (years) parts.push(formatUnit(years, "year", localeData, options.short));
    if (months) parts.push(formatUnit(months, "month", localeData, options.short));
    if (days) parts.push(formatUnit(days, "day", localeData, options.short));
    if (hours) parts.push(formatUnit(hours, "hour", localeData, options.short));
    if (minutes) parts.push(formatUnit(minutes, "minute", localeData, options.short));
    if (seconds) parts.push(formatUnit(seconds, "second", localeData, options.short));

    if (parts.length === 0) {
        return "just now";
    }

    const maxUnits = options.maxUnits || 2;
    const result = parts.slice(0, maxUnits).join(" ");

    if (locale === "es") {
        return isFuture
            ? `${localeData.in} ${result}`
            : `${localeData.ago} ${result}`;
    }

    if (locale === "fr") {
        return isFuture
            ? `${localeData.in} ${result}`
            : `${localeData.ago} ${result}`;
    }

    return isFuture
        ? `in ${result}`
        : `${result} ago`;
}

module.exports = howLongAgo;