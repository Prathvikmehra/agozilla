
const locales = require("./locale");
const fromNow = require("./fromNow");

/**
 * Returns the localized remaining time until a future date.
 */
function until(date, options = {}) {
    const localeData = locales[options.locale] || locales.en;

    const target = new Date(date);

    if (isNaN(target.getTime())) {
        return localeData.invalidDate;
    }

    const now = options.now === undefined
        ? new Date()
        : new Date(options.now);

    if (isNaN(now.getTime())) {
        return localeData.invalidReferenceDate;
    }

    if (target <= now) {
        return localeData.alreadyPassed;
    }

    return fromNow(target, {
        ...options,
        now
    });
}

module.exports = until;
