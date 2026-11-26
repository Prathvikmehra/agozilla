
const agozilla = require("../index");

describe("calendar()", () => {
    // Original tests
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

    // Localization and reference-time tests
    const now = new Date(2026, 0, 8, 12, 0);

    test("returns Hoy in Spanish", () => {
        expect(
            agozilla.calendar(new Date(2026, 0, 8), {
                locale: "es",
                now
            })
        ).toBe("Hoy");
    });

    test("returns Ayer in Spanish", () => {
        expect(
            agozilla.calendar(new Date(2026, 0, 7), {
                locale: "es",
                now
            })
        ).toBe("Ayer");
    });

    test("returns Mañana in Spanish", () => {
        expect(
            agozilla.calendar(new Date(2026, 0, 9), {
                locale: "es",
                now
            })
        ).toBe("Mañana");
    });

    test("returns Aujourd’hui in French", () => {
        expect(
            agozilla.calendar(new Date(2026, 0, 8), {
                locale: "fr",
                now
            })
        ).toBe("Aujourd’hui");
    });

    test("formats a nearby past weekday in Spanish", () => {
        expect(
            agozilla.calendar(new Date(2026, 0, 5), {
                locale: "es",
                now
            })
        ).toBe("el lunes pasado");
    });

    test("formats a nearby future weekday in Spanish", () => {
        expect(
            agozilla.calendar(new Date(2026, 0, 12), {
                locale: "es",
                now
            })
        ).toBe("el próximo lunes");
    });

    test("formats a nearby past weekday in French", () => {
        expect(
            agozilla.calendar(new Date(2026, 0, 5), {
                locale: "fr",
                now
            })
        ).toBe("lundi dernier");
    });

    test("formats a nearby future weekday in French", () => {
        expect(
            agozilla.calendar(new Date(2026, 0, 12), {
                locale: "fr",
                now
            })
        ).toBe("lundi prochain");
    });

    test("formats older dates using the Spanish locale", () => {
        const date = new Date(2024, 0, 1);

        expect(
            agozilla.calendar(date, {
                locale: "es",
                now
            })
        ).toBe(
            date.toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric"
            })
        );
    });

    test("formats older dates using the French locale", () => {
        const date = new Date(2024, 0, 1);

        expect(
            agozilla.calendar(date, {
                locale: "fr",
                now
            })
        ).toBe(
            date.toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric"
            })
        );
    });

    test("handles invalid reference dates", () => {
        expect(
            agozilla.calendar(new Date(), {
                locale: "es",
                now: "invalid"
            })
        ).toBe("Fecha de referencia no válida");
    });

    test("falls back to English for unsupported locales", () => {
        expect(
            agozilla.calendar(new Date(2026, 0, 8), {
                locale: "de",
                now
            })
        ).toBe("Today");
    });
});
