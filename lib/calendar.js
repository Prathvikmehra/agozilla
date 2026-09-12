function calendar(dateString) {
    const inputDate = new Date(dateString);

    if (isNaN(inputDate.getTime())) {
        return "Invalid date";
    }

    const now = new Date();

    // Remove time component so we're comparing calendar days.
    const today = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

    const target = new Date(
        inputDate.getFullYear(),
        inputDate.getMonth(),
        inputDate.getDate()
    );

    const diffDays = Math.round(
        (target - today) / (24 * 60 * 60 * 1000)
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

    const weekday = target.toLocaleDateString("en-US", {
        weekday: "long"
    });

    if (diffDays >= -7 && diffDays < 0) {
        return `Last ${weekday}`;
    }

    if (diffDays > 1 && diffDays <= 7) {
        return `Next ${weekday}`;
    }

    return target.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

module.exports = calendar;