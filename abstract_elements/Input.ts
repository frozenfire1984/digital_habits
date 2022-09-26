class Input {
	default_val: string
	disabled: boolean
	layout_path: string
	value: string
	
	constructor(default_val: string, disabled: boolean = false, layout_path: string = '') {
		this.default_val = default_val;
		this.disabled = disabled
		this.layout_path = layout_path
	}
	
	change(value) {
		if (!this.disabled) {
			this.value = value
		}
	}
}

