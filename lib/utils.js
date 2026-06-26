/**
 * Breaks a difference in seconds into
 * years, months, days, hours, minutes and seconds.
 */

function getTimeParts(diffSeconds) {
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
    const seconds = diffSeconds % 60;

    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    };
}

module.exports = {
    getTimeParts
};