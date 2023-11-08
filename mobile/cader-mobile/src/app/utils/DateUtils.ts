export function formatDateToAPI(data: Date) {
	const formatadorData = new Intl.DateTimeFormat("pt-BR", {
		year: "numeric",
		day: "2-digit",
		month: "2-digit",
	}); // Altere 'pt-BR' para o código do seu idioma

	const dataFormatada = formatadorData.format(data);
	const day = dataFormatada.substring(0, 2);
	const month = dataFormatada.substring(3, 5);
	const year = dataFormatada.substring(6, 10);
	const date = `${year}-${month}-${day}`;
	return date;
}

export function formatDateToView(data: Date) {
	const formatadorData = new Intl.DateTimeFormat("pt-BR", {
		year: "numeric",
		day: "2-digit",
		month: "2-digit",
	}); // Altere 'pt-BR' para o código do seu idioma

	const dataFormatada = formatadorData.format(data);
	const day = dataFormatada.substring(0, 2);
	const month = dataFormatada.substring(3, 5);
	const year = dataFormatada.substring(6, 10);
	const date = `${day}/${month}/${year}`;
	return date;
}

export function firstDayOfMonthAPI() {
	return formatDateToAPI(firstDayOfMonth());
}

export function lastDayOfMonthAPI() {
	return formatDateToAPI(lastDayOfMonth());
}

export function firstDayOfMonth(): Date {
	return new Date(new Date().getFullYear(), new Date().getMonth(), 1);
}

export function lastDayOfMonth(): Date {
	return new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
}
