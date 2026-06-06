function formatUnit(value, unit, short = false) {
    const shortMap = {
        year: "y",
        month: "mo",
        day: "d",
        hour: "h",
        minute: "m",
    };

    if (short) {
        return `${value}${shortMap[unit]}`;
    }

    return `${value} ${unit}${value === 1 ? "" : "s"}`;
}

function howLongAgo(dateString, options = {}) {
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

    const parts = [];

    if (years) parts.push(formatUnit(years, "year", options.short));
    if (months) parts.push(formatUnit(months, "month", options.short));
    if (days) parts.push(formatUnit(days, "day", options.short));
    if (hours) parts.push(formatUnit(hours, "hour", options.short));
    if (minutes) parts.push(formatUnit(minutes, "minute", options.short));

    const maxUnits = options.maxUnits || 2;

    const result = parts.slice(0, maxUnits).join(" ");

    return isFuture ? `in ${result}` : `${result} ago`;
}

module.exports = howLongAgo;