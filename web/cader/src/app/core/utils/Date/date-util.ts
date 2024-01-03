export function getFirstDayMonth(): Date {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  return firstDay;
}

export function getLastDayMonth(): Date {
  const date = new Date();
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return lastDay;
}

export function dateToStr(date: Date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adiciona um zero à esquerda se necessário
  const day = date.getDate().toString().padStart(2, '0'); // Adiciona um zero à esquerda se necessário

  // Formate a data no formato 'YYYY-MM-DD'
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export function getFirstDayMonthYYYYMMDD(): string {
  const date = dateToStr(getFirstDayMonth());
  return date;
}

export function getLastDayMonthYYYYMMDD(): string {
  const date = dateToStr(getLastDayMonth());
  return date;
}
