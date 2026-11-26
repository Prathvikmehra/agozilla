
import agozilla from "../index";

const referenceDate = new Date("2026-01-01T14:00:00Z");

agozilla(referenceDate, {
    locale: "es",
    now: referenceDate
});

agozilla.fromNow(referenceDate, {
    locale: "fr",
    now: referenceDate
});

agozilla.duration(
    "2020-01-01",
    "2025-01-01",
    { locale: "es" }
);

agozilla.until(referenceDate, {
    locale: "en",
    now: referenceDate
});

agozilla.smart(referenceDate, {
    locale: "es",
    now: referenceDate
});

agozilla.calendar(referenceDate, {
    locale: "fr",
    now: referenceDate
});
