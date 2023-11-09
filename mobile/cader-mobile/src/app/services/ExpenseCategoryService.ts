import ServiceApi from "../../core/services/ServiceApi";

export default class ExpenseCategoryService extends ServiceApi {
	constructor() {
		super("expenseCategory");
	}

	getEntitiView(): string {
		throw new Error("Method not implemented.");
	}
	getListView(): string {
		throw new Error("Method not implemented.");
	}
}
