import React from "react";
import { Text, View } from "react-native";
import Child1 from "./child1";
// import { OtherClass } from "./OtherClass";

export interface ViewProps {
	prop1?: number | undefined;
	// prop2?: string | undefined;
}

export interface ViewState {
	state1?: number;
	//height?: number;
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

	
	get member1() {
		return this._privateProperty1;
	}

	private handler() {
		this.setState({state1: 4});
		//console.log("test");
	}
	// private _appOtherClass!: OtherClass;
	componentDidMount() {
		//this._appOtherClass = new OtherClass("changed");
		//this._appOtherClass.handleChange("new");
	}
	render() {
		// const prop1 = this.props.prop1;
		// const prop2 = this.props.prop2;
		return (
			<View>
				<Child1 prop1={ 100 }/>
				<Text>hello</Text>
				<button onClick={() => this.handler()} >Increment</button>
			</View>
		)
	}
}