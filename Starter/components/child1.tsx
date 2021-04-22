import React from "react";
import { View } from "react-native";

export interface ViewProps {
	childProp1?: number | undefined;
}

export interface ViewState {
	childState1?: number;
}

export default class Child1 extends React.Component<ViewProps, ViewState> {
	constructor(props: any) {
		super(props);
		this.state = {
			childState1: this.props.childProp1,
		};
	}

	render() {
		return (
			<View></View>
		)
	}
}