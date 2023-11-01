import React, { useRef, useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import CalendarImpl from "./base/CalendarImpl";
import Modal from "react-native-modal";

const InputDateImpl = (props: { ob: any; atribute: string; label: string }) => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [isCalendarVisible, setCalendarVisible] = useState(false);
	const calendarRef = useRef<CalendarPicker | null>(null);
	const onTextInputPress = () => {
		setCalendarVisible(true);
	};

	const closeModal = () => {
		setCalendarVisible(false);
	};

	const onDateChange = (date: Date) => {
		setSelectedDate(date);
		if (props && props.ob && props.atribute) {
			props.ob[props.atribute] = date;
		}
		setCalendarVisible(false);
	};

	return (
		<View style={styles.container}>
			<Text>{props.label}</Text>
			<TouchableOpacity onPress={onTextInputPress}>
				<TextInput
					style={styles.input}
					placeholder="Toque para selecionar a data"
					editable={false}
					value={selectedDate ? selectedDate.toString() : ""}
				/>
			</TouchableOpacity>
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
});

export default InputDateImpl;
