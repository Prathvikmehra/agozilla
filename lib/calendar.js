
const locales = require("./locale");

/**
 * Returns a localized calendar description.
 */
function calendar(dateString, options = {}) {
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

    // Compare calendar days without DST-related time differences.
    const today = Date.UTC(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

    const target = Date.UTC(
        inputDate.getFullYear(),
        inputDate.getMonth(),
        inputDate.getDate()
    );

    const diffDays = Math.round(
        (target - today) / (24 * 60 * 60 * 1000)
    );

    if (diffDays === 0) {
        return localeData.today;
    }

    if (diffDays === -1) {
        return localeData.yesterday;
    }

    if (diffDays === 1) {
        return localeData.tomorrow;
    }

    const weekday = inputDate.toLocaleDateString(
        localeData.intl,
        { weekday: "long" }
    );

    if (diffDays >= -7 && diffDays < 0) {
        return localeData.pastWeekday(weekday);
    }

    if (diffDays > 1 && diffDays <= 7) {
        return localeData.futureWeekday(weekday);
    }

    return inputDate.toLocaleDateString(localeData.intl, {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

module.exports = calendar;
