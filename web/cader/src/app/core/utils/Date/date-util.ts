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
