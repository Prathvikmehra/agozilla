const locales = require("./lib/locale");
const formatUnit = require("./lib/formatter");
const { getTimeParts } = require("./lib/utils");

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

    // Check whether the date is in the future
    const isFuture = diffSeconds < 0;

    // Break the time difference into units
    const {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    } = getTimeParts(diffSeconds);

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