import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default function CalendarImpl(props: { setSelectedDate: any }) {
	const onDateChange = (date: any) => {
		props.setSelectedDate(date);
	};

	return (
		<View style={styles.container}>
			<CalendarPicker onDateChange={onDateChange} />
		</View>
	);
}

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
