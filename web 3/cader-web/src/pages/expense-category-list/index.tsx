import PageList from "@/components/pageList/PageList";
import { ServiceExpenseCategory } from "@/services/services/expenseCategory/service";

class ExpenseCategoryList extends PageList<
	ExpenseCategory,
	ServiceExpenseCategory
> {
	constructor() {
		super(new ServiceExpenseCategory(), [
			{ headerName: "Descrição", field: "name" },
			{ headerName: "Ativo", field: "active" },
		]);
	}
}
export default ExpenseCategoryList;
