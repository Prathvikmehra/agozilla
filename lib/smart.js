
const locales = require("./locale");
const fromNow = require("./fromNow");

/**
 * Returns a localized, human-friendly date description.
 */
function smart(date, options = {}) {
    const localeData = locales[options.locale] || locales.en;

    const input = new Date(date);

    if (isNaN(input.getTime())) {
        return localeData.invalidDate;
    }

    const now = options.now === undefined
        ? new Date()
        : new Date(options.now);

    if (isNaN(now.getTime())) {
        return localeData.invalidReferenceDate;
    }

    // Compare calendar dates without DST-related millisecond differences.
    const today = Date.UTC(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

    const target = Date.UTC(
        input.getFullYear(),
        input.getMonth(),
        input.getDate()
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

    return fromNow(date, {
        ...options,
        now
    });
}

module.exports = smart;
