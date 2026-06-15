declare function agozilla(
  dateString: string | Date,
  options?: {
    short?: boolean;
    maxUnits?: number;
    locale?: "en" | "es" | "fr";
  }
): string;

export = agozilla;