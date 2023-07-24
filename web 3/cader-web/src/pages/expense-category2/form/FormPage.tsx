import CardImpl from "@/components/card";
import InputTextImpl from "@/components/inputtext";
import SwitchImpl from "@/components/switch/SwitchImpl";
import styles from "./styles.module.css";

export default function ExpenseCategoryForm(props: {
	ob: ExpenseCategory;
	disabled: boolean;
}) {
	return (
		<CardImpl>
			<div style={{ padding: 10 }}>
				<div className={styles.name}>
					<InputTextImpl
						ob={props.ob}
						atr={"name"}
						label={"Nome"}
						disabled={props.disabled}
					/>
				</div>
				<div>
					<SwitchImpl
						label="Ativo"
						ob={props.ob}
						atr={"active"}
						disabled={props.disabled}
					/>
				</div>
			</div>
		</CardImpl>
	);
}
