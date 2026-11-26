
const agozilla = require("../index");

describe("duration()", () => {
    const start = new Date("2026-01-01T12:00:00.000Z");
    const end = new Date("2026-01-01T14:00:00.000Z");

    test("returns Invalid date for invalid inputs", () => {
        expect(
            agozilla.duration("abc", "xyz")
        ).toBe("Invalid date");
    });

    test("returns a string", () => {
        expect(
            typeof agozilla.duration(start, end)
        ).toBe("string");
    });

    test("formats English duration", () => {
        expect(
            agozilla.duration(start, end, {
                locale: "en"
            })
        ).toBe("2 hours");
    });

    test("formats Spanish duration", () => {
        expect(
            agozilla.duration(start, end, {
                locale: "es"
            })
        ).toBe("2 horas");
    });

    test("formats French duration", () => {
        expect(
            agozilla.duration(start, end, {
                locale: "fr"
            })
        ).toBe("2 heures");
    });

    test("supports short format", () => {
        expect(
            agozilla.duration(start, end, {
                short: true
            })
        ).toBe("2h");
    });

    test("respects maxUnits", () => {
        expect(
            agozilla.duration(
                "2020-01-01",
                "2025-01-01",
                { maxUnits: 1 }
            )
        ).toBe("5 years");
    });

    test("returns localized zero duration", () => {
        expect(
            agozilla.duration(start, start, {
                locale: "es"
            })
        ).toBe("0 segundos");
    });

    test("returns a French zero duration", () => {
        expect(
            agozilla.duration(start, start, {
                locale: "fr"
            })
        ).toBe("0 seconde");
    });

    test("localizes invalid date errors", () => {
        expect(
            agozilla.duration("invalid", end, {
                locale: "es"
            })
        ).toBe("Fecha no válida");
    });

    test("supports dates in reverse order", () => {
        expect(
            agozilla.duration(end, start)
        ).toBe("2 hours");
    });


    test("treats January 31 to February 28 as one month", () => {
        expect(
            agozilla.duration("2025-01-31", "2025-02-28")
        ).toBe("1 month");
    });

    test("handles leap-year duration correctly", () => {
        expect(
            agozilla.duration("2024-02-29", "2025-02-28")
        ).toBe("1 year");
    });

    test("handles an incomplete calendar month", () => {
        expect(
            agozilla.duration("2025-01-31", "2025-02-27")
        ).toBe("27 days");
    });

    test("calculates remaining days after complete calendar months", () => {
        expect(
            agozilla.duration("2025-01-31", "2025-03-01")
        ).toBe("1 month 1 day");
    });


    test("returns zero seconds in English", () => {
        const date = new Date("2026-01-01T12:00:00Z");

        expect(
            agozilla.duration(date, date, { locale: "en" })
        ).toBe("0 seconds");
    });

    test("returns zero seconds in short format", () => {
        const date = new Date("2026-01-01T12:00:00Z");

        expect(
            agozilla.duration(date, date, { short: true })
        ).toBe("0s");
    });

    test("recognizes equivalent timestamps with different timezone offsets", () => {
        expect(
            agozilla.duration(
                "2025-01-01T00:00:00-05:00",
                "2025-01-01T05:00:00Z"
            )
        ).toBe("0 seconds");
    });

    test("handles a spring daylight-saving transition", () => {
        expect(
            agozilla.duration(
                "2025-03-09T01:30:00-08:00",
                "2025-03-10T01:30:00-07:00"
            )
        ).toBe("23 hours");
    });

    test("handles an autumn daylight-saving transition", () => {
        expect(
            agozilla.duration(
                "2025-11-02T01:30:00-07:00",
                "2025-11-03T01:30:00-08:00"
            )
        ).toBe("1 day 1 hour");
    });


    test("supports reversed calendar date ranges", () => {
        expect(
            agozilla.duration("2025-02-28", "2025-01-31")
        ).toBe("1 month");
    });

});
