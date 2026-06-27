const agozilla = require("../index");

describe("fromNow()", () => {
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
});