
const locales = {
    en: {
        year: "year",
        month: "month",
        day: "day",
        hour: "hour",
        minute: "minute",
        second: "second",

        ago: "ago",
        in: "in",

        justNow: "just now",
        invalidDate: "Invalid date",
        invalidReferenceDate: "Invalid reference date",
        alreadyPassed: "Date has already passed",
        zeroDuration: "0 seconds",

        today: "Today",
        yesterday: "Yesterday",
        tomorrow: "Tomorrow",

        intl: "en-US",

        pastWeekday: (weekday) => `Last ${weekday}`,
        futureWeekday: (weekday) => `Next ${weekday}`,

        formatPast: (value) => `${value} ago`,
        formatFuture: (value) => `in ${value}`
    },

    es: {
        year: ["año", "años"],
        month: ["mes", "meses"],
        day: ["día", "días"],
        hour: ["hora", "horas"],
        minute: ["minuto", "minutos"],
        second: ["segundo", "segundos"],

        ago: "hace",
        in: "en",

        justNow: "ahora mismo",
        invalidDate: "Fecha no válida",
        invalidReferenceDate: "Fecha de referencia no válida",
        alreadyPassed: "La fecha ya pasó",
        zeroDuration: "0 segundos",

        today: "Hoy",
        yesterday: "Ayer",
        tomorrow: "Mañana",

        intl: "es-ES",

        pastWeekday: (weekday) => `el ${weekday} pasado`,
        futureWeekday: (weekday) => `el próximo ${weekday}`,

        formatPast: (value) => `hace ${value}`,
        formatFuture: (value) => `en ${value}`
    },

    fr: {
        year: ["an", "ans"],
        month: "mois",
        day: "jour",
        hour: "heure",
        minute: "minute",
        second: "seconde",

        ago: "il y a",
        in: "dans",

        justNow: "à l’instant",
        invalidDate: "Date invalide",
        invalidReferenceDate: "Date de référence invalide",
        alreadyPassed: "La date est déjà passée",
        zeroDuration: "0 seconde",

        today: "Aujourd’hui",
        yesterday: "Hier",
        tomorrow: "Demain",

        intl: "fr-FR",

        pastWeekday: (weekday) => `${weekday} dernier`,
        futureWeekday: (weekday) => `${weekday} prochain`,

        formatPast: (value) => `il y a ${value}`,
        formatFuture: (value) => `dans ${value}`
    }
};

module.exports = locales;
