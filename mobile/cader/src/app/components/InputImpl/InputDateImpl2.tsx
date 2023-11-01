import React, { useRef, useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import CalendarImpl from "./CalendarImpl";

const DateInputWithPicker = (props: { ob: any; atribute: string }) => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [isCalendarVisible, setCalendarVisible] = useState(false);
	const calendarRef = useRef<CalendarPicker | null>(null);
	const onTextInputPress = () => {
		setCalendarVisible(true);
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
			<Text>Selecione uma data:</Text>
			<TouchableOpacity onPress={onTextInputPress}>
				<TextInput
					style={styles.input}
					placeholder="Toque para selecionar a data"
					editable={false}
					value={selectedDate ? selectedDate.toString() : ""}
				/>
			</TouchableOpacity>
			{isCalendarVisible && <CalendarImpl setSelectedDate={onDateChange} />}
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
});

export default DateInputWithPicker;
