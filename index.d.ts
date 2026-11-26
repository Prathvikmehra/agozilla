
export interface AgozillaOptions {
    short?: boolean;
    maxUnits?: number;
    locale?: "en" | "es" | "fr";
}

export interface AgozillaRelativeOptions extends AgozillaOptions {
    now?: string | number | Date;
}

interface Agozilla {
    (
        dateString: string | Date,
        options?: AgozillaRelativeOptions
    ): string;

    fromNow(
        dateString: string | Date,
        options?: AgozillaRelativeOptions
    ): string;

    duration(
        startDate: string | Date,
        endDate: string | Date,
        options?: AgozillaOptions
    ): string;

    until(
        date: string | Date,
        options?: AgozillaRelativeOptions
    ): string;

    smart(
        date: string | Date,
        options?: AgozillaRelativeOptions
    ): string;

    calendar(
        date: string | Date,
        options?: AgozillaRelativeOptions
    ): string;
}

declare const agozilla: Agozilla;

export = agozilla;
