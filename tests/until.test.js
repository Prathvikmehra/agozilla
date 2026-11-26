
const agozilla = require("../index");

describe("until()", () => {
    const now = new Date("2026-01-01T14:00:00.000Z");
    const future = new Date("2026-01-01T16:00:00.000Z");
    const past = new Date("2026-01-01T12:00:00.000Z");

    test("returns an error for invalid dates", () => {
        expect(
            agozilla.until("invalid")
        ).toBe("Invalid date");
    });

    test("returns remaining time in English", () => {
        expect(
            agozilla.until(future, {
                locale: "en",
                now
            })
        ).toBe("in 2 hours");
    });

    test("returns remaining time in Spanish", () => {
        expect(
            agozilla.until(future, {
                locale: "es",
                now
            })
        ).toBe("en 2 horas");
    });

    test("returns remaining time in French", () => {
        expect(
            agozilla.until(future, {
                locale: "fr",
                now
            })
        ).toBe("dans 2 heures");
    });

    test("returns localized expired-date message in English", () => {
        expect(
            agozilla.until(past, {
                locale: "en",
                now
            })
        ).toBe("Date has already passed");
    });

    test("returns localized expired-date message in Spanish", () => {
        expect(
            agozilla.until(past, {
                locale: "es",
                now
            })
        ).toBe("La fecha ya pasó");
    });

    test("returns localized expired-date message in French", () => {
        expect(
            agozilla.until(past, {
                locale: "fr",
                now
            })
        ).toBe("La date est déjà passée");
    });

    test("returns an error for invalid reference dates", () => {
        expect(
            agozilla.until(future, {
                locale: "es",
                now: "invalid"
            })
        ).toBe("Fecha de referencia no válida");
    });

    test("supports short format", () => {
        expect(
            agozilla.until(future, {
                short: true,
                now
            })
        ).toBe("in 2h");
    });

    test("respects maxUnits", () => {
        expect(
            agozilla.until(
                new Date("2026-01-03T16:00:00.000Z"),
                {
                    maxUnits: 1,
                    now
                }
            )
        ).toBe("in 2 days");
    });


    test("calculates complete calendar months correctly", () => {
        expect(
            agozilla.until("2025-02-28T12:00:00Z", {
                now: "2025-01-31T12:00:00Z"
            })
        ).toBe("in 1 month");
    });

    test("supports calendar-aware Spanish formatting", () => {
        expect(
            agozilla.until("2025-02-28T12:00:00Z", {
                locale: "es",
                now: "2025-01-31T12:00:00Z"
            })
        ).toBe("en 1 mes");
    });

    test("treats the reference time itself as an expired date", () => {
        const now = new Date("2026-01-01T12:00:00Z");

        expect(
            agozilla.until(now, {
                now,
                locale: "en"
            })
        ).toBe("Date has already passed");
    });

});
