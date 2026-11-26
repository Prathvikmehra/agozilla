
const locales = require("./locale");
const formatUnit = require("./formatter");
const { getCalendarTimeParts } = require("./utils");

/**
 * Returns a calendar-aware, human-readable duration.
 */
function duration(startDate, endDate, options = {}) {
    const localeData = locales[options.locale] || locales.en;

    const timeParts = getCalendarTimeParts(startDate, endDate);

    if (!timeParts) {
        return localeData.invalidDate;
    }

    const {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    } = timeParts;

    const parts = [];

    if (years) parts.push(formatUnit(years, "year", localeData, options.short));
    if (months) parts.push(formatUnit(months, "month", localeData, options.short));
    if (days) parts.push(formatUnit(days, "day", localeData, options.short));
    if (hours) parts.push(formatUnit(hours, "hour", localeData, options.short));
    if (minutes) parts.push(formatUnit(minutes, "minute", localeData, options.short));
    if (seconds) parts.push(formatUnit(seconds, "second", localeData, options.short));

    if (parts.length === 0) {
        return options.short
            ? formatUnit(0, "second", localeData, true)
            : localeData.zeroDuration;
    }
    const maxUnits = options.maxUnits || 2;

    return parts.slice(0, maxUnits).join(" ");
}

module.exports = duration;
