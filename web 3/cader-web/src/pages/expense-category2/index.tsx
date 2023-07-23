import { Logged } from "@/components/logged/Logged";
import { StateView } from "@/data/constants/StateView";
import React from "react";
import ExpenseCategoryForm2 from "./form/FormPage";
import { EnumSimNao } from "@/data/constants/EnumSimNao";

export default function ExpenseCategoryView() {
	const [ob, setOb] = React.useState<ExpenseCategory>({
		active: EnumSimNao.SIM,
		name: "Teste",
		id: 3,
	});
	return (
		<Logged<ExpenseCategory> ob={ob} setOb={setOb}>
			<ExpenseCategoryForm2 ob={ob} disabled={StateView.BLOCK} />
		</Logged>
	);
}
