const agozilla = require("../index");

describe("smart()", () => {
    test("today", () => {
        expect(
            agozilla.smart(new Date())
        ).toBe("Today");
    });

    test("invalid date", () => {
        expect(
            agozilla.smart("abc")
        ).toBe("Invalid date");
    });
});