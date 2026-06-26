const fromNow = require("./fromNow");

/**
 * Returns the remaining time until a future date.
 */
function until(date, options = {}) {
    const target = new Date(date);

    if (isNaN(target.getTime())) {
        return "Invalid date";
    }

    const now = new Date();

    if (target <= now) {
        return "Date has already passed";
    }

    return fromNow(date, options);
}

module.exports = until;