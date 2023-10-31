import React, { ReactNode } from "react";
import { View } from "react-native";

export default abstract class ViewFilter extends React.Component {
	public abstract show(): ReactNode;

	render() {
		return <View>{this.show()}</View>;
	}
}
