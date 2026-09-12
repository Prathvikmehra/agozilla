const agozilla = require("../index");

describe("calendar()", () => {
    test("returns Today for the current date", () => {
        expect(agozilla.calendar(new Date())).toBe("Today");
    });

    test("returns Yesterday for yesterday", () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        expect(agozilla.calendar(yesterday)).toBe("Yesterday");
    });

    test("returns Tomorrow for tomorrow", () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        expect(agozilla.calendar(tomorrow)).toBe("Tomorrow");
    });

    test("returns Last weekday for a recent past date", () => {
        const date = new Date();
        date.setDate(date.getDate() - 3);

        const expectedWeekday = date.toLocaleDateString("en-US", {
            weekday: "long"
        });

        expect(agozilla.calendar(date)).toBe(`Last ${expectedWeekday}`);
    });

    test("returns Next weekday for a recent future date", () => {
        const date = new Date();
        date.setDate(date.getDate() + 3);

        const expectedWeekday = date.toLocaleDateString("en-US", {
            weekday: "long"
        });

        expect(agozilla.calendar(date)).toBe(`Next ${expectedWeekday}`);
    });

    test("returns a formatted date for older dates", () => {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 2);

        const expected = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        expect(agozilla.calendar(date)).toBe(expected);
    });

    test("returns Invalid date for invalid input", () => {
        expect(agozilla.calendar("not-a-date")).toBe("Invalid date");
    });
});