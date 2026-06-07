declare function agozilla(
  dateString: string | Date,
  options?: {
    short?: boolean;
    maxUnits?: number;
  }
): string;

export = agozilla;