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

export function getToday(): Date {
  const date = new Date();
  return date;
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

export function getMilisegundos(dateInput: Date): number {
  const format = verificarFormatoData(dateInput);

  if (format == FORMAT.LOCAL_DATE) {
    return getMilisegundosFromLocalDate(dateInput);
  } else {
    return dateInput.getTime();
  }
}

function getMilisegundosFromLocalDate(dateInput: Date) {
  const [ano, mes, dia] = dateInput.toString().split('-');
  const date = new Date(Date.UTC(Number(ano), Number(mes) - 1, Number(dia)));
  // Obter os milissegundos desde 1 de janeiro de 1970 até a data especificada
  const milliseconds = date.getTime();

  return milliseconds + UNIDADES_TIME.DIFERENCA_FUSO_MILISEGUNDOS;
}

function verificarFormatoData(dataString: any) {
  // Expressão regular para verificar se a string está no formato "YYYY-MM-DD"
  const formato1 = /^\d{4}-\d{2}-\d{2}$/;

  // Expressão regular para verificar se a string está em um formato de data completo
  const formato2 =
    /^\w{3} \w{3} \d{1,2} \d{4} \d{2}:\d{2}:\d{2} .+\d{4} \(.+\)$/;

  if (formato1.test(dataString)) {
    return FORMAT.LOCAL_DATE;
  } else if (formato2.test(dataString)) {
    return FORMAT.DATE;
  } else {
    return FORMAT.OTHER;
  }
}

const FORMAT = {
  LOCAL_DATE: 1,
  DATE: 2,
  OTHER: 3,
};

const UNIDADES_TIME = {
  HORA_MILISEGUNDOS: 3600000,
  DIFERENCA_FUSO_MILISEGUNDOS: 3600000 * 3,
};
