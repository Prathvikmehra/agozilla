const fromNow = require("./fromNow");

/**
 * Returns a smart human-readable date.
 */
function smart(date, options = {}) {
    const input = new Date(date);

    if (isNaN(input.getTime())) {
        return "Invalid date";
    }

    const now = new Date();

    // Ignore time of day
    const today = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

    const target = new Date(
        input.getFullYear(),
        input.getMonth(),
        input.getDate()
    );

    const diffDays = Math.round(
        (target - today) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 0) {
        return "Today";
    }

    if (diffDays === -1) {
        return "Yesterday";
    }

    if (diffDays === 1) {
        return "Tomorrow";
    }

    return fromNow(date, options);
}

module.exports = smart;