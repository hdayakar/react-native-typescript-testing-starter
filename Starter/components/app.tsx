import React from "react";
import { Text, View, Alert } from "react-native";
import Child1 from "./child1";

export interface ViewProps {
	prop1?: number | undefined;
}

export interface ViewState {
	state1?: number;
}

export default class App extends React.Component<ViewProps, ViewState> {
	private _privateProperty1: string;
	constructor(props: any) {
		super(props);
		this.state = {
			state1: this.props.prop1,
		};
		this.handler = this.handler.bind(this);
		this._privateProperty1 = "foo";
	}

	private handler() {
		this.setState({state1: 4});
	 	console.log("test");
	}

	render() {
		const prop1 = this.props.prop1;
		return (
			<View>
				<Child1 childProp1={ 100 }/>
			</View>
		)
	}
}