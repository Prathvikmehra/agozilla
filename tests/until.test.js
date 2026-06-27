const agozilla = require("../index");

describe("until()", () => {
    test("past dates", () => {
        expect(
            agozilla.until("2000-01-01")
        ).toBe("Date has already passed");
    });
});