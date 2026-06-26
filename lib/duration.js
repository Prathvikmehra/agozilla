const locales = require("./locale");
const formatUnit = require("./formatter");
const { getTimeParts } = require("./utils");

/**
 * Returns a human-readable duration between two dates.
 */
function duration(startDate, endDate, options = {}) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return "Invalid date";
    }

    const locale = options.locale || "en";
    const localeData = locales[locale] || locales.en;

    const diffSeconds = Math.floor(
        Math.abs(end - start) / 1000
    );

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
        return "0 seconds";
    }

    const maxUnits = options.maxUnits || 2;

    return parts.slice(0, maxUnits).join(" ");
}

module.exports = duration;