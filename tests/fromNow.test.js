
const agozilla = require("../index");

describe("fromNow()", () => {
    const now = new Date("2026-01-01T14:00:00.000Z");

    test("returns Invalid date for invalid input", () => {
        expect(agozilla.fromNow("hello")).toBe("Invalid date");
    });

    test("returns a string", () => {
        expect(typeof agozilla.fromNow("2024-01-01")).toBe("string");
    });

    test("supports short format", () => {
        expect(
            agozilla.fromNow("2024-01-01", { short: true })
        ).toContain("y");
    });

    test("formats English past dates", () => {
        const date = new Date("2026-01-01T12:00:00.000Z");

        expect(
            agozilla.fromNow(date, {
                locale: "en",
                now
            })
        ).toBe("2 hours ago");
    });

    test("formats Spanish past dates", () => {
        const date = new Date("2026-01-01T12:00:00.000Z");

        expect(
            agozilla.fromNow(date, {
                locale: "es",
                now
            })
        ).toBe("hace 2 horas");
    });

    test("formats French past dates", () => {
        const date = new Date("2026-01-01T12:00:00.000Z");

        expect(
            agozilla.fromNow(date, {
                locale: "fr",
                now
            })
        ).toBe("il y a 2 heures");
    });

    test("formats English future dates", () => {
        const date = new Date("2026-01-01T16:00:00.000Z");

        expect(
            agozilla.fromNow(date, {
                locale: "en",
                now
            })
        ).toBe("in 2 hours");
    });

    test("formats Spanish future dates", () => {
        const date = new Date("2026-01-01T16:00:00.000Z");

        expect(
            agozilla.fromNow(date, {
                locale: "es",
                now
            })
        ).toBe("en 2 horas");
    });

    test("formats French future dates", () => {
        const date = new Date("2026-01-01T16:00:00.000Z");

        expect(
            agozilla.fromNow(date, {
                locale: "fr",
                now
            })
        ).toBe("dans 2 heures");
    });

    test("localizes just now in Spanish", () => {
        expect(
            agozilla.fromNow(now, {
                locale: "es",
                now
            })
        ).toBe("ahora mismo");
    });

    test("localizes just now in French", () => {
        expect(
            agozilla.fromNow(now, {
                locale: "fr",
                now
            })
        ).toBe("à l’instant");
    });

    test("returns a localized error for invalid reference dates", () => {
        expect(
            agozilla.fromNow(now, {
                locale: "es",
                now: "invalid-date"
            })
        ).toBe("Fecha de referencia no válida");
    });


    test("handles January 31 to February 28 as one month ago", () => {
        expect(
            agozilla.fromNow("2025-01-31T12:00:00Z", {
                now: "2025-02-28T12:00:00Z"
            })
        ).toBe("1 month ago");
    });

    test("handles an incomplete calendar month", () => {
        expect(
            agozilla.fromNow("2025-01-31T12:00:00Z", {
                now: "2025-02-27T12:00:00Z"
            })
        ).toBe("27 days ago");
    });

    test("handles leap-year relative dates", () => {
        expect(
            agozilla.fromNow("2024-02-29T12:00:00Z", {
                now: "2025-02-28T12:00:00Z"
            })
        ).toBe("1 year ago");
    });

    test("handles future calendar months", () => {
        expect(
            agozilla.fromNow("2025-02-28T12:00:00Z", {
                now: "2025-01-31T12:00:00Z"
            })
        ).toBe("in 1 month");
    });

    test("supports calendar-aware calculations in Spanish", () => {
        expect(
            agozilla.fromNow("2025-01-31T12:00:00Z", {
                locale: "es",
                now: "2025-02-28T12:00:00Z"
            })
        ).toBe("hace 1 mes");
    });

    test("supports calendar-aware calculations in French", () => {
        expect(
            agozilla.fromNow("2025-01-31T12:00:00Z", {
                locale: "fr",
                now: "2025-02-28T12:00:00Z"
            })
        ).toBe("il y a 1 mois");
    });


    test("falls back to English for unsupported locales", () => {
        const date = new Date("2026-01-01T12:00:00.000Z");

        expect(
            agozilla.fromNow(date, {
                locale: "de",
                now
            })
        ).toBe("2 hours ago");
    });
});
