const agozilla = require("../index");

describe("duration()", () => {
    test("returns Invalid date", () => {
        expect(
            agozilla.duration("abc", "xyz")
        ).toBe("Invalid date");
    });

    test("returns a string", () => {
        expect(
            typeof agozilla.duration(
                "2020-01-01",
                "2025-01-01"
            )
        ).toBe("string");
    });
}); 