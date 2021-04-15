import React from "react";
import { Text, View } from "react-native";

export interface ViewProps {
	prop1?: number | undefined;
}

export interface ViewState {
	state1?: number;
}

export default class Child1 extends React.Component<ViewProps, ViewState> {
	private _privateProperty1: string;
	constructor(props: any) {
		super(props);
		this.state = {
			state1: this.props.prop1,
		};
		this.handler1 = this.handler1.bind(this);
		this._privateProperty1 = "foo";
	}

	get member1() {
		return this._privateProperty1;
	}

	private handler1() {
		this.setState({state1: 4});
	}

	componentDidMount() {}

	render() {
		return (
			<View>
				<Text>hello</Text>
				<button onClick={() => this.handler1()} >Increment</button>
			</View>
		)
	}
}