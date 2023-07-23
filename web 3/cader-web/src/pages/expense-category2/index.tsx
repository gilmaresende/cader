import { Logged } from "@/components/logged/Logged";
import { ServiceExpenseCategory } from "@/services/services/expenseCategory/service";
import React from "react";
import ExpenseCategoryForm from "./form/FormPage";

export default function ExpenseCategoryView() {
	const service = new ServiceExpenseCategory();
	const [disabled, setDisabled] = React.useState(false);
	const [ob, setOb] = React.useState<ExpenseCategory>(service.newEntity());

	return (
		<>
			<Logged
				title="Categoria Despesa"
				disabled={disabled}
				service={service}
				ob={ob}
				setOb={setOb}
				setDisabled={setDisabled}
			>
				<ExpenseCategoryForm disabled={disabled} ob={ob!} />
			</Logged>
		</>
	);
}
