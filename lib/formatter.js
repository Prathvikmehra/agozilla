/**
 * Formats a single time unit.
 *
 * @param {number} value
 * @param {string} unit
 * @param {object} localeData
 * @param {boolean} short
 * @returns {string}
 */

const locales = require("./locale");

function formatUnit(value, unit, localeData, short = false) {
    const shortMap = {
        year: "y",
        month: "mo",
        day: "d",
        hour: "h",
        minute: "m",
        second: "s",
    };

    if (short) {
        return `${value}${shortMap[unit]}`;
    }

    let label = localeData[unit];

    if (Array.isArray(label)) {
        label = value === 1 ? label[0] : label[1];
        return `${value} ${label}`;
    }

    // French special case
    if (localeData === locales.fr && unit === "month") {
        return `${value} ${label}`;
    }

    return `${value} ${label}${value === 1 ? "" : "s"}`;
}

module.exports = formatUnit;