import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import Modal from "react-native-modal";
import { formatDateToAPI, formatDateToView } from "../../util/ToolDate";
import CalendarImpl from "./base/CalendarImpl";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const InputDateImpl = (props: {
	ob: any;
	atribute: string;
	label: string;
	value?: Date | string;
}) => {
	const [selectedDate, setSelectedDate] = useState<Date | string | null>(
		props.value ? props.value : null
	);
	const [isCalendarVisible, setCalendarVisible] = useState(false);
	const onTextInputPress = () => {
		setCalendarVisible(true);
	};

	const onClear = () => {
		setSelectedDate(null);
		props.ob[props.atribute] = undefined;
	};

	const closeModal = () => {
		setCalendarVisible(false);
	};

	const onDateChange = (date: Date) => {
		setSelectedDate(formatDateToView(date));
		if (props && props.ob && props.atribute) {
			props.ob[props.atribute] = formatDateToAPI(date);
		}
		setCalendarVisible(false);
	};

	return (
		<View style={styles.container}>
			<Text>{props.label}</Text>
			<View style={styles.line}>
				<View style={styles.inputView}>
					<TouchableOpacity onPress={onTextInputPress}>
						<TextInput
							style={styles.input}
							placeholder="Toque para selecionar a data"
							editable={false}
							value={selectedDate ? selectedDate.toString() : ""}
						/>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity style={styles.button} onPress={onClear}>
						<FontAwesomeIcon color="#ff2424" icon={faX} />
					</TouchableOpacity>
				</View>
			</View>
			<Modal
				isVisible={isCalendarVisible}
				onBackdropPress={closeModal}
				style={styles.modal}
			>
				<View style={styles.modalContainer}>
					<Text>Selecione uma data:</Text>
					<CalendarImpl setSelectedDate={onDateChange} />
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 5,
		margin: 5,
	},
	input: {
		height: 40,
		padding: 10,
		borderWidth: 1,
	},
	modalContainer: {
		backgroundColor: "white",
		width: "100%",
		padding: 15,
	},
	modal: {
		width: "100%",
		margin: 0,
		padding: 0,
	},
	line: {
		flexDirection: "row",
		alignItems: "center",
	},
	inputView: {
		flex: 1,
	},
	button: {
		backgroundColor: "#cccccc",
		padding: 10,
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4,
	},
});

export default InputDateImpl;
