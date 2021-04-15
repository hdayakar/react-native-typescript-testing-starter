class someClass1 {
	private _privateProperty1;
	constructor(arg: any) {
		this._privateProperty1 = arg;
	}
	public handleChange(arg: string): void {
		this._privateProperty1 = arg;
	}
}

export { someClass1 };