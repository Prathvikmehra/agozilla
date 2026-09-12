export interface AgozillaOptions {
    short?: boolean;
    maxUnits?: number;
    locale?: "en" | "es" | "fr";
}

interface Agozilla {
    (
        dateString: string | Date,
        options?: AgozillaOptions
    ): string;

    fromNow(
        dateString: string | Date,
        options?: AgozillaOptions
    ): string;

    duration(
        startDate: string | Date,
        endDate: string | Date,
        options?: AgozillaOptions
    ): string;

    until(
        date: string | Date,
        options?: AgozillaOptions
    ): string;

    smart(
        date: string | Date,
        options?: AgozillaOptions
    ): string;

    calendar(
        date: string | Date
    ): string;

}

declare const agozilla: Agozilla;

export = agozilla;
