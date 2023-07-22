import PageList from "@/components/pageList/PageList";
import { ServiceExpenseCategory } from "@/services/services/expenseCategory/service";
import { GridValueGetterParams } from "@mui/x-data-grid";

class ExpenseCategoryList extends PageList<
	ExpenseCategory,
	ServiceExpenseCategory
> {
	constructor() {
		super(
			new ServiceExpenseCategory(),
			[
				{
					headerName: "Descrição",
					field: "name",
					width: 302,
				},
				{
					headerName: "Ativo",
					field: "active",
					width: 250,
					valueGetter: (params: GridValueGetterParams) =>
						`${params.row.active === 1 ? "Sim" : "Não"}`,
				},
			],
			false
		);
	}
}
export default ExpenseCategoryList;
