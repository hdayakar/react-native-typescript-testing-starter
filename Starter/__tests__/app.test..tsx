// @ts-nocheck
import React from 'react';
import App from '../components/App';
import Child1 from '../components/child1';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
	// shallow App component
	const appComponent = shallow(<App prop1={1}/>);
	// get App instance
	const appInstance = appComponent.instance();

	// shallow Child1 component
	const child1Component = component.find(Child1).shallow();
	// get Child1 component instance
	const child1Component = component.find(Child1).shallow();
	
	it('generic check', () => {
		expect(child1Component.length).toBe(1);
	});

	it('child component state', () => {
		expect(child1Component.state('state1')).toEqual(100);
	});

	it('generic check', () => {
		expect(appComponent.length).toBe(1);
	});

	it('access private property', () => {
		expect(appInstance._privateProperty1).toEqual("foo");
	});

	it('setting and access component state', () => {
		appComponent.setState({ state1: 3 });
		// access state
		expect(appComponent.state('state1')).toEqual(3);
	});

	it('call method and checking state change', () => {
		appInstance.handler();
		expect(appComponent.state('state1')).toEqual(4);
	});

	it('mock method and check method called', () => {
		spyOn(appInstance, 'handler').and.callThrough();
		appInstance.handler();
		expect(appInstance.handler).toHaveBeenCalled();
	});

	it('read props', () => {
		const props = appInstance.props;
		expect(props).toEqual({ prop1: 1 });
	});

	it('set and check prop change', () => {
		appComponent.setProps({ prop1: 2 });
		const props = instance.props;
		expect(props).toEqual({ prop1: 2 });
	});
});
