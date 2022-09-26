class Input {
	default: string
	disabled: boolean
	layout_path: string
	value: string
	
	constructor(default: string, disabled: boolean = false, layout_path: string = '') {
		this.default = default;
		this.disabled = disabled
		this.layout_path = layout_path
	}
	
	change() {
		if (!this.disabled) {
			this.value = value
		}
	}
}