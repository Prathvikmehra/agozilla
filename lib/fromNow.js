
const locales = require("./locale");
const formatUnit = require("./formatter");
const { getCalendarTimeParts } = require("./utils");

/**
 * Returns localized, calendar-aware relative time.
 */
function fromNow(dateString, options = {}) {
    const localeData = locales[options.locale] || locales.en;

    const inputDate = new Date(dateString);

    if (isNaN(inputDate.getTime())) {
        return localeData.invalidDate;
    }

    const now = options.now === undefined
        ? new Date()
        : new Date(options.now);

    if (isNaN(now.getTime())) {
        return localeData.invalidReferenceDate;
    }

    const difference = Math.abs(now.getTime() - inputDate.getTime());

    if (difference < 5000) {
        return localeData.justNow;
    }

    const isFuture = inputDate > now;

    const timeParts = getCalendarTimeParts(inputDate, now);

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
        return localeData.justNow;
    }

    const maxUnits = options.maxUnits || 2;
    const result = parts.slice(0, maxUnits).join(" ");

    return isFuture
        ? localeData.formatFuture(result)
        : localeData.formatPast(result);
}

module.exports = fromNow;
