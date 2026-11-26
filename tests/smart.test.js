
const agozilla = require("../index");

describe("smart()", () => {
    const now = new Date(2026, 0, 1, 14, 0);

    test("returns Invalid date for invalid input", () => {
        expect(
            agozilla.smart("invalid")
        ).toBe("Invalid date");
    });

    test("returns Today in English", () => {
        expect(
            agozilla.smart(new Date(2026, 0, 1, 10), {
                locale: "en",
                now
            })
        ).toBe("Today");
    });

    test("returns Yesterday in English", () => {
        expect(
            agozilla.smart(new Date(2025, 11, 31, 14), {
                locale: "en",
                now
            })
        ).toBe("Yesterday");
    });

    test("returns Tomorrow in English", () => {
        expect(
            agozilla.smart(new Date(2026, 0, 2, 10), {
                locale: "en",
                now
            })
        ).toBe("Tomorrow");
    });

    test("returns Hoy in Spanish", () => {
        expect(
            agozilla.smart(new Date(2026, 0, 1), {
                locale: "es",
                now
            })
        ).toBe("Hoy");
    });

    test("returns Ayer in Spanish", () => {
        expect(
            agozilla.smart(new Date(2025, 11, 31), {
                locale: "es",
                now
            })
        ).toBe("Ayer");
    });

    test("returns Mañana in Spanish", () => {
        expect(
            agozilla.smart(new Date(2026, 0, 2), {
                locale: "es",
                now
            })
        ).toBe("Mañana");
    });

    test("returns Aujourd’hui in French", () => {
        expect(
            agozilla.smart(new Date(2026, 0, 1), {
                locale: "fr",
                now
            })
        ).toBe("Aujourd’hui");
    });

    test("uses localized relative formatting for other dates", () => {
        expect(
            agozilla.smart(new Date(2026, 0, 3, 14), {
                locale: "es",
                now
            })
        ).toBe("en 2 días");
    });

    test("supports future relative formatting in French", () => {
        expect(
            agozilla.smart(new Date(2026, 0, 3, 14), {
                locale: "fr",
                now
            })
        ).toBe("dans 2 jours");
    });

    test("returns localized error for invalid reference date", () => {
        expect(
            agozilla.smart(now, {
                locale: "es",
                now: "invalid"
            })
        ).toBe("Fecha de referencia no válida");
    });

    test("falls back to English for unsupported locales", () => {
        expect(
            agozilla.smart(new Date(2026, 0, 1), {
                locale: "de",
                now
            })
        ).toBe("Today");
    });


    test("uses calendar-aware calculations for past months", () => {
        expect(
            agozilla.smart("2025-01-31T12:00:00Z", {
                now: "2025-02-28T12:00:00Z"
            })
        ).toBe("1 month ago");
    });

    test("uses calendar-aware calculations for future months", () => {
        expect(
            agozilla.smart("2025-02-28T12:00:00Z", {
                now: "2025-01-31T12:00:00Z"
            })
        ).toBe("in 1 month");
    });

});
