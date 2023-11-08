import ServiceApi from "../../core/services/ServiceApi";

export default class ExpenseCategoryService extends ServiceApi {
	getListView(): string {
		throw new Error("Method not implemented.");
	}
	constructor() {
		super("expenseCategory");
	}
}
