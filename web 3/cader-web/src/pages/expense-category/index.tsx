import PageEntity from "@/components/pageEntity/PageEntity";
import { ServiceExpenseCategory } from "@/services/services/expenseCategory/service";
import ExpenseCategoryForm from "./form/FormPage";

class ExpenseCategoryView extends PageEntity<
	ExpenseCategory,
	ServiceExpenseCategory
> {
	constructor() {
		super(new ServiceExpenseCategory());
	}

	showView() {
		return (
			<>
				<ExpenseCategoryForm ob={this.ob} disabled={this.state.stateView} />
			</>
		);
	}
}
export default ExpenseCategoryView;
