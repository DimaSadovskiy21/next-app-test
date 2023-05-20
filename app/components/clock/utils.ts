const dateOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
} as const;

const timeOptions = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
} as const;

export const generateRuDateFormat = (date: Date) => date.toLocaleString('ru', dateOptions);

export const generateEnDateFormat = (date: Date) => date.toLocaleString('en-US', dateOptions);

export const generateRuTimeFormat = (date: Date) => date.toLocaleString('ru', timeOptions);

export const generateEnTimeFormat = (date: Date) => date.toLocaleString('en-US', timeOptions);
