
/**
 * Breaks a difference in seconds into
 * approximate years, months, days, hours,
 * minutes and seconds.
 *
 * Kept for backward compatibility with
 * existing internal calculations.
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

/**
 * Returns the number of days in a UTC calendar month.
 */
function getDaysInMonth(year, month) {
    const date = new Date(0);

    date.setUTCHours(0, 0, 0, 0);
    date.setUTCFullYear(year, month + 1, 0);

    return date.getUTCDate();
}

/**
 * Adds calendar months while preserving the time
 * and clamping the day to the target month's last day.
 */
function addMonths(date, months) {
    const monthIndex =
        date.getUTCFullYear() * 12 +
        date.getUTCMonth() +
        months;

    const year = Math.floor(monthIndex / 12);
    const month = monthIndex - year * 12;

    const day = Math.min(
        date.getUTCDate(),
        getDaysInMonth(year, month)
    );

    const result = new Date(date.getTime());

    result.setUTCDate(1);
    result.setUTCFullYear(year, month, day);

    return result;
}

/**
 * Calculates a duration using actual calendar years
 * and months, followed by remaining elapsed time.
 */
function getCalendarTimeParts(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);

    if (
        isNaN(start.getTime()) ||
        isNaN(end.getTime())
    ) {
        return null;
    }

    // Always calculate a positive duration.
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }

    // Calculate the difference in calendar months.
    let totalMonths =
        (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
        (end.getUTCMonth() - start.getUTCMonth());

    let anchor = addMonths(start, totalMonths);

    // Do not count an incomplete calendar month.
    if (anchor > end) {
        totalMonths--;
        anchor = addMonths(start, totalMonths);
    }

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    // Calculate the remaining elapsed time.
    let remaining = end.getTime() - anchor.getTime();

    const dayMilliseconds = 24 * 60 * 60 * 1000;
    const hourMilliseconds = 60 * 60 * 1000;
    const minuteMilliseconds = 60 * 1000;

    const days = Math.floor(remaining / dayMilliseconds);
    remaining %= dayMilliseconds;

    const hours = Math.floor(remaining / hourMilliseconds);
    remaining %= hourMilliseconds;

    const minutes = Math.floor(remaining / minuteMilliseconds);
    remaining %= minuteMilliseconds;

    const seconds = Math.floor(remaining / 1000);

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
    getTimeParts,
    getCalendarTimeParts
};
